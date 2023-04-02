let metronomeInterval;
let isPlaying = false;
let audioContext = new AudioContext();
let audioBuffer;
let gainNode = audioContext.createGain();

function loadAudioFile(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
            audioContext.decodeAudioData(xhr.response, (buffer) => {
                audioBuffer = buffer;
                resolve(buffer);
            });
        };
        xhr.onerror = reject;
        xhr.send();
    });
}

loadAudioFile("/assets/audio/metronome.wav").then(() => {
    let sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
});

function stopMetronome() {
    let button = document.getElementsByClassName("metronome-toggle").item(0);
    clearInterval(metronomeInterval);
    button.classList.remove("select");
    isPlaying = false;
}

function toggleMetronome() {
    let button = document.getElementsByClassName("metronome-toggle").item(0);
    if (isPlaying) {
        stopMetronome();
    } else {
        let bpm = parseInt(document.getElementById("bpm-value").textContent);
        let ms = 60000/bpm;
        metronomeInterval = setInterval(() => {
            let sourceNode = audioContext.createBufferSource();
            sourceNode.buffer = audioBuffer;
            sourceNode.connect(gainNode);
            sourceNode.start();
        }, ms);
        button.classList.add("select");
        isPlaying = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let bpmSlider = document.getElementById("bpm");
    let bpmValueText = document.getElementById("bpm-value");
    let volumeSlider = document.getElementById("metronome-volume");
    bpmSlider.addEventListener("input", () => {
        bpmValueText.textContent = bpmSlider.value;
        if(isPlaying) {
            stopMetronome();
        }
    });
    volumeSlider.addEventListener("input", () => {
        gainNode.gain.value = volumeSlider.value / 100;
    })
}, false);
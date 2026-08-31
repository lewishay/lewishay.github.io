addEventListener("DOMContentLoaded", (event) => { 
    var containers = document.getElementsByTagName("section");
    containers[0].style.display = "flex";
    var listItems = document.getElementsByTagName("li");
    listItems[0].classList.add("clicked");
})

function show(project) {
    var containers = document.getElementsByTagName("section");
    for (const el of containers) {
        el.style.display = "none";
    }
    var listItems = document.getElementsByTagName("li");
    for (const el of listItems) {
        el.classList.remove("clicked");
    }

    var selectedContainer = document.getElementById("content-" + project);
    const iframe = selectedContainer.querySelector('iframe');
    if (iframe && !iframe.src) {
        iframe.src = iframe.dataset.src; // lazy setting of src, prevents yt thumbnails in hidden iframes from being blurry
    }
    selectedContainer.style.display = "flex";
    var selectedListItem = document.getElementById(project);
    selectedListItem.classList.add("clicked");
}

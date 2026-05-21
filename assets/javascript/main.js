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
    selectedContainer.style.display = "flex";
    var selectedListItem = document.getElementById(project);
    selectedListItem.classList.add("clicked");
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if(event.target == modal) {
        modal.classList.remove("active");
    }
}

function closeModel() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("active");
}

function openModal() {
    var modal = document.getElementById("myModal");
    modal.classList.add("active");
}


const loadButton = document.getElementById("toDoBtn");
loadButton.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = "flex";
});
/*
document.getElementById('toDoBtn').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "flex";
});
*/

document.querySelector('.close').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "none";
});

//const view = document.querySelector('.complete-btn');





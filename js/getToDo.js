const contentsPath = 'data/toDoList.json';
const todoButton = document.getElementById("addBtn");

const todoList = document.querySelector(".todo-list");


const itemDetail = document.getElementById('detail');

const title = document.getElementById('title');
const description = document.getElementById('description');
const dueDate = document.getElementById('dateTime');

let row, col;

const populate = (contents, id) => {


    if (id === 'secondPop') {

        //   contents.forEach(person => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        var completedButton = document.createElement("button");
        var trashButton = document.createElement("button");
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerHTML = contents[contents.length - 1].title;
        todoDiv.appendChild(newTodo);

        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");

        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);

        newTodo.addEventListener('click', () => {
            document.querySelector('.detailContainer').style.display = "flex";
            for (let i = 0; i < contents.length; i++) {
                if (contents[i].title === newTodo.innerHTML) {
                    viewToDo(contents[i]);
                    break;
                }
            }
        });

    } else {

        contents.forEach(person => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            var completedButton = document.createElement("button");
            var trashButton = document.createElement("button");
            const newTodo = document.createElement('li');
            newTodo.classList.add('todo-item');
            newTodo.innerHTML = person.title;
            todoDiv.appendChild(newTodo);

            completedButton.innerHTML = '<i class="fas fa-check"></i>';
            completedButton.classList.add("complete-btn");
            todoDiv.appendChild(completedButton);

            trashButton.innerHTML = '<i class="fas fa-trash"></i>';
            trashButton.classList.add("trash-btn");

            todoDiv.appendChild(trashButton);
            todoList.appendChild(todoDiv);

            newTodo.addEventListener('click', () => {
                document.querySelector('.detailContainer').style.display = "flex";
                for (let i = 0; i < contents.length; i++) {
                    if (contents[i].title === newTodo.innerHTML) {
                        viewToDo(contents[i]);
                        break;
                    }
                }
            });
        });
    }

}

const titleToDo = document.createElement('li');
const descriptionToDo = document.createElement('li');
const dateToDo = document.createElement('li');
const titleLabel = document.createElement('h3');
titleLabel.innerText = "Title: ";
const descriptionLabel = document.createElement('h3');
descriptionLabel.innerText = "Description: ";
const dueDateLabel = document.createElement('h3');
dueDateLabel.innerText = "Due Date: ";
const viewToDo = (contents) => {

    titleToDo.innerText = contents.title;
    descriptionToDo.innerText = contents.description;
    dateToDo.innerText = contents.dueDate;
    itemDetail.appendChild(titleLabel);
    itemDetail.appendChild(titleToDo);
    itemDetail.appendChild(descriptionLabel);
    itemDetail.appendChild(descriptionToDo);
    itemDetail.appendChild(dueDateLabel);
    itemDetail.appendChild(dateToDo);
}


document.querySelector('.closeDetail').addEventListener("click", function () {
    document.querySelector('.detailContainer').style.display = "none";
});

//check function
function deleteCheck(e) {
    const item = e.target;
    //Delete todo
    console.log(item);
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', () => {
            todo.remove();

        });
    }

    //check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function validateForm() {
    var x = document.forms["taskForm"]["titleName"].value;
    if (x === "") {
        alert("Task Name Must Be Filled Out");
        return false;
    }
    return true;
}


const xhr = new XMLHttpRequest();
xhr.open('GET', contentsPath);
xhr.addEventListener('load', (evt) => {

    const contents = JSON.parse(evt.target.responseText);
    populate(contents);

    todoButton.addEventListener('click', () => {
        contents.push({ "title": title.value, "description": description.value, "dueDate": dueDate.value });

        if (validateForm()) {
            document.querySelector('.bg-modal').style.display = "none";

            console.log(contents);

            populate(contents, "secondPop");
        }

    });


});
xhr.send();


//Event Listners
//todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
//itemContainer.addEventListener('click', deleteCheck);



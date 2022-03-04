var elForm = document.querySelector(".form");

var elInput = document.querySelector(".form__input");

var elList = document.querySelector(".list");

var todos = [];

elForm.addEventListener("submit" , function (evt){
    evt.preventDefault()

    var inputValue = elInput.value.trim();

    var todo = {
        id: todos.length,
        title: inputValue,
    };

    todos.push(todo.title);

    elList.innerHTML = "";

    for (var item of todos) {

        var addLi = document.createElement("li");
        
        addLi.textContent = item;

        elList.appendChild(addLi);

        elInput.value = ""
    }
});
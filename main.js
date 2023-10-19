const input = document.getElementById('toDo');
const list = document.querySelector('.content-list')
const todos = [];
const validateInput = () => input.value.trim().length > 0;

function add(){
    const inputIsValid = validateInput();

    if (!inputIsValid){
        return input.classList.add("error")
    }

   todos.push(input.value)
    let tasks = list

   tasks.innerHTML = ''
    for(let i = 0; i < todos.length; i ++) {
        tasks.innerHTML += 
    `<ul> 
        <li> 
        <input type="checkbox"/><span> ${i+1} - ${todos[i]}</span>
        </li>
     </ul>`
    }
    document.getElementById('toDo').value = null;
}



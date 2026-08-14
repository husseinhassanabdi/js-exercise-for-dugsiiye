
function addItem() { 
    const list = document.querySelector("#list")
    const newItem = document.createElement("li");
    newItem.textContent = "newItem";
    list.appendChild(newItem);

}

function removeItem() {
    const list = document.querySelector("#list");
    if (list.lastChild ) {
        list.removeChild(list.lastChild);
    } else alert (" theres no item to remove anymore stop it")

}

var listName=document.getElementById("nameBox");
var changeNameBtn=document.getElementById("changeName");
var oldListName=document.getElementsByTagName("p")[0];

changeNameBtn.addEventListener("click", changeName=()=>{
    oldListName.innerHTML=listName.value;
})

let ul=document.getElementsByTagName("ul")[0];
let addItemBox=document.getElementById("addBox");
let addItemBtn=document.getElementById("addBtn");
addItemBtn.addEventListener("click", addItem=()=>{
    if(addItemBox.value.length >0 ){
        let newItem = document.createElement("li");
        newItem.appendChild(document.createTextNode(addItemBox.value));
        ul.appendChild(newItem);
        addItemBox.value = "";
    }
})
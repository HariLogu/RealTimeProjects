const noteContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelector(".input");

// fifth
function showNotes(){
    noteContainer.innerHTML=localStorage.getItem("notes");
}

showNotes();

// third
function UpdateStorage(){
    localStorage.setItem("notes",noteContainer.innerHTML);
}

//first
createBtn.addEventListener("click",()=>{
    let input=document.createElement("p");
    let img=document.createElement("img");
    input.className="input";
    input.setAttribute("contenteditable","true");
    input.setAttribute("spellcheck","false");//remove wiggly lines
    img.src="delete.png";
    noteContainer.appendChild(input).appendChild(img)
});

// second
noteContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        const warning=confirm("you sure");
        if(warning){
            e.target.parentElement.remove();
            UpdateStorage();
        }
    }
    // fourth
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input");
        notes.forEach((note)=>{
            note.onkeyup=function(){
                UpdateStorage();
            }
        })
    }
});








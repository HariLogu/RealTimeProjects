const items=document.querySelectorAll('ul li a');
items.forEach(item=>{
    item.addEventListener("click",function(){
            items.forEach(i=>i.classList.remove("active"));
                this.classList.add("active")
        });
});

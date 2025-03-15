var popup=document.getElementById("toast-cont");
var input=document.getElementById("input");
function copy(){
    if(input.value){
        popup.classList.add("copied");
        setTimeout(()=>{
            popup.classList.remove("copied")
        },4000)
        input.select();
        input.setSelectionRange(0,99999);
        navigator.clipboard.writeText(input.value);
    }
    else{
        window.alert("Please generate the password")
    }
}
function generate(){
    let final="";
    constchars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789`-=[]!@#$%^&()_{}|":<>?";,./+';
    
    let c=0;
    while(c<20){
        let rand=Math.floor(Math.random()*chars.length)+1;
        final=final+chars.charAt(rand);
        c+=1;
    }
    input.value=final;
}
function clear1(){
    input.value="";
}
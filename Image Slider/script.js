// selecting container element
let cont=document.querySelector(".cont");

// selecting button elements
let btn=document.querySelectorAll(".btn");

// creating image array
const ImgArray=["pancard1.png","picture1.png","yt.jpg","resized_image_1.jpg","logu.jpg"];

// setting index starts from zero
let index=0;

// loop through the button elements
btn.forEach((button)=>{

    // adding eventListeners
    button.addEventListener("click",()=>{

        // checking if the btn consists of the class name back
        if(button.classList.contains("back")){
            // decrementing the index
            index--;
            // checking the edge case using the condition
            if(index<0){
                index=ImgArray.length-1;
            }
            // adding background property using style property
            cont.style.background=`url("${ImgArray[index]}") center/cover fixed no-repeat`
        }
        else{
            // checking if the btn consists of the class name next
            // incrementing the index
            index++;
            // checking the edge case using the condition
            if(index>ImgArray.length-1){
                index=0;
            }
            // adding background property using style property
            cont.style.background=`url("${ImgArray[index]}") center/cover fixed no-repeat`
        }
    })
})
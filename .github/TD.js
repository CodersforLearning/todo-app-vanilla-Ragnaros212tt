const num=document.querySelector(".number")
const btns=document.querySelectorAll(".btns")
const coun=document.querySelector(".coun")
let count=0
btns.forEach(function(btn){
    btn.addEventListener("click",function(c){
        const display=c.currentTarget.classList
        console.log(display)
        if(display.contains('decrease')){
            count--
        }
        if(display.contains('increase')){
            count++
        }
        if(display.contains('reset')){
            count=0
        }
        num.textContent=count
    if (count>0){coun.style.color="green"}
    })
}) 
    

console.log(btn)

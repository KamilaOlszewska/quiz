const input = document.querySelectorAll("input");

for (let el of input){
    el.addEventListener("input", e=>{
    console.log(el.parentElement)
    ;})
    el.addEventListener("click",e=>{
        el.parentElement.style.backgroundColor= "#aaa";
    })
}
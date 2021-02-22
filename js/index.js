const input = document.querySelectorAll("input");
for (let el of input){
    el.addEventListener("input", e=>
    console.log(el))
}
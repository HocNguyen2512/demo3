const menuBar = document.querySelector(".menu-bar")
console.log(menuBar);
menuBar.addEventListener("click", function(){
 menuBar.classList.toggle("active")
 console.log(menuBar);
 document.querySelector(".menu-items").classList.toggle("active")

})
const toP = document.querySelector(".top")
window.addEventListener("scroll",function()
{
    const x = this.pageYOffset;
    if(x>80){toP.classList.add("active")}
    else{toP.classList.remove("active")}
})


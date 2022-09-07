const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function(x){
    if(x.target.classList.contains("menu-button")){
        const target = x.target.getAttribute("data-title");
        console.log(target);
        // menuTitle.querySelector("lunch-active"). classList.remove("lunch-active");
        // x.target.classList.add("lunch-active");

        // const menuItem = document.querySelector(".menu");
        // menuItem.querySelector(".menu-item-content.lunch-active").classList.remove("lunch-active");
        // menuItem.querySelector(target).classList.add("lunch-active")
    }
})

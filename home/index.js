document.querySelectorAll(".menu-button").forEach(button =>{
    button.addEventListener('click', function(event) {
        document.querySelectorAll('.menu-item').forEach(item =>{
            if(item.querySelector('.menu-button')!==button){
                 item.classList.remove('menu-item-open')
            }
           
        })
        event.isClick = true
        button.parentElement.classList.toggle('menu-item-open')
    } )
})

document.body.addEventListener('click', function(event) {
    if (
        event._isClik == true || 
        event.target.classList.contains("menu-button") == true 
    )return

    document.querySelectorAll('.menu-item').forEach(item =>{
        item.classList.remove('menu-item-open')
    })
})


const carousel = document.querySelector(".carousel");

const dragging = (e) =>{
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);

if(window.innerWidth < 960) {
    document.querySelector('.image_area > img').src = "src/images/image-hero-mobile.png"
}

window.addEventListener('resize', () => {
    if(window.innerWidth < 960) {
        document.querySelector('.image_area > img').src = "src/images/image-hero-mobile.png"
    }
    else  {
        document.querySelector('.image_area > img').src = "src/images/image-hero-desktop.png"
    }
})

const dropElements = document.querySelectorAll('.drop_item > a')
const overlay = document.getElementById('overlay')
const menuOpen = document.querySelector('.mobile_button > img')
const menuClose = document.querySelector('.close_button > img')
const mobileMenu = document.querySelector('.mobile_menu')
const mobileInteraction = document.querySelectorAll('.mobile_menu > ul > li > a')

mobileInteraction.forEach(element => {
    element.addEventListener('click', () =>{
        const collapseMenu = document.querySelector(`div[data-target="${element.id}"]`)
       collapseMenu.classList.toggle('active')
    })
})





menuOpen.addEventListener('click', () => {
    overlay.setAttribute('style','display:block;')
    menuOpen.setAttribute('style','display:none')
 
    mobileMenu.setAttribute('style','right : 0;')
})
menuClose.addEventListener('click', () => {
    overlay.setAttribute('style','display:none;')
    mobileMenu.setAttribute('style','right : -100%;')
    menuOpen.setAttribute('style','display:block')
    
 
})


dropElements.forEach((element) => {
    const dropElement = document.querySelector(`div[data-target="${element.id}"]`)
    dropElement.addEventListener('mouseover', () => {
        dropElement.setAttribute('style','visibility:visible;')
    })
    dropElement.addEventListener('mouseout', () => {
        dropElement.setAttribute('style','visibility:hidden;')
    })
    element.addEventListener('mouseover',() => {
        dropElement.setAttribute('style','visibility:visible;')
    
    })
    element.addEventListener('mouseout', () => {
        dropElement.setAttribute('style','visibility:hidden;')
    })

})
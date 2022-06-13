const nav = document.querySelector('.nav')
const btn = document.querySelector('.fa-bars')
const allNavItems = document.querySelectorAll('.effect')
const close = document.querySelector('.fa-circle-xmark')


const handleNav = () => {
    nav.classList.toggle('active')
    allNavItems.forEach(item => {
        item.addEventListener('click', () =>{
            nav.classList.remove('active')
        })
    })
    
}
btn.addEventListener('click',handleNav)
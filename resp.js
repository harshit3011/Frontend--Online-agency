burger=document.querySelector('.burger')
navlist=document.querySelector('.navlist')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
btn2=document.querySelector('.btn2')
btn3=document.querySelector('.btn3')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
btn2.addEventListener('click',()=>{
    window.location.href = 'https://www.youtube.com/@WIRED';
})
btn3.addEventListener('click',()=>{
    window.location.href = 'https://youtu.be/OWJCfOvochA';
})


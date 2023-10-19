const togglebtn=document.getElementById('toggleButton');
const navlinks=document.getElementById('navlinks');

togglebtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('active');
});

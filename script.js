document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>nav.style.background=scrollY>30?'rgba(5,11,24,.72)':'transparent');
nav.style.backdropFilter='blur(14px)';

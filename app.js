document.getElementById('yr').textContent=new Date().getFullYear();
var root=document.documentElement;
try{var t=localStorage.getItem('theme');if(t)root.setAttribute('data-theme',t)}catch(e){}
document.getElementById('theme').onclick=function(){
  var dark=root.getAttribute('data-theme')?root.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
  var n=dark?'light':'dark';root.setAttribute('data-theme',n);
  try{localStorage.setItem('theme',n)}catch(e){}
};
// function setPal(p){
//   if(p)root.setAttribute('data-palette',p);else root.removeAttribute('data-palette');
//   document.querySelectorAll('#pal button').forEach(function(b){b.classList.toggle('on',b.dataset.p===(p||''))});
//   try{localStorage.setItem('pal',p||'')}catch(e){}
// }
// document.querySelectorAll('#pal button').forEach(function(b){b.onclick=function(){setPal(b.dataset.p)}});
// try{setPal(localStorage.getItem('pal')||'')}catch(e){}
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(e.isIntersecting){e.target.classList.add('in');
    e.target.querySelectorAll('.fill').forEach(function(f){f.style.width=f.dataset.w+'%'});
    io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});

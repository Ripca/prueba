const barra=document.getElementById("barra");
const barra2=document.getElementById("barra2");

const rootStyles=document.documentElement.style;

barra.addEventListener("click", (e)=>{
    rootStyles.setProperty('--transparenc-e',`${e.target.value}%`)
    
})
barra2.addEventListener("click", (e)=>{
    
    rootStyles.setProperty('--size',`${e.target.value}px`)
})
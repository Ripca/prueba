const barra=document.getElementById("barra");

const rootStyles=document.documentElement.style;

barra.addEventListener("click", (e)=>{
    rootStyles.setProperty('--transparenc-e',`${e.target.value}%`)
})
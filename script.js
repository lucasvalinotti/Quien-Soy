const cmdSigno = document.querySelector("#signo");
const personajes = document.querySelectorAll("#personaje");

cmdSigno.addEventListener('click', ()=>{
  cmdSigno.src = `img/${elegirPersonaje()}.png`;
  personajes.forEach( e=>{
    e.classList.remove("transparente");
    e.value = "0";
  });
});

personajes.forEach( e=>{
  e.addEventListener('click', ()=> {
    if (e.value === "0") {
      e.classList.add("transparente");
      e.value = "1"
    }else{
      e.classList.remove("transparente");
      e.value = "0";
    }
  });
});


function elegirPersonaje(){
  return Math.floor(Math.random() * 16) + 1;
}
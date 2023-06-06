let krestik = document.getElementById('krestik');
   let anketa = document.getElementById('anketa');
   let knopka = document.getElementById('knopka');
   let knopka2 = document.getElementById('knopka2');
   let knopka3 = document.getElementById('knopka3');
   let knopka4 = document.getElementById('knopka4');
   
  

   let hideMenu = () => {
     anketa.classList.remove('active');
   };
   krestik.addEventListener('click', hideMenu);

   let showMenu = () => {
     anketa.classList.add('active');
   };
   knopka.addEventListener('click', showMenu);
   knopka2.addEventListener('click', showMenu);
   knopka3.addEventListener('click', showMenu);
  //  document.addEventListener("DOMContentLoaded", function () {
  //    knopka4?.addEventListener("click", showMenu);
  //  });
   knopka4.addEventListener('click', showMenu);





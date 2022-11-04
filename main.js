$(document).ready(function() {
    var botao = $('.bt');
    var dropDown = $('.ul1');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.ul2');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.ul3');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   function toggleMenu(){
    let nav = document.querySelector('nav');
    let toggle = document.querySelector('.toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
   }
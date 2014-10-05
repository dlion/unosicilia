$(document).ready(function() {

  $(".banneroneSlide").unslider({
    fluid: false,
    delay: 4000,
    speed: 2000,
    autoplay: false,
    loop: false,
    pause: false
  });
  /*
   * Se premi un pulsante tolgo l'active e lo metto in quello selezionato
   */
   $("li[data-menuanchor='Home']").click(function() {
     $("li[data-menuanchor='Home']").addClass("active");
   });

   $("li[data-menuanchor='Prodotti']").click(function() {
     $("li[data-menuanchor='Prodotti']").addClass("active");
   });

   $("li[data-menuanchor='Produttori']").click(function() {
     $("li[data-menuanchor='Produttori']").addClass("active");
   });

   $("li[data-menuanchor='Trasformati']").click(function() {
     $("li[data-menuanchor='Trasformati']").addClass("active");
   });

   $("li[data-menuanchor='Certificazioni']").click(function() {
     $("li[data-menuanchor='Certificazioni']").addClass("active");
   });

   $("li[data-menuanchor='Contatti']").click(function() {
     $("li[data-menuanchor='Contatti']").addClass("active");
   });

  // Configurazione del plugin fullPage
  $('#fullpage').fullpage({
    anchors: ["Home", "Prodotti", "Produttori", "Trasformati", "Certificazioni", "Contatti"],
    slidesColor: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
    css3: true,
    fixedElements: 'header',
    resize: false,
    paddingTop: '65px',
     onLeave: function(index, nextIndex, direction){
       console.err("CIAAOOON");
       switch(index) {
         case 1:
         $("li[data-menuanchor='Home']").removeClass("active");
          break;
        case 2:
           $("li[data-menuanchor='Prodotti']").removeClass("active");
          break;
        case 3:
           $("li[data-menuanchor='Produttori']").removeClass("active");
          break;
        case 4:
           $("li[data-menuanchor='Trasformati']").removeClass("active");
          break;
        case 5:
           $("li[data-menuanchor='Certificazioni']").removeClass("active");
          break;
        case 6:
           $("li[data-menuanchor='Contatti']").removeClass("active");
          break;
       }
     }
  });
});

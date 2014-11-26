$(document).ready(function() {

  var slidey = $(".banneroneSlide").unslider({
    fluid: true,
    dots: true,
    delay: false
  });

  //Il banner che mostra la frutta
  var banneroneFrutta = slidey[0];
  var banneroneProduttori = slidey[1];
  var banneroneTrasformati = slidey[2];

  /*
   * Se clicco sulla lista iniziale
   */

  var titoloBoxPage2 = $("#titoloBoxFrutta h3");
  var testoFrescoBoxPage2 = $("#testoBoxFrutta p");
  var doveSono = $("#btnFrutta");

  $("#btnFrutta").click(function() {
    doveSono.removeClass("btnAttivo");
    $(this).addClass("btnAttivo");
    doveSono = $(this);
    banneroneFrutta.to(0);
    titoloBoxPage2.text("Frutta");
    testoFrescoBoxPage2.text("Commercializziamo una vasta gamma di frutta di stagione coltivata esclusivamente da aziende agricole siciliane ed immessa nel mercato dopo essere stata accuratamente selezionata. Grazie alle caratteristiche uniche del nostro territorio, all' esperienza e alla sapienza dei nostri agricoltori, otteniamo prodotti di grande qualità che ripropongono i sapori tipici della nostra terra.");
  });

  $("#btnOlio").click(function() {
    doveSono.removeClass("btnAttivo");
    $(this).addClass("btnAttivo");
    doveSono = $(this);
    banneroneFrutta.to(1);
    titoloBoxPage2.text("Olive e Olio");
    testoFrescoBoxPage2.text("La Sicilia è una delle regioni con il maggior numero di varietà di olivo di tutto il bacino del Mediterraneo, molte di queste sono varietà autoctone di antichissima coltivazione ognuna delle quali ha una propria zona di vocazione e da cui si ricavano oli di oliva con rese elevate e di ottima qualità.");
  });

  $("#btnAgrumi").click(function() {
    doveSono.removeClass("btnAttivo");
    doveSono = $(this);
    doveSono.addClass("btnAttivo");
    banneroneFrutta.to(2);
    titoloBoxPage2.text("Agrumi");
    testoFrescoBoxPage2.text("Gli agrumi, frutti dall'inconfondibile profumo, rientrano a pieno titolo nell'elenco dei prodotti che rappresentano non solo l'agricoltura siciliana ma anche uno dei nostri prodotti di punta. Le loro caratteristiche organolettiche ed il loro alto contenuto di vitamina C li rendono un alimento utilissimo per la salute umana.");
  });

  $("#btnOrtaggi").click(function() {
    doveSono.removeClass("btnAttivo");
    doveSono = $(this);
    doveSono.addClass("btnAttivo");
    banneroneFrutta.to(3);
    titoloBoxPage2.text("Ortaggi");
    testoFrescoBoxPage2.text("Puntiamo sulla ricerca e sull' innovazione per mettere in atto metodi che ci permettano di migliorare le colture che produciamo e che caratterizzano la nostra regione, rispondendo alle esigenze del consumatore finale offrendo prodotti sani, gustosi e di alta qualità, nati solo ed esclusivamente da scelte consapevoli a sostegno dell' ambiente. Monitoriamo ogni fase della produzione, dal campo fino al consumatore finale, proponendo una vasta gamma di ortaggi di stagione in piena conformità agli standard di certificazione richiesti dal settore.");
  });

  /*
   * La lista della sezione Produttori
   */

  var titoloBoxProduttori = $("#titoloBoxProduttori h3");
  var testoBoxProduttori = $("#testoBoxProduttori p");
  var doveSono2 = $("#terraDelleRose");

  $("#terraDelleRose").click(function() {
    doveSono2.removeClass("scrittaAttiva");
    doveSono2 = $(this);
    doveSono2.addClass("scrittaAttiva");
    banneroneProduttori.to(0);
    titoloBoxProduttori.text("Azienda agricola Terra delle Rose");
    testoBoxProduttori.text("L'azienda si trova in Contrada Rossella, SNC a Piana degli Albanesi. La sua attività è la coltivazione di frutti oleosi.");
  });

  $("#boscoFicuzza").click(function() {
    doveSono2.removeClass("scrittaAttiva");
    doveSono2 = $(this);
    doveSono2.addClass("scrittaAttiva");
    banneroneProduttori.to(1);
    titoloBoxProduttori.text("Azienda agricola Bosco Ficuzza");
    testoBoxProduttori.text("La Bosco Ficuzza azienda agricola biologica s.c. si trova su due colline, Pero e Cannatino, in territorio di Cerda (Pa) alle falde della catena montuosa delle Madonie. Si converte al biologico nel 2001, preoccupandosi di ridurre al minimo gli impatti delle attività agricole dannose per l'ambiente, riducendo gli apporti di sostanze chimiche e assicurando un approccio responsabile nei confronti della salubrità e la sicurezza dei lavoratori e del benessere degli animali.");
  });

  /*
   * La lista della sezione Trasformati
   */
  var titoloBoxTrasformati = $("#titoloBoxTrasformati h3");
  var testoBoxTrasformati = $("#testoBoxTrasformati p");
  var doveSono3 = $("#verdureGrigliate");

  $("#verdureGrigliate").click(function() {
    doveSono3.removeClass("scrittaAttiva");
    doveSono3 = $(this);
    doveSono3.addClass("scrittaAttiva");
    banneroneTrasformati.to(0);
    titoloBoxTrasformati.text("Le verdure grigliate");
    testoBoxTrasformati.text("I grigliati presentano un sapore rustico, arricchito da un bilanciato mix di spezie mediterranee. Sono gustosi antipasti o contorni ai secondi piatti a base di carne o di pesce.");
  });

  $("#leComposte").click(function() {
    doveSono3.removeClass("scrittaAttiva");
    doveSono3 = $(this);
    doveSono3.addClass("scrittaAttiva");
    banneroneTrasformati.to(1);
    titoloBoxTrasformati.text("Le composte");
    testoBoxTrasformati.text("Le composte di prugne e peperoncino e prugne con chiodi di garofano vengono realizzate con la varietà Stanley. Il sapore fresco delle prugne con il piccante del peperoncino è ideale per accompagnare formaggi stagionati e carni rosse. Quella con chiodi di garofano ha un sapore esotico e delicato, ottima da spalmare sul pane o su fette biscottate. La composta di cipolle si caratterizza per il sapore agrodolce e speziato. Si accoppia con i formaggi stagionati, le carni ed i vini rossi.");
  });

  $("#iPate").click(function() {
    doveSono3.removeClass("scrittaAttiva");
    doveSono3 = $(this);
    doveSono3.addClass("scrittaAttiva");
    banneroneTrasformati.to(2);
    titoloBoxTrasformati.text("I Paté");
    testoBoxTrasformati.text("Fatti con gli ingredienti semplici della tradizione mediterranea, i paté di zucchine, di melanzane, di carciofi, di peperoni e di ceci sono ideali per insaporire bruschette ed accompagnare secondi piatti.");
  });

  $("#sugoOlive").click(function() {
    doveSono3.removeClass("scrittaAttiva");
    doveSono3 = $(this);
    doveSono3.addClass("scrittaAttiva");
    banneroneTrasformati.to(3);
    titoloBoxTrasformati.text("Sugo e Olive verdi");
    testoBoxTrasformati.text("Il sugo mediterraneo viene preparato secondo la tradizione culinaria siciliana. Si gusta come condimento per la pasta o per le bruschette. Prodotte sulle colline di trapani, le olive verdi sono ottime come snack o per accompagnare un cocktail.");
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

       switch(nextIndex) {
         case 1:
           $("li[data-menuanchor='Home']").addClass("active");
          break;
        case 2:
           $("li[data-menuanchor='Prodotti']").addClass("active");
          break;
        case 3:
           $("li[data-menuanchor='Produttori']").addClass("active");
          break;
        case 4:
           $("li[data-menuanchor='Trasformati']").addClass("active");
          break;
        case 5:
           $("li[data-menuanchor='Certificazioni']").addClass("active");
          break;
        case 6:
           $("li[data-menuanchor='Contatti']").addClass("active");
          break;
       }
     }
  });
});

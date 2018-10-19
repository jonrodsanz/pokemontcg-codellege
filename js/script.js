$("#pokemon-button").click(function(e){
  e.preventDefault();
  var pokemon = $("#pokemon-search").val();
  $.ajax("https://api.pokemontcg.io/v1/cards?name=" + pokemon) 
  .done(function(result){
    $("#linea").empty();
    console.log(result)
      for(var i = 0; i < result.cards.length; i++){
        var card = result.cards[i];
        console.log(card)
        var columna = document.createElement("div");
        $(columna).attr("class","col-md-3 col-6")
                  .appendTo("#linea")
                  .append("<img id= 'card-"+ card.id +"'src='"+ card.imageUrl + "'>");
        var heightModal = $(window).width() < 768 ? 520:440;
        var modalBox =  new jBox('Modal', {
          //Era 900
          width: 750,
          //Era 520 pero la cambie para hacer las imagenes dentro del Modal mas chicas (80% de width en lugar de 100%)
          height: heightModal,
          attach: "#card-"+card.id+"",
          title: "<h4 class='text-right'>"+card.name+"</h4>",
          // content: "<div class='container-fluid'><div class='row'><div class='col-md-5'><img src='" + card.imageUrlHiRes + "'></div><div class='col-md-7'><p><b>HP: </b>" + card.hp + "</p><p><b>Number: </b>"+card.number+"</p><p><b>Rarity: </b>" + card.rarity + "</p></div></div></div>"
          content: "<div class='container-fluid'>\
                      <div class='row'>\
                        <div class='col-sm-5 modal-box--image__container'>\
                          <img class='modal-box--image' src='" + card.imageUrlHiRes + "'>\
                        </div>\
                        <div class='col-sm-7'>\
                          <table border='0'>\
                            <tr>\
                              <td><b>HP</b></td><td>"+card.hp+"</td>\
                            </tr>\
                            <tr>\
                              <td><b>Number</b></td><td>"+card.number+"</td>\
                            </tr>\
                            <tr>\
                              <td><b>Weakness</b></td><td>"+((card.weaknesses === null || card.weaknesses == undefined) ? "Not specified":card.weaknesses[0].type)+"</td>\
                            </tr>\
                            <tr>\
                              <td><b>Type</b></td><td>"+card.types[0]+"</td>\
                            </tr>\
                            <tr>\
                              <td><b>Rarity</b></td><td>"+card.rarity+"</td>\
                            </tr>\
                            <tr>\
                              <td><b>Set</b></td><td>"+card.setCode+"</td>\
                            </tr>\
                            <tr>\
                              <td><b>Attack Name</b></td>\
                              <td>"+((card.attacks===null || card.attacks===undefined) ? "Not found":card.attacks[0].name)+"</td>\
                            </tr>\
                            <tr>\
                              <td><b>Attack Damage</b></td>\
                              <td><em>"+((card.attacks===null || card.attacks===undefined || card.attacks[0].damage==="") ? "None":card.attacks[0].damage)+"</em></td>\
                            </tr>\
                            <tr>\
                              <td><b>Attack Description</b></td>\
                              <td><em>"+((card.attacks===null || card.attacks===undefined || card.attacks[0].text==="") ? "Not found":card.attacks[0].text)+"</em></td>\
                            </tr>\
                          </table>\
                        </div>\
                      </div>\
                  </div>"

                  });
          console.log(modalBox);
      }
  })
  .catch(function(error){
    $("#linea").empty();
    $("#linea").append("<h1>Error 404 Not found</h1>")
  })
});


//PRUEBA
$(function autocompletado () {
  var pokemon150 = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"]
  
  $("#pokemon-search").autocomplete({
    "query": "Unit",
    "lookup": pokemon150
  });
})

// if ( $(window).width() < 577) {      
//   modalBox =
// } 
const jsonReportada = {
    "mediaGifOne": "media/gif/reportada/4Inicio.gif",
    "mediaGifTwo":"media/gif/reportada/5PizzasyPaquetes.gif",
    "mediaGifThree": "media/gif/reportada/6SucursalesSesion.gif",
}
  const jsonDogShelter = {
    "mediaGifOne": "media/gif/dogs/7Inicio.gif",
    "mediaGifTwo":"media/gif/dogs/8Solicitudes.gif",
    "mediaGifThree": "media/gif/dogs/9MascotaAdopcionNewUser.gif",
  }
  const jsonMedibilogica = {
    "mediaGifOne": "media/gif/medic/1SesioNotify.gif",
    "mediaGifTwo":"media/gif/medic/2Agenda.gif",
    "mediaGifThree": "media/gif/medic/3Inventario.gif",
  }
  const jsonSystemStore = {
    "mediaGifOne": "media/gif/store/10inicio.gif",
    "mediaGifTwo":"media/gif/store/11menu.gif",
    "mediaGifThree": "media/gif/store/12crearV.gif",
  }

    // Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function onclickModal(path) {
    if(path === 'reportada') changePath(jsonReportada);
    else if(path === 'dog') changePath(jsonDogShelter);
    else if(path === 'medic') changePath(jsonMedibilogica);
    else if(path === 'store') changePath(jsonSystemStore);
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function changePath(path){
    for (let key in path) {
    document.querySelector('.' + key).src= path[key]
    }
}
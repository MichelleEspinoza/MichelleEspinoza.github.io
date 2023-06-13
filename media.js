/*content multimedia: Projects*/
const jsonReportada = {
    "mediaGifOne": "assets/gif/reportada/4Inicio.gif",
    "mediaGifTwo":"assets/gif/reportada/5PizzasyPaquetes.gif",
    "mediaGifThree": "assets/gif/reportada/6SucursalesSesion.gif",
}
  const jsonDogShelter = {
    "mediaGifOne": "assets/gif/dogs/7Inicio.gif",
    "mediaGifTwo":"assets/gif/dogs/8Solicitudes.gif",
    "mediaGifThree": "assets/gif/dogs/9MascotaAdopcionNewUser.gif",
  }
  const jsonMedibilogica = {
    "mediaGifOne": "assets/gif/medic/1SesioNotify.gif",
    "mediaGifTwo":"assets/gif/medic/2Agenda.gif",
    "mediaGifThree": "assets/gif/medic/3Inventario.gif",
  }
  const jsonSystemStore = {
    "mediaGifOne": "assets/gif/store/10inicio.gif",
    "mediaGifTwo":"assets/gif/store/11menu.gif",
    "mediaGifThree": "assets/gif/store/12crearV.gif",
  }

    // Get the modal of projects
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

/*Theme*/
const storage = localStorage.getItem('darkMode');

const isDark = (storage ? storage === 'true' : 'false');
document.documentElement.classList.toggle('dark', isDark);

function toggleDarkMode() {
document.documentElement.classList.toggle('dark');

localStorage.setItem(
  'darkMode',
  document.documentElement.classList.contains('dark') ? 'true' : 'false'
);
}
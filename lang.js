const jsonES = {
    "portfolio": "Portafolio: Michelle Espinoza",
    "downloadCV":"Descargar CV - ES",
    "portfolioTitle": "Portafolio",
    "helloTitle": "¡Hey hola soy, Michelle Espinoza!",
    "aboutMe":"Sobre Mi",
    "aboutMeParagraph":"Soy una graduada de ingeniería en sistemas computacionales, del Instituto Técnologico de Tijuana, en proceso de titulación, con enfoque en el análisis, diseño y desarrollo de software. Con las habilidades de ser: trabajadora, dedicada, creativa, honesta, autodidacta y trabajo en equipo.",
    "knowledgesTitle":"Conocimientos",
    "languagesTitle":"Lenguajes",
    "controlVersionTitle":"Control de versiones",
    "dataBaseTitle":"Base de datos",
    "projectsTitle":"Proyectos",
    "projectsRole":"Responsabilidad:",
    "projectSCDescription":"Proyecto desarrollado dentro de 1Delivery",
    "projectPizzeriaDescription":"Proyecto desarrollado dentro de materia: programación web",
    "projectDogshelterTitle":"Project developed within 1Delivery",
    "projectDogshelterDescription":"Proyecto desarrollado: Independiente",
    "projectMedibiologicaTitle":"Sistema de gestión de inventario y agenda para clinica medibiologica",
    "projectMedibiologicaDescription":"Desarrollado como proyecto de residencia.",
    "projectMedibiologicaRole":"Análisis y diseño de base de datos,creación de procedimientos almacenados y programación en c#.",
    "projectManagementSystemTitle":"Sistema de gestión para tienda",
    "projectManagementSystemDescription":"Desarrollado como proyecto: Independiente.",
    "referencesTitle":"Referencias",
    "contactTitle":"Contacto",
}
  
  const jsonEN = {
    "portfolio": "Portfolio: Michelle Espinoza",
    "downloadCV":"Download CV - EN",
    "portfolioTitle": "Portfolio",
    "helloTitle": "Hello I'm Michelle Espinoza!",
    "aboutMe":"About me",
    "aboutMeParagraph":"I am a computer systems engineering graduate, in the process of earning my degree, with a focus on: software analysis, design and development. With the skills of being hard-working, dedicated, creative, honest, self-taught and teamwork.",
    "knowledgesTitle":"knowledges",
    "languagesTitle":"Languages",
    "controlVersionTitle":"Control version",
    "dataBaseTitle":"Database",
    "projectsTitle":"Projects",
    "projectsRole":"My role:",
    "projectSCDescription":"Project developed within 1Delivery",
    "projectPizzeriaDescription":"Project developed within the class: web programming",
    "projectDogshelterTitle":"Dog shelter",
    "projectDogshelterDescription":"Project developed: Independent.",
    "projectMedibiologicaTitle":"Inventory and agenda management system for clinic medibiologica",
    "projectMedibiologicaDescription":"Developed as a residence project.",
    "projectMedibiologicaRole":"Database analysis and design, creation of stored procedures and programming in c#.",
    "projectManagementSystemTitle":"Store management system",
    "projectManagementSystemDescription":"Project developed: Independent.",
    "referencesTitle":"References",
    "contactTitle":"Contact",
}


 const btnES=document.querySelector('#ES');
 const btnEN=document.querySelector('#EN');

 btnES.addEventListener("click", function() {
    for (let key in jsonES) {
        document.querySelector('.' + key).textContent = jsonES[key]
    }
    btnES.classList.add("hidden");
    btnEN.classList.remove("hidden");
  });

  btnEN.addEventListener("click", function() {
    for (let key in jsonEN) {
        document.querySelector('.' + key).textContent = jsonEN[key]
    }
    btnEN.classList.add("hidden");
    btnES.classList.remove("hidden");
  });
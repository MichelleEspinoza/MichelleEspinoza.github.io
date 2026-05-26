const jsonES = {
    "lang": "ES",
    "portfolio": "Portafolio: Michelle Espinoza",
    "downloadCV":"Descargar CV - ES",
    "portfolioTitle": "user@michelle:~$ ",
    "helloTitle": "PORTFOLIO --profile=MICHELLE_ESPINOZA",
    "iaLab": "Asistente de IA: Evalúa mi compatibilidad con tu vacante en tiempo real",
    "analyzeExp": "Analiza la experiencia de Michelle en migraciones de Angular y Spring Boot",
    "descComplex": "¡Bienvenido al IA LAB! Estoy listo para hablarte sobre la trayectoria de Michelle en desarrollo Full Stack y Big Data. Puedo detallar su experiencia con bases de datos, arquitecturas de microservicios o frameworks específicos. ¿Por dónde te gustaría empezar?",
    "ketMetricsTitle": "Métricas clave: Más de 100 endpoints actualizados",
    "downtimeTitle": "cero tiempo de inactividad logrado.",
    "statusTitle": "Estado: Analizado",
    "btnSend": "ENVIAR",
    "placeholderTitle": "¿Qué estás buscando en mi perfil?",
    "chatBloqueado": "Escribe 'INVITADO' para activar el chat...",
    "chatActivo": "¿Qué estás buscando en mi perfil?",
    "sysSuccess": "¡Acceso concedido! El IA LAB está activo.",
    "sysSuccessKey": "¡API Key personalizada guardada con éxito!",
    "sysError": "Por favor, escribe 'INVITADO' o ingresa una API Key válida.",
    "pathCV": "assets/cv/Michelle-Espinoza-Es.pdf",
    "btn_bigdata": "> Experiencia en Big Data & Banca",
    "btn_ia": "> Automatización e IA (OpenAI)",
    "btn_soft": "> Mentalidad & Soft Skills",
    "btn_cursos": "> Consultar Certificaciones",
    "pathCV": "assets/cv/Michelle-Espinoza-Es.pdf",
    "prompt_1": "Háblame de tu experiencia en Big Data y Banca",
    "prompt_2": "¿Qué proyectos has hecho con Inteligencia Artificial?",
    "prompt_3": "¿Cuál es tu filosofía de trabajo y habilidades blandas?",
}
  
  const jsonEN = {
    "lang": "EN",
    "portfolio": "Portfolio: Michelle Espinoza",
    "downloadCV":"Download CV - EN",
    "portfolioTitle": "Portfolio",
    "helloTitle": "MICHELLE ESPINOZA",
    "iaLab": "AI Assistant: Match my profile with your job opening in real-time",
    "analyzeExp": "Analyze Michelle's experience with Angular/Spring Boot migrations",
    "descComplex": "Welcome to IA LAB! I am ready to talk about Michelle's track record in Full Stack development and Big Data. I can detail her experience with databases, microservices architectures, or specific frameworks. Where would you like to start?",
    "ketMetricsTitle": "Key metrics: 100+ endpoints updated:",
    "downtimeTitle": "zero downtime achieved.",
    "statusTitle": "Status: Analyzed",
    "btnSend": "SEND",
    "placeholderTitle": "What are you looking for in my profile?",
    "chatBloqueado": "Type 'INVITADO' to activate the chat...",
    "chatActivo": "What are you looking for in my profile?",
    "sysSuccess": "Access granted! IA LAB is active.",
    "sysSuccessKey": "Custom API Key saved successfully!",
    "sysError": "Please type 'INVITADO' or enter a valid API Key to start.",
    "pathCV": "assets/cv/Michelle-Espinoza-En.pdf",
    "btn_bigdata": "> Big Data & Banking Experience",
    "btn_ia": "> Automation & AI (OpenAI)",
    "btn_soft": "> Mindset & Soft Skills",
    "btn_cursos": "> View Certifications",
    "pathCV": "assets/cv/Michelle-Espinoza-En.pdf",
    "prompt_1": "Tell me about your experience in Big Data and Banking.",
    "prompt_2": "What projects have you developed using Artificial Intelligence?",
    "prompt_3": "What is your work philosophy and soft skills?",
}


 const btnES=document.querySelector('#ES');
 const btnEN=document.querySelector('#EN');

 changeLang(jsonES);

 btnES.addEventListener("click", function() {
  changeLang(jsonES, btnES, btnEN);
  });

  btnEN.addEventListener("click", function() {
    changeLang(jsonEN, btnEN, btnES);
  });

  function changeLang(lang, btnIn,btnOut){
    document.documentElement.lang = lang?.lang;
    for (let key in lang) {
    let element = document.querySelector(`[data-translate="${key}"]`);
    
    if (!element) {
      element = document.querySelector('.' + key);
    }
    if (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = lang[key]; 
      } else if (element.tagName === 'A') {
        element.setAttribute("href", lang[key]);
      } else {
        element.textContent = lang[key]; 
      }
    }

    let promptElement = document.querySelector(`[data-translate-prompt="${key}"]`);
      if (promptElement) {
            promptElement.setAttribute('data-prompt', lang[key]);
        }

    }
    btnIn?.classList.add("hidden");
    btnOut?.classList.remove("hidden");
  }
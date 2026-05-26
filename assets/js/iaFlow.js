async function askToGemini(prompUser) {
    const url = "https://portfolio-v2-eight-snowy-57.vercel.app/api/gemini";
    const currentLang = document.documentElement.lang || "es";

    const contextoMichelle = `
    Current context language constraint: Please reply strictly in ${currentLang === 'en' ? 'English' : 'Spanish'}.
    `;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mensaje: prompUser, lang: currentLang })
        });

        const data = await response.json();
        
        if (data.error) {
            return currentLang === "en" 
                ? `System Info: ${data.error}` 
                : `Info del sistema: ${data.error}`;
        }
        
        return data.choices[0].message.content;
    } catch (error) {
        return currentLang === "en" 
            ? "Service unavailable." 
            : "Servicio no disponible.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btnSend = document.querySelector(".btnSend");
    const inputUser = document.querySelector("input[type='text']");
    const containerChat = inputUser.closest(".flex-col").querySelector(".overflow-y-auto");
    const statusElement = document.querySelector(".statusTitle");

    inputUser.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); 
            btnSend.click();    
        }
    });

    btnSend.addEventListener("click", async () => {
        const textInput = inputUser.value.trim();
        if (!textInput || btnSend.disabled) return;

        // INYECCIÓN: Mensaje del usuario
        injectMessage(containerChat, "[User]", textInput, "text-purple-500");
        inputUser.value = ""; 

        btnSend.disabled = true;
        btnSend.classList.add("opacity-50", "cursor-not-allowed"); // Estilo visual para que parezca desactivado

        // ESTADO: Analizando
        if (statusElement) {
            statusElement.textContent = document.documentElement.lang === "en" ? "Status: Analyzing..." : "Estado: Analizando...";
            statusElement.classList.add("animate-pulse", "text-amber-500");
        }

        // LLAMADA AL BACKEND (VERCEL)
        const responseIA = await askToGemini(textInput);
        
        // INYECCIÓN: Respuesta de la IA
        injectMessage(containerChat, "[ME-Bot]", responseIA, "text-emerald-400");

        // ESTADO: Finalizado
        if (statusElement) {
            statusElement.classList.remove("animate-pulse", "text-amber-500");
            statusElement.textContent = document.documentElement.lang === "en" ? "Status: Ready" : "Estado: Listo";
        }

        // REGLA 3: El freno de 10 segundos
        setTimeout(() => {
            btnSend.disabled = false;
            btnSend.classList.remove("opacity-50", "cursor-not-allowed");
        }, 10000);
    });
});

function injectMessage(contenedor, remitente, textInput, colorClase) {
    const div = document.createElement("div");
    div.className = "bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 rounded-xl p-4";
    
    div.innerHTML = `
        <span class="text-xs font-bold ${colorClase} block mb-1">${remitente}</span>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">${textInput}</p>
    `;
    contenedor.appendChild(div);
    contenedor.scrollTop = contenedor.scrollHeight;
}

// Función global para procesar el click de las sugerencias
window.processSuggestion = function(idBoton) {
    const button = document.getElementById(idBoton);
    const inputUser = document.querySelector("input[type='text']"); 
    
    if (button && inputUser) {
        const textoPrompt = button.getAttribute("data-prompt");
        inputUser.value = textoPrompt;
        
        if (typeof sendMessage === "function") {
            sendMessage();
        } else {
            const btnSend = document.querySelector(".btnSend") || document.querySelector("button[type='submit']");
            if (btnSend) btnSend.click();
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById(`btn-sugerencia-${i}`);
        if (btn) {
            btn.addEventListener("click", () => window.processSuggestion(`btn-sugerencia-${i}`));
        }
    }
});
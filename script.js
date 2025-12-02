// Base de datos de preguntas (Políticas de Respaldo)
const mazos = {
    "politicas-respaldo": {
        nombre: "Políticas de Respaldo Básicas",
        descripcion: "Conceptos fundamentales de backup y recuperación",
        icono: "fas fa-database",
        preguntas: [
            {
                pregunta: "¿Qué establece el RPO?",
                contexto: "En el contexto de políticas de respaldo y recuperación",
                opciones: [
                    { texto: "Tiempo máximo para volver a operar", correcta: false },
                    { texto: "Cantidad máxima de datos que se pueden perder", correcta: true },
                    { texto: "Máximo de usuarios conectados", correcta: false },
                    { texto: "Espacio mínimo de almacenamiento", correcta: false }
                ],
                explicacion: "RPO (Recovery Point Objective) define la cantidad máxima de datos que una organización está dispuesta a perder desde el último respaldo hasta el momento del incidente."
            },
            {
                pregunta: "¿Qué tipo de respaldo copia toda la información completa?",
                contexto: "Tipos de respaldo según estándares internacionales",
                opciones: [
                    { texto: "Incremental", correcta: false },
                    { texto: "Diferencial", correcta: false },
                    { texto: "Completo", correcta: true },
                    { texto: "Mixto", correcta: false }
                ],
                explicacion: "El respaldo completo (Full Backup) copia todo el contenido de un sistema, incluyendo archivos, bases de datos, configuraciones y directorios completos."
            },
            {
                pregunta: "El respaldo incremental copia:",
                contexto: "Características de los diferentes tipos de backup",
                opciones: [
                    { texto: "Todo el sistema", correcta: false },
                    { texto: "Lo cambiado desde el último respaldo incremental o full", correcta: true },
                    { texto: "Lo cambiado desde el último respaldo completo", correcta: false },
                    { texto: "Solo archivos nuevos", correcta: false }
                ],
                explicacion: "El respaldo incremental copia únicamente los archivos que han cambiado desde el último respaldo, ya sea completo o incremental."
            },
            {
                pregunta: "La principal desventaja del respaldo local es:",
                contexto: "Consideraciones sobre medios de almacenamiento",
                opciones: [
                    { texto: "Requiere internet", correcta: false },
                    { texto: "Alto costo mensual", correcta: false },
                    { texto: "Riesgo ante desastres locales", correcta: true },
                    { texto: "No se puede restaurar rápidamente", correcta: false }
                ],
                explicacion: "El respaldo local es vulnerable a desastres locales como incendios, inundaciones o robos, ya que comparte la misma ubicación física que los sistemas productivos."
            },
            {
                pregunta: "El respaldo en la nube requiere obligatoriamente:",
                contexto: "Requisitos de seguridad para respaldo en la nube",
                opciones: [
                    { texto: "Token físico", correcta: false },
                    { texto: "Ancho de banda ilimitado", correcta: false },
                    { texto: "Cifrado de datos", correcta: true },
                    { texto: "Almacenamiento RAID", correcta: false }
                ],
                explicacion: "Según ISO 27018, los datos en la nube deben viajar cifrados y mantenerse cifrados en el almacenamiento para garantizar la seguridad."
            },
            {
                pregunta: "¿Qué etapa según NIST incluye aislar el problema para evitar propagación?",
                contexto: "Procedimientos ante incidentes críticos",
                opciones: [
                    { texto: "Validación", correcta: false },
                    { texto: "Contención", correcta: true },
                    { texto: "Restauración", correcta: false },
                    { texto: "Documentación", correcta: false }
                ],
                explicacion: "La etapa de detección y contención busca evitar que el problema se expanda, especialmente en casos de malware o accesos no autorizados."
            },
            {
                pregunta: "¿Qué medio es ideal para protección ante desastres físicos?",
                contexto: "Ubicaciones de respaldo recomendadas",
                opciones: [
                    { texto: "NAS interno", correcta: false },
                    { texto: "Respaldo local", correcta: false },
                    { texto: "Respaldo off-site", correcta: true },
                    { texto: "Disco del servidor", correcta: false }
                ],
                explicacion: "El respaldo off-site protege a la organización contra eventos catastróficos locales como incendios, desastres naturales o robos masivos."
            },
            {
                pregunta: "La restauración debe cumplir principalmente con el:",
                contexto: "Objetivos de recuperación",
                opciones: [
                    { texto: "RTO", correcta: true },
                    { texto: "KPI", correcta: false },
                    { texto: "TIR", correcta: false },
                    { texto: "IPsec", correcta: false }
                ],
                explicacion: "RTO (Recovery Time Objective) es el tiempo máximo permitido para que un servicio vuelva a estar operativo después de una interrupción."
            },
            {
                pregunta: "La validación se realiza para:",
                contexto: "Etapas del procedimiento de recuperación",
                opciones: [
                    { texto: "Volver a generar respaldos", correcta: false },
                    { texto: "Confirmar integridad y funcionamiento", correcta: true },
                    { texto: "Borrar datos corruptos", correcta: false },
                    { texto: "Configurar usuarios", correcta: false }
                ],
                explicacion: "La validación verifica que los datos recuperados sean exactos, que la aplicación funcione correctamente y que los usuarios puedan acceder sin errores."
            },
            {
                pregunta: "¿Qué significa CDP?",
                contexto: "Tipos de respaldo avanzados",
                opciones: [
                    { texto: "Cloud Data Protection", correcta: false },
                    { texto: "Continuous Data Protection", correcta: true },
                    { texto: "Central Database Process", correcta: false },
                    { texto: "Computer Disaster Plan", correcta: false }
                ],
                explicacion: "CDP (Continuous Data Protection) es el método más avanzado de respaldo que registra cambios en tiempo real o en intervalos muy cortos."
            }
        ]
    },
    "tipos-respaldo": {
        nombre: "Tipos de Respaldo",
        descripcion: "Full, incremental, diferencial y CDP",
        icono: "fas fa-copy",
        preguntas: [
            {
                pregunta: "Un respaldo diferencial copia:",
                contexto: "Diferencias entre tipos de respaldo",
                opciones: [
                    { texto: "Cambios desde el último incremental", correcta: false },
                    { texto: "Cambios desde el último full backup", correcta: true },
                    { texto: "Todo el sistema", correcta: false },
                    { texto: "Archivos cifrados solamente", correcta: false }
                ],
                explicacion: "El respaldo diferencial copia toda la información que ha cambiado desde el último respaldo completo."
            },
            {
                pregunta: "La principal ventaja del respaldo completo es:",
                contexto: "Características de cada tipo de respaldo",
                opciones: [
                    { texto: "Ocupa poco espacio", correcta: false },
                    { texto: "Restauración rápida y directa", correcta: true },
                    { texto: "No requiere backup inicial", correcta: false },
                    { texto: "Es el más económico", correcta: false }
                ],
                explicacion: "El respaldo completo ofrece una restauración más rápida y directa porque contiene toda la información en un único paquete."
            }
        ]
    }
};

// Variables globales
let mazoActual = null;
let preguntasActuales = [];
let preguntaIndex = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let puntajeTotal = 0;
let preguntasRespondidasHoy = 0;

// Elementos del DOM
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaQuiz = document.getElementById('pantalla-quiz');
const pantallaResultados = document.getElementById('pantalla-resultados');
const contenedorMazos = document.getElementById('contenedor-mazos');
const preguntaTexto = document.getElementById('pregunta-texto');
const preguntaContexto = document.getElementById('pregunta-contexto');
const contenedorOpciones = document.getElementById('contenedor-opciones');
const resultadoTexto = document.getElementById('resultado-texto');
const explicacionContainer = document.getElementById('explicacion-container');
const explicacionTexto = document.getElementById('explicacion-texto');
const botonSiguiente = document.getElementById('boton-siguiente');
const botonFinalizar = document.getElementById('boton-finalizar');
const contadorPregunta = document.getElementById('contador-pregunta');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarMazos();
    cargarProgreso();
});

// Cargar mazos en la pantalla de inicio
function cargarMazos() {
    contenedorMazos.innerHTML = '';
    
    for (const [id, mazo] of Object.entries(mazos)) {
        const card = document.createElement('div');
        card.className = 'mazo-card';
        card.onclick = () => iniciarMazo(id);
        
        card.innerHTML = `
            <i class="${mazo.icono} mazo-imagen" style="font-size: 3rem; padding: 20px;"></i>
            <div class="mazo-texto">${mazo.nombre}</div>
            <div class="mazo-info">${mazo.preguntas.length} preguntas</div>
            <div class="mazo-info">${mazo.descripcion}</div>
        `;
        
        contenedorMazos.appendChild(card);
    }
}

// Iniciar un mazo específico
function iniciarMazo(mazoId) {
    mazoActual = mazoId;
    preguntasActuales = [...mazos[mazoActual].preguntas];
    
    // Mezclar preguntas aleatoriamente
    preguntasActuales = mezclarArray(preguntasActuales);
    
    // Inicializar variables del quiz
    preguntaIndex = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    
    // Cambiar a pantalla de quiz
    pantallaInicio.classList.remove('activa');
    pantallaQuiz.classList.add('activa');
    pantallaResultados.classList.remove('activa');
    
    // Mostrar primera pregunta
    mostrarPregunta();
}

// Mezclar array aleatoriamente (algoritmo Fisher-Yates)
function mezclarArray(array) {
    const nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
}

// Mostrar la pregunta actual
function mostrarPregunta() {
    if (preguntaIndex >= preguntasActuales.length) {
        finalizarQuiz();
        return;
    }
    
    const pregunta = preguntasActuales[preguntaIndex];
    
    // Actualizar contador
    contadorPregunta.textContent = `Pregunta ${preguntaIndex + 1}/${preguntasActuales.length}`;
    
    // Mostrar pregunta y contexto
    preguntaTexto.textContent = pregunta.pregunta;
    preguntaContexto.textContent = pregunta.contexto;
    
    // Limpiar opciones anteriores
    contenedorOpciones.innerHTML = '';
    resultadoTexto.textContent = '';
    resultadoTexto.className = 'resultado';
    explicacionContainer.style.display = 'none';
    botonSiguiente.style.display = 'none';
    botonFinalizar.style.display = 'none';
    
    // Mezclar opciones aleatoriamente
    const opcionesMezcladas = mezclarArray(pregunta.opciones);
    
    // Crear botones de opciones
    opcionesMezcladas.forEach((opcion, index) => {
        const botonOpcion = document.createElement('button');
        botonOpcion.className = 'opcion';
        botonOpcion.textContent = opcion.texto;
        botonOpcion.onclick = () => seleccionarOpcion(opcion.correcta, botonOpcion, pregunta);
        
        contenedorOpciones.appendChild(botonOpcion);
    });
}

// Manejar selección de opción
function seleccionarOpcion(esCorrecta, botonSeleccionado, pregunta) {
    // Deshabilitar todos los botones
    const botones = document.querySelectorAll('.opcion');
    botones.forEach(boton => {
        boton.disabled = true;
        
        // Encontrar la opción correcta
        if (boton.textContent === pregunta.opciones.find(op => op.correcta).texto) {
            boton.classList.add('correcta');
        }
        
        // Marcar la seleccionada como incorrecta si es incorrecta
        if (boton === botonSeleccionado && !esCorrecta) {
            boton.classList.add('incorrecta');
        }
    });
    
    // Mostrar resultado
    if (esCorrecta) {
        resultadoTexto.textContent = '¡Correcto! 🎉';
        resultadoTexto.className = 'resultado correcto';
        respuestasCorrectas++;
        puntajeTotal += 10;
        preguntasRespondidasHoy++;
        
        // Efecto visual para acierto
        crearConfetti();
    } else {
        resultadoTexto.textContent = 'Incorrecto 😢';
        resultadoTexto.className = 'resultado incorrecto';
        respuestasIncorrectas++;
    }
    
    // Mostrar explicación
    explicacionTexto.textContent = pregunta.explicacion;
    explicacionContainer.style.display = 'block';
    
    // Actualizar progreso local
    actualizarProgreso();
    
    // Mostrar botón siguiente
    if (preguntaIndex < preguntasActuales.length - 1) {
        botonSiguiente.style.display = 'block';
    } else {
        botonFinalizar.style.display = 'block';
    }
}

// Pasar a la siguiente pregunta
function siguientePregunta() {
    preguntaIndex++;
    mostrarPregunta();
}

// Finalizar el quiz
function finalizarQuiz() {
    pantallaQuiz.classList.remove('activa');
    pantallaResultados.classList.add('activa');
    
    const porcentaje = Math.round((respuestasCorrectas / preguntasActuales.length) * 100);
    const puntosGanados = respuestasCorrectas * 10;
    
    // Actualizar subtítulo
    document.getElementById('subtitulo-resultados').textContent = 
        `Completaste el mazo "${mazos[mazoActual].nombre}"`;
    
    // Mostrar resultados detallados
    const resultadosDetalles = document.getElementById('resultados-detalles');
    resultadosDetalles.innerHTML = `
        <h3 style="color: #4a90e2; margin-bottom: 15px;">Resumen de Resultados</h3>
        <p><strong>Preguntas totales:</strong> ${preguntasActuales.length}</p>
        <p><strong>Respuestas correctas:</strong> ${respuestasCorrectas} ✅</p>
        <p><strong>Respuestas incorrectas:</strong> ${respuestasIncorrectas} ❌</p>
        <p><strong>Porcentaje de aciertos:</strong> ${porcentaje}%</p>
        <p><strong>Puntos ganados:</strong> ${puntosGanados} ⭐</p>
        
        ${porcentaje >= 80 ? 
            '<p style="color: #00ff88; font-weight: bold; margin-top: 15px;">¡Excelente trabajo! 🎯</p>' : 
            porcentaje >= 60 ? 
            '<p style="color: #ffd700; font-weight: bold; margin-top: 15px;">¡Buen trabajo! Sigue practicando 💪</p>' :
            '<p style="color: #ff6b6b; font-weight: bold; margin-top: 15px;">Necesitas repasar más 📚</p>'
        }
    `;
    
    // Mostrar puntos ganados
    document.getElementById('puntos-ganados').textContent = puntosGanados;
    
    // Actualizar progreso
    actualizarProgreso();
}

// Volver a la pantalla de inicio
function volverInicio() {
    pantallaInicio.classList.add('activa');
    pantallaQuiz.classList.remove('activa');
    pantallaResultados.classList.remove('activa');
    cargarProgreso();
}

// Repetir el mazo actual
function repetirMazo() {
    if (mazoActual) {
        iniciarMazo(mazoActual);
    }
}

// Actualizar el progreso en pantalla
function cargarProgreso() {
    // Cargar de localStorage o usar valores por defecto
    const preguntasHoy = localStorage.getItem('preguntasHoy') || 0;
    const precision = localStorage.getItem('precision') || '0%';
    const puntos = localStorage.getItem('puntosTotales') || 0;
    const mazosCompletados = localStorage.getItem('mazosCompletados') || 0;
    
    document.getElementById('preguntas-hoy').textContent = preguntasHoy;
    document.getElementById('precision-total').textContent = precision;
    document.getElementById('puntos-totales').textContent = puntos;
    document.getElementById('mazos-completados').textContent = mazosCompletados;
}

// Guardar progreso en localStorage
function actualizarProgreso() {
    const totalPreguntas = respuestasCorrectas + respuestasIncorrectas;
    const precision = totalPreguntas > 0 ? 
        Math.round((respuestasCorrectas / totalPreguntas) * 100) + '%' : '0%';
    
    // Actualizar localStorage
    localStorage.setItem('preguntasHoy', preguntasRespondidasHoy);
    localStorage.setItem('precision', precision);
    localStorage.setItem('puntosTotales', puntajeTotal);
    
    // Si completó un mazo
    if (preguntaIndex === preguntasActuales.length - 1) {
        const mazosCompletados = parseInt(localStorage.getItem('mazosCompletados') || 0) + 1;
        localStorage.setItem('mazosCompletados', mazosCompletados);
    }
    
    // Actualizar pantalla
    cargarProgreso();
}

// Efecto de confetti para respuestas correctas
function crearConfetti() {
    const colors = ['#ff6b9d', '#4a90e2', '#00ff88', '#ffd700', '#ff8e8e'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        
        document.body.appendChild(confetti);
        
        // Remover después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Navegación con teclado
document.addEventListener('keydown', function(event) {
    // Tecla 1-4 para seleccionar opciones
    if (event.key >= '1' && event.key <= '4') {
        const index = parseInt(event.key) - 1;
        const botones = document.querySelectorAll('.opcion');
        if (botones[index] && !botones[index].disabled) {
            botones[index].click();
        }
    }
    
    // Tecla Enter para siguiente pregunta
    if (event.key === 'Enter' && botonSiguiente.style.display === 'block') {
        botonSiguiente.click();
    }
    
    // Tecla Escape para volver al inicio
    if (event.key === 'Escape') {
        volverInicio();
    }
});

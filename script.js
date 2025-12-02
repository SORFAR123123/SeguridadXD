// Variables globales
let currentWeekIndex = 0;
let currentDeckIndex = 0;
let currentQuestionIndex = 0;
let userAnswers = {};
let deckProgress = {};

// Elementos DOM
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeSidebar = document.getElementById('closeSidebar');
const weekList = document.querySelector('.week-list');
const deckButtons = document.getElementById('deckButtons');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const questionNumber = document.getElementById('questionNumber');
const difficulty = document.getElementById('difficulty');
const nextBtn = document.getElementById('nextBtn');
const feedback = document.getElementById('feedback');
const hintBtn = document.getElementById('hintBtn');
const hintModal = document.getElementById('hintModal');
const closeHintModal = document.getElementById('closeHintModal');
const hintContent = document.getElementById('hintContent');
const currentDeckElement = document.getElementById('currentDeck');
const questionCounter = document.getElementById('questionCounter');
const globalProgress = document.getElementById('globalProgress');
const progressText = document.getElementById('progressText');
const deckProgressBar = document.getElementById('deckProgress');
const deckProgressText = document.getElementById('deckProgressText');
const totalQuestionsElement = document.getElementById('totalQuestions');
const correctAnswersElement = document.getElementById('correctAnswers');
const currentWeekElement = document.getElementById('currentWeek');

// Inicialización
function init() {
    loadQuestionsData();
    renderSidebar();
    renderDeckButtons();
    loadCurrentQuestion();
    updateStats();
    updateProgressBars();
    
    // Event listeners
    menuBtn.addEventListener('click', () => sidebar.classList.add('show'));
    closeSidebar.addEventListener('click', () => sidebar.classList.remove('show'));
    nextBtn.addEventListener('click', nextQuestion);
    hintBtn.addEventListener('click', showHint);
    closeHintModal.addEventListener('click', () => hintModal.classList.remove('show'));
    
    // Cerrar modal al hacer clic fuera
    hintModal.addEventListener('click', (e) => {
        if (e.target === hintModal) {
            hintModal.classList.remove('show');
        }
    });
    
    // Teclado shortcuts
    document.addEventListener('keydown', (e) => {
        // Números 1-4 para seleccionar opciones
        if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            const currentWeek = questionsData.semanas[currentWeekIndex];
            const currentDeck = currentWeek.mazos[currentDeckIndex];
            const question = currentDeck.preguntas[currentQuestionIndex];
            
            if (optionIndex < question.opciones.length) {
                selectOption(optionIndex);
            }
        }
        
        // Espacio o Enter para siguiente pregunta
        if ((e.key === ' ' || e.key === 'Enter') && !nextBtn.disabled) {
            nextQuestion();
        }
        
        // H para pista
        if (e.key === 'h' || e.key === 'H') {
            showHint();
        }
        
        // Escape para cerrar modales
        if (e.key === 'Escape') {
            hintModal.classList.remove('show');
        }
    });
}

// Cargar datos de preguntas desde localStorage o usar datos por defecto
function loadQuestionsData() {
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
        try {
            const progress = JSON.parse(savedProgress);
            userAnswers = progress.userAnswers || {};
            deckProgress = progress.deckProgress || {};
            currentWeekIndex = progress.currentWeekIndex || 0;
            currentDeckIndex = progress.currentDeckIndex || 0;
            currentQuestionIndex = progress.currentQuestionIndex || 0;
        } catch (e) {
            console.error('Error cargando progreso:', e);
            resetProgress();
        }
    } else {
        resetProgress();
    }
    
    // Inicializar deckProgress si no existe
    questionsData.semanas.forEach((week, weekIndex) => {
        week.mazos.forEach((deck, deckIndex) => {
            const deckId = `${week.id}-${deck.id}`;
            if (!deckProgress[deckId]) {
                deckProgress[deckId] = {
                    total: deck.preguntas.length,
                    answered: 0,
                    correct: 0
                };
            }
        });
    });
    
    saveProgress();
}

// Reiniciar progreso
function resetProgress() {
    userAnswers = {};
    deckProgress = {};
    currentWeekIndex = 0;
    currentDeckIndex = 0;
    currentQuestionIndex = 0;
}

// Guardar progreso en localStorage
function saveProgress() {
    const progress = {
        userAnswers,
        deckProgress,
        currentWeekIndex,
        currentDeckIndex,
        currentQuestionIndex,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
}

// Renderizar sidebar con semanas y mazos
function renderSidebar() {
    weekList.innerHTML = '';
    
    questionsData.semanas.forEach((week, weekIndex) => {
        const weekItem = document.createElement('div');
        weekItem.className = `week-item ${weekIndex === currentWeekIndex ? 'active' : ''}`;
        
        const weekHeader = document.createElement('div');
        weekHeader.className = 'week-header';
        weekHeader.innerHTML = `
            <div class="week-title">
                <i class="fas fa-folder${weekIndex === currentWeekIndex ? '-open' : ''}"></i>
                ${week.title}
            </div>
            <i class="fas fa-chevron-down"></i>
        `;
        
        const deckList = document.createElement('div');
        deckList.className = 'deck-list';
        deckList.style.display = weekIndex === currentWeekIndex ? 'block' : 'none';
        
        week.mazos.forEach((deck, deckIndex) => {
            const deckId = `${week.id}-${deck.id}`;
            const progress = deckProgress[deckId] || { total: deck.preguntas.length, answered: 0, correct: 0 };
            const percentage = progress.total > 0 ? Math.round((progress.answered / progress.total) * 100) : 0;
            
            const deckItem = document.createElement('div');
            deckItem.className = `deck-item ${weekIndex === currentWeekIndex && deckIndex === currentDeckIndex ? 'active' : ''}`;
            deckItem.innerHTML = `
                <span>${deck.title}</span>
                <span class="deck-progress-small">${progress.answered}/${progress.total}</span>
            `;
            
            deckItem.addEventListener('click', () => {
                currentWeekIndex = weekIndex;
                currentDeckIndex = deckIndex;
                currentQuestionIndex = 0;
                
                // Actualizar UI
                document.querySelectorAll('.week-item').forEach(item => item.classList.remove('active'));
                weekItem.classList.add('active');
                
                document.querySelectorAll('.deck-item').forEach(item => item.classList.remove('active'));
                deckItem.classList.add('active');
                
                // Mostrar el deck list de esta semana
                document.querySelectorAll('.deck-list').forEach(list => list.style.display = 'none');
                deckList.style.display = 'block';
                
                renderDeckButtons();
                loadCurrentQuestion();
                updateStats();
                updateProgressBars();
                saveProgress();
                
                // Cerrar sidebar en móviles
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('show');
                }
            });
            
            deckList.appendChild(deckItem);
        });
        
        weekHeader.addEventListener('click', () => {
            const isActive = weekItem.classList.contains('active');
            const icon = weekHeader.querySelector('.fa-chevron-down');
            
            document.querySelectorAll('.week-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.deck-list').style.display = 'none';
            });
            
            if (!isActive) {
                weekItem.classList.add('active');
                deckList.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
        
        weekItem.appendChild(weekHeader);
        weekItem.appendChild(deckList);
        weekList.appendChild(weekItem);
    });
}

// Renderizar botones de mazos
function renderDeckButtons() {
    deckButtons.innerHTML = '';
    const currentWeekData = questionsData.semanas[currentWeekIndex];
    
    currentWeekData.mazos.forEach((deck, deckIndex) => {
        const deckId = `${currentWeekData.id}-${deck.id}`;
        const progress = deckProgress[deckId] || { total: deck.preguntas.length, answered: 0, correct: 0 };
        const percentage = progress.total > 0 ? Math.round((progress.answered / progress.total) * 100) : 0;
        
        const button = document.createElement('button');
        button.className = `deck-btn ${deckIndex === currentDeckIndex ? 'active' : ''}`;
        button.innerHTML = `
            <div><strong>${deck.title}</strong></div>
            <small>${progress.answered}/${progress.total} (${percentage}%)</small>
        `;
        
        button.addEventListener('click', () => {
            currentDeckIndex = deckIndex;
            currentQuestionIndex = 0;
            renderDeckButtons();
            loadCurrentQuestion();
            updateProgressBars();
            saveProgress();
        });
        
        deckButtons.appendChild(button);
    });
}

// Cargar la pregunta actual
function loadCurrentQuestion() {
    const currentWeekData = questionsData.semanas[currentWeekIndex];
    const currentDeckData = currentWeekData.mazos[currentDeckIndex];
    const question = currentDeckData.preguntas[currentQuestionIndex];
    
    if (!question) {
        // Si no hay preguntas, ir a la primera
        currentQuestionIndex = 0;
        return loadCurrentQuestion();
    }
    
    // Actualizar información de la pregunta
    questionNumber.textContent = `Pregunta ${currentQuestionIndex + 1}`;
    questionText.textContent = question.pregunta;
    difficulty.textContent = question.dificultad;
    
    // Actualizar información del deck
    currentDeckElement.textContent = currentDeckData.title;
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentDeckData.preguntas.length}`;
    currentWeekElement.textContent = currentWeekData.title;
    
    // Renderizar opciones
    renderOptions(question);
    
    // Limpiar feedback
    feedback.className = 'feedback';
    feedback.textContent = '';
    feedback.style.display = 'none';
    
    // Habilitar/deshabilitar botones
    nextBtn.disabled = true;
    hintBtn.disabled = false;
    
    // Verificar si ya hay respuesta
    const questionKey = `${currentWeekData.id}-${currentDeckData.id}-${question.id}`;
    if (userAnswers[questionKey]) {
        const userAnswer = userAnswers[questionKey];
        showAnswerResult(question, userAnswer.selected, userAnswer.isCorrect);
    }
    
    // Actualizar progreso
    updateProgressBars();
}

// Renderizar opciones de respuesta
function renderOptions(question) {
    optionsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    question.opciones.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <div class="option-text">${option}</div>
            <div class="option-shortcut">[${index + 1}]</div>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        
        optionsContainer.appendChild(optionElement);
    });
}

// Seleccionar una opción
function selectOption(optionIndex) {
    const currentWeekData = questionsData.semanas[currentWeekIndex];
    const currentDeckData = currentWeekData.mazos[currentDeckIndex];
    const question = currentDeckData.preguntas[currentQuestionIndex];
    
    // Verificar si ya se respondió
    const questionKey = `${currentWeekData.id}-${currentDeckData.id}-${question.id}`;
    if (userAnswers[questionKey]) {
        return; // Ya respondida, no hacer nada
    }
    
    // Marcar opción seleccionada
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    
    // Verificar respuesta
    const isCorrect = optionIndex === question.respuesta;
    
    // Guardar respuesta
    userAnswers[questionKey] = {
        selected: optionIndex,
        isCorrect: isCorrect,
        timestamp: new Date().toISOString()
    };
    
    // Actualizar progreso del deck
    const deckId = `${currentWeekData.id}-${currentDeckData.id}`;
    deckProgress[deckId].answered++;
    if (isCorrect) {
        deckProgress[deckId].correct++;
    }
    
    // Mostrar resultado
    showAnswerResult(question, optionIndex, isCorrect);
    
    // Actualizar estadísticas
    updateStats();
    saveProgress();
}

// Mostrar resultado de la respuesta
function showAnswerResult(question, selectedIndex, isCorrect) {
    const options = document.querySelectorAll('.option');
    const letters = ['A', 'B', 'C', 'D'];
    
    // Marcar opción correcta
    options[question.respuesta].classList.add('correct');
    
    // Si la respuesta es incorrecta, marcar la selección del usuario
    if (!isCorrect) {
        options[selectedIndex].classList.add('incorrect');
    }
    
    // Mostrar feedback
    feedback.textContent = question.explicacion;
    feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.style.display = 'block';
    
    // Habilitar botón siguiente
    nextBtn.disabled = false;
    hintBtn.disabled = true;
    
    // Añadir sonido (opcional)
    playSound(isCorrect);
}

// Reproducir sonido de respuesta
function playSound(isCorrect) {
    try {
        // Crear contexto de audio
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (isCorrect) {
            // Sonido correcto (tono ascendente)
            playTone(audioContext, 523.25, 0.3); // Do
            setTimeout(() => playTone(audioContext, 659.25, 0.3), 150); // Mi
        } else {
            // Sonido incorrecto (tono descendente)
            playTone(audioContext, 392.00, 0.4); // Sol
            setTimeout(() => playTone(audioContext, 329.63, 0.4), 200); // Mi
        }
    } catch (e) {
        console.log('Audio no disponible');
    }
}

// Reproducir un tono
function playTone(audioContext, frequency, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    // Envolvente de volumen
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Siguiente pregunta
function nextQuestion() {
    const currentWeekData = questionsData.semanas[currentWeekIndex];
    const currentDeckData = currentWeekData.mazos[currentDeckIndex];
    
    // Avanzar a la siguiente pregunta
    currentQuestionIndex++;
    
    // Si llegamos al final del mazo
    if (currentQuestionIndex >= currentDeckData.preguntas.length) {
        // Verificar si hay siguiente mazo en la misma semana
        if (currentDeckIndex < currentWeekData.mazos.length - 1) {
            currentDeckIndex++;
            currentQuestionIndex = 0;
            
            // Mostrar mensaje de mazo completado
            showCompletionMessage();
        } else {
            // Verificar si hay siguiente semana
            if (currentWeekIndex < questionsData.semanas.length - 1) {
                currentWeekIndex++;
                currentDeckIndex = 0;
                currentQuestionIndex = 0;
                
                // Mostrar mensaje de semana completada
                showCompletionMessage(true);
            } else {
                // Todo completado
                showAllCompletedMessage();
                return;
            }
        }
        
        // Actualizar sidebar y botones
        renderSidebar();
        renderDeckButtons();
    }
    
    // Cargar la nueva pregunta
    loadCurrentQuestion();
}

// Mostrar mensaje de completado
function showCompletionMessage(isWeek = false) {
    const message = document.createElement('div');
    message.className = 'completion-message';
    message.innerHTML = `
        <div class="completion-content">
            <i class="fas fa-trophy"></i>
            <h3>${isWeek ? '¡Semana Completada!' : '¡Mazo Completado!'}</h3>
            <p>${isWeek ? 'Has completado todas las preguntas de esta semana.' : 'Has completado todas las preguntas de este mazo.'}</p>
            <button id="closeCompletion" class="btn-next">
                Continuar <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Animar entrada
    setTimeout(() => {
        message.classList.add('show');
    }, 100);
    
    // Event listener para cerrar
    document.getElementById('closeCompletion').addEventListener('click', () => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    });
    
    // Cerrar al hacer clic fuera
    message.addEventListener('click', (e) => {
        if (e.target === message) {
            message.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }
    });
}

// Mostrar mensaje de todo completado
function showAllCompletedMessage() {
    const message = document.createElement('div');
    message.className = 'completion-message';
    message.innerHTML = `
        <div class="completion-content">
            <i class="fas fa-award" style="color: gold; font-size: 3rem;"></i>
            <h2>¡Felicidades!</h2>
            <h3>Has completado todo el curso</h3>
            <div class="final-stats">
                <div class="final-stat">
                    <i class="fas fa-question-circle"></i>
                    <span>${calculateTotalQuestions()} preguntas totales</span>
                </div>
                <div class="final-stat">
                    <i class="fas fa-check-circle"></i>
                    <span>${calculateTotalCorrect()} correctas</span>
                </div>
                <div class="final-stat">
                    <i class="fas fa-percentage"></i>
                    <span>${calculateOverallPercentage()}% de efectividad</span>
                </div>
            </div>
            <div class="final-buttons">
                <button id="restartQuiz" class="btn-hint">
                    <i class="fas fa-redo"></i> Reiniciar Todo
                </button>
                <button id="closeAllCompleted" class="btn-next">
                    Continuar Repasando
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 100);
    
    // Event listeners
    document.getElementById('restartQuiz').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
            localStorage.removeItem('quizProgress');
            location.reload();
        }
    });
    
    document.getElementById('closeAllCompleted').addEventListener('click', () => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
        
        // Volver al inicio
        currentQuestionIndex = 0;
        currentDeckIndex = 0;
        currentWeekIndex = 0;
        renderSidebar();
        renderDeckButtons();
        loadCurrentQuestion();
    });
    
    message.addEventListener('click', (e) => {
        if (e.target === message) {
            message.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }
    });
}

// Mostrar pista
function showHint() {
    const currentWeekData = questionsData.semanas[currentWeekIndex];
    const currentDeckData = currentWeekData.mazos[currentDeckIndex];
    const question = currentDeckData.preguntas[currentQuestionIndex];
    
    hintContent.textContent = question.pista || 'No hay pista disponible para esta pregunta.';
    hintModal.classList.add('show');
}

// Actualizar estadísticas
function updateStats() {
    let total = 0;
    let correct = 0;
    let answered = 0;
    
    // Calcular total de preguntas
    questionsData.semanas.forEach(week => {
        week.mazos.forEach(deck => {
            total += deck.preguntas.length;
        });
    });
    
    // Calcular respuestas correctas
    Object.values(userAnswers).forEach(answer => {
        answered++;
        if (answer.isCorrect) {
            correct++;
        }
    });
    
    totalQuestionsElement.textContent = total;
    correctAnswersElement.textContent = correct;
    
    // Actualizar progreso global
    const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;
    globalProgress.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;
}

// Actualizar barras de progreso
function updateProgressBars() {
    const currentWeekData = questionsData.semanas[currentWeekIndex];
    const currentDeckData = currentWeekData.mazos[currentDeckIndex];
    const deckId = `${currentWeekData.id}-${currentDeckData.id}`;
    
    const progress = deckProgress[deckId] || { total: currentDeckData.preguntas.length, answered: 0, correct: 0 };
    const percentage = progress.total > 0 ? Math.round((progress.answered / progress.total) * 100) : 0;
    
    deckProgressBar.style.width = `${percentage}%`;
    deckProgressText.textContent = `${progress.answered}/${progress.total} (${percentage}%)`;
}

// Calcular total de preguntas
function calculateTotalQuestions() {
    let total = 0;
    questionsData.semanas.forEach(week => {
        week.mazos.forEach(deck => {
            total += deck.preguntas.length;
        });
    });
    return total;
}

// Calcular total de respuestas correctas
function calculateTotalCorrect() {
    return Object.values(userAnswers).filter(answer => answer.isCorrect).length;
}

// Calcular porcentaje general
function calculateOverallPercentage() {
    const total = calculateTotalQuestions();
    const correct = calculateTotalCorrect();
    return total > 0 ? Math.round((correct / total) * 100) : 0;
}

// Exportar progreso
function exportProgress() {
    const progress = {
        userAnswers,
        deckProgress,
        stats: {
            totalQuestions: calculateTotalQuestions(),
            totalCorrect: calculateTotalCorrect(),
            percentage: calculateOverallPercentage(),
            lastUpdated: new Date().toISOString()
        }
    };
    
    const dataStr = JSON.stringify(progress, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `progreso-seguridad-redes-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Importar progreso
function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const progress = JSON.parse(e.target.result);
            
            if (confirm('¿Estás seguro de que quieres importar este progreso? Se sobrescribirán tus datos actuales.')) {
                localStorage.setItem('quizProgress', JSON.stringify(progress));
                location.reload();
            }
        } catch (error) {
            alert('Error al importar el archivo. Asegúrate de que sea un archivo JSON válido.');
        }
    };
    reader.readAsText(file);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// CSS adicional para mensajes de completado
const additionalCSS = `
.completion-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.completion-message.show {
    opacity: 1;
    pointer-events: all;
}

.completion-content {
    background: white;
    border-radius: 15px;
    padding: 40px;
    max-width: 500px;
    width: 90%;
    text-align: center;
    transform: translateY(20px);
    transition: transform 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.completion-message.show .completion-content {
    transform: translateY(0);
}

.completion-content i {
    font-size: 4rem;
    color: #f39c12;
    margin-bottom: 20px;
}

.completion-content h2, .completion-content h3 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.completion-content p {
    color: #7f8c8d;
    margin-bottom: 25px;
    line-height: 1.6;
}

.final-stats {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    margin: 25px 0;
    text-align: left;
}

.final-stat {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    transition: background 0.3s;
}

.final-stat:hover {
    background: #e9ecef;
}

.final-stat i {
    font-size: 1.5rem;
    color: #3498db;
    width: 30px;
}

.final-stat span {
    font-weight: 600;
    color: #2c3e50;
}

.final-buttons {
    display: flex;
    gap: 15px;
    margin-top: 25px;
}

.final-buttons button {
    flex: 1;
    padding: 12px;
    font-size: 1rem;
}

.option-shortcut {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    color: #7f8c8d;
    margin-left: auto;
}

@media (max-width: 768px) {
    .final-buttons {
        flex-direction: column;
    }
    
    .completion-content {
        padding: 25px;
    }
}
`;

// Añadir CSS adicional
const styleElement = document.createElement('style');
styleElement.textContent = additionalCSS;
document.head.appendChild(styleElement);

// Función para añadir botones de exportar/importar en el sidebar
function addExportImportButtons() {
    const exportImportDiv = document.createElement('div');
    exportImportDiv.className = 'export-import';
    exportImportDiv.innerHTML = `
        <h4><i class="fas fa-download"></i> Gestionar Progreso</h4>
        <div class="export-import-buttons">
            <button id="exportBtn" class="export-btn">
                <i class="fas fa-file-export"></i> Exportar
            </button>
            <label for="importFile" class="import-btn">
                <i class="fas fa-file-import"></i> Importar
                <input type="file" id="importFile" accept=".json" style="display: none;">
            </label>
            <button id="resetBtn" class="reset-btn">
                <i class="fas fa-trash-alt"></i> Reiniciar
            </button>
        </div>
    `;
    
    document.querySelector('.sidebar-content').appendChild(exportImportDiv);
    
    // Event listeners
    document.getElementById('exportBtn').addEventListener('click', exportProgress);
    document.getElementById('importFile').addEventListener('change', importProgress);
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
            localStorage.removeItem('quizProgress');
            location.reload();
        }
    });
}

// Añadir CSS para los botones de exportar/importar
const exportImportCSS = `
.export-import {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
}

.export-import h4 {
    margin-bottom: 15px;
    font-size: 1rem;
    color: #1abc9c;
    display: flex;
    align-items: center;
    gap: 10px;
}

.export-import-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.export-btn, .import-btn, .reset-btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    transition: all 0.3s ease;
    color: white;
}

.export-btn {
    background: #3498db;
}

.export-btn:hover {
    background: #2980b9;
}

.import-btn {
    background: #9b59b6;
    cursor: pointer;
}

.import-btn:hover {
    background: #8e44ad;
}

.reset-btn {
    background: #e74c3c;
}

.reset-btn:hover {
    background: #c0392b;
}
`;

// Añadir CSS de export/import
const exportImportStyle = document.createElement('style');
exportImportStyle.textContent = exportImportCSS;
document.head.appendChild(exportImportStyle);

// Añadir botones de exportar/importar cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addExportImportButtons, 100);
});

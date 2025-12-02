// BASE DE DATOS COMPLETA DE PREGUNTAS DEL PDF
const mazos = {
    "conceptos-basicos": {
        nombre: "📚 Conceptos Básicos",
        descripcion: "Fundamentos de respaldo y recuperación",
        icono: "fas fa-book",
        color: "#4f46e5",
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
                explicacion: "RPO (Recovery Point Objective) define la cantidad máxima de datos que una organización está dispuesta a perder desde el último respaldo hasta el momento del incidente.",
                referencia: "Según ISO 22301 y NIST SP 800-34"
            },
            {
                pregunta: "¿Qué establece el RTO?",
                contexto: "En el contexto de continuidad del negocio",
                opciones: [
                    { texto: "Cantidad máxima de datos perdidos", correcta: false },
                    { texto: "Tiempo máximo para volver a operar", correcta: true },
                    { texto: "Frecuencia de respaldo óptima", correcta: false },
                    { texto: "Capacidad de almacenamiento requerida", correcta: false }
                ],
                explicacion: "RTO (Recovery Time Objective) es el tiempo máximo permitido para que un servicio, sistema o proceso vuelva a estar operativo después de una interrupción.",
                referencia: "ISO 22301 - Continuidad del Negocio"
            },
            {
                pregunta: "El respaldo incremental copia:",
                contexto: "Tipos de respaldo según estándares internacionales",
                opciones: [
                    { texto: "Todo el sistema completo", correcta: false },
                    { texto: "Lo cambiado desde el último respaldo incremental o full", correcta: true },
                    { texto: "Lo cambiado desde el último respaldo completo", correcta: false },
                    { texto: "Solo archivos nuevos creados", correcta: false }
                ],
                explicacion: "El respaldo incremental copia únicamente los archivos que han cambiado desde el último respaldo, ya sea completo o incremental.",
                referencia: "NIST SP 800-209 - Guidelines for Backup and Restore"
            },
            {
                pregunta: "¿Qué significa CDP?",
                contexto: "Tecnologías avanzadas de respaldo",
                opciones: [
                    { texto: "Cloud Data Protection", correcta: false },
                    { texto: "Continuous Data Protection", correcta: true },
                    { texto: "Complete Disk Protocol", correcta: false },
                    { texto: "Central Data Processing", correcta: false }
                ],
                explicacion: "CDP (Continuous Data Protection) es un método de respaldo que registra cambios en tiempo real o en intervalos muy cortos, permitiendo RPO cercano a cero.",
                referencia: "Tecnología de respaldo continuo"
            }
        ]
    },
    
    "tipos-respaldo": {
        nombre: "💾 Tipos de Respaldo",
        descripcion: "Full, incremental, diferencial y CDP",
        icono: "fas fa-hdd",
        color: "#10b981",
        preguntas: [
            {
                pregunta: "¿Qué tipo de respaldo copia toda la información completa?",
                contexto: "Comparación entre diferentes estrategias de backup",
                opciones: [
                    { texto: "Incremental", correcta: false },
                    { texto: "Diferencial", correcta: false },
                    { texto: "Completo (Full)", correcta: true },
                    { texto: "Mixto", correcta: false }
                ],
                explicacion: "El respaldo completo (Full Backup) copia todo el contenido de un sistema, incluyendo archivos, bases de datos, configuraciones y directorios completos.",
                referencia: "Método tradicional de respaldo"
            },
            {
                pregunta: "Un respaldo diferencial copia:",
                contexto: "Características específicas de cada tipo",
                opciones: [
                    { texto: "Cambios desde el último incremental", correcta: false },
                    { texto: "Cambios desde el último full backup", correcta: true },
                    { texto: "Todo el sistema cada vez", correcta: false },
                    { texto: "Solo archivos de sistema", correcta: false }
                ],
                explicacion: "El respaldo diferencial copia toda la información que ha cambiado desde el último respaldo completo, sin importar los incrementales previos.",
                referencia: "Balance entre espacio y tiempo de recuperación"
            },
            {
                pregunta: "La principal ventaja del respaldo completo es:",
                contexto: "Ventajas y desventajas de cada método",
                opciones: [
                    { texto: "Ocupa poco espacio de almacenamiento", correcta: false },
                    { texto: "Restauración rápida y directa", correcta: true },
                    { texto: "No requiere backup inicial", correcta: false },
                    { texto: "Es el método más económico", correcta: false }
                ],
                explicacion: "El respaldo completo ofrece una restauración más rápida y directa porque contiene toda la información en un único paquete.",
                referencia: "ISO 27002 recomendaciones"
            },
            {
                pregunta: "La principal desventaja del respaldo incremental es:",
                contexto: "Consideraciones para la implementación",
                opciones: [
                    { texto: "Ocupa mucho espacio", correcta: false },
                    { texto: "Restauración lenta y compleja", correcta: true },
                    { texto: "No permite backups frecuentes", correcta: false },
                    { texto: "Requiere conexión a Internet", correcta: false }
                ],
                explicacion: "El proceso de recuperación puede ser más lento y complejo, pues requiere contar con el respaldo completo y con toda la cadena de incrementales.",
                referencia: "NIST SP 800-209 consideraciones"
            }
        ]
    },
    
    "medios-ubicaciones": {
        nombre: "🌍 Medios y Ubicaciones",
        descripcion: "Local, off-site y en la nube",
        icono: "fas fa-cloud",
        color: "#0ea5e9",
        preguntas: [
            {
                pregunta: "La principal desventaja del respaldo local es:",
                contexto: "Evaluación de medios de almacenamiento",
                opciones: [
                    { texto: "Requiere Internet constante", correcta: false },
                    { texto: "Alto costo mensual de mantenimiento", correcta: false },
                    { texto: "Riesgo ante desastres locales", correcta: true },
                    { texto: "No permite restauración rápida", correcta: false }
                ],
                explicacion: "El respaldo local es vulnerable a desastres locales como incendios, inundaciones o robos, ya que comparte la misma ubicación física que los sistemas productivos.",
                referencia: "ISO 27031 recomendaciones"
            },
            {
                pregunta: "¿Qué medio es ideal para protección ante desastres físicos?",
                contexto: "Estrategias de almacenamiento seguro",
                opciones: [
                    { texto: "NAS interno", correcta: false },
                    { texto: "Respaldo local", correcta: false },
                    { texto: "Respaldo off-site", correcta: true },
                    { texto: "Disco del servidor principal", correcta: false }
                ],
                explicacion: "El respaldo off-site protege a la organización contra eventos catastróficos locales como incendios, desastres naturales o robos masivos.",
                referencia: "ISO 27031 - Continuidad de Servicios TI"
            },
            {
                pregunta: "El respaldo en la nube requiere obligatoriamente:",
                contexto: "Requisitos de seguridad para cloud",
                opciones: [
                    { texto: "Token físico de seguridad", correcta: false },
                    { texto: "Ancho de banda ilimitado", correcta: false },
                    { texto: "Cifrado de datos", correcta: true },
                    { texto: "Almacenamiento RAID local", correcta: false }
                ],
                explicacion: "Según ISO 27018, los datos en la nube deben viajar cifrados y mantenerse cifrados en el almacenamiento para garantizar la seguridad.",
                referencia: "ISO 27018 - Protección de datos en la nube"
            },
            {
                pregunta: "Una desventaja del respaldo off-site es:",
                contexto: "Consideraciones prácticas de implementación",
                opciones: [
                    { texto: "No permite copias diarias", correcta: false },
                    { texto: "Lenta recuperación si está lejos", correcta: true },
                    { texto: "Requiere conectividad permanente", correcta: false },
                    { texto: "Costos de almacenamiento muy bajos", correcta: false }
                ],
                explicacion: "La restauración es más lenta, ya que traer físicamente los discos o cintas puede tomar horas o días, dependiendo de la distancia y logística.",
                referencia: "Consideraciones prácticas NIST"
            }
        ]
    },
    
    "procedimientos-incidentes": {
        nombre: "🚨 Procedimientos de Incidentes",
        descripcion: "Detección, contención y recuperación",
        icono: "fas fa-first-aid",
        color: "#ef4444",
        preguntas: [
            {
                pregunta: "¿Qué etapa según NIST incluye aislar el problema para evitar propagación?",
                contexto: "Gestión de incidentes críticos",
                opciones: [
                    { texto: "Validación", correcta: false },
                    { texto: "Contención", correcta: true },
                    { texto: "Restauración", correcta: false },
                    { texto: "Documentación", correcta: false }
                ],
                explicacion: "La etapa de detección y contención busca evitar que el problema se expanda, especialmente en casos de malware o accesos no autorizados.",
                referencia: "NIST SP 800-61 - Gestión de Incidentes"
            },
            {
                pregunta: "La validación se realiza para:",
                contexto: "Proceso de recuperación verificado",
                opciones: [
                    { texto: "Volver a generar respaldos", correcta: false },
                    { texto: "Confirmar integridad y funcionamiento", correcta: true },
                    { texto: "Borrar datos corruptos automáticamente", correcta: false },
                    { texto: "Configurar nuevos usuarios", correcta: false }
                ],
                explicacion: "La validación verifica que los datos recuperados sean exactos, que la aplicación funcione correctamente y que los usuarios puedan acceder sin errores.",
                referencia: "ISO 27035 - Gestión de Incidentes"
            },
            {
                pregunta: "¿Qué etapa incluye elegir el respaldo adecuado?",
                contexto: "Proceso de restauración sistemático",
                opciones: [
                    { texto: "Contención", correcta: false },
                    { texto: "Documentación", correcta: false },
                    { texto: "Restauración", correcta: true },
                    { texto: "Escalamiento", correcta: false }
                ],
                explicacion: "La etapa de restauración consiste en recuperar los servicios desde las copias de seguridad, seleccionando el respaldo adecuado según RPO y RTO.",
                referencia: "Procedimiento de recuperación"
            },
            {
                pregunta: "¿Quién debe validar que las notas recuperadas son correctas?",
                contexto: "Roles y responsabilidades específicas",
                opciones: [
                    { texto: "Área académica", correcta: true },
                    { texto: "Seguridad informática", correcta: false },
                    { texto: "Dirección general", correcta: false },
                    { texto: "Auditoría interna", correcta: false }
                ],
                explicacion: "El área académica confirma que las notas recuperadas coinciden con los registros previos y que los reportes funcionan como antes del incidente.",
                referencia: "Roles según ISO 27031"
            }
        ]
    },
    
    "normas-estandares": {
        nombre: "📋 Normas y Estándares",
        descripcion: "ISO, NIST y mejores prácticas",
        icono: "fas fa-certificate",
        color: "#f59e0b",
        preguntas: [
            {
                pregunta: "¿Qué norma cubre específicamente la continuidad del negocio?",
                contexto: "Estándares internacionales aplicables",
                opciones: [
                    { texto: "ISO 27001", correcta: false },
                    { texto: "ISO 22301", correcta: true },
                    { texto: "ISO 9001", correcta: false },
                    { texto: "ISO 14001", correcta: false }
                ],
                explicacion: "ISO 22301 es la norma específica para Sistemas de Gestión de Continuidad del Negocio.",
                referencia: "ISO 22301:2019"
            },
            {
                pregunta: "¿Qué documento NIST cubre específicamente backup y restore?",
                contexto: "Publicaciones especializadas del NIST",
                opciones: [
                    { texto: "NIST SP 800-53", correcta: false },
                    { texto: "NIST SP 800-209", correcta: true },
                    { texto: "NIST SP 800-34", correcta: false },
                    { texto: "NIST SP 800-61", correcta: false }
                ],
                explicacion: "NIST SP 800-209 son las 'Guidelines for Backup and Restore' específicas para sistemas de respaldo.",
                referencia: "NIST Special Publication 800-209"
            },
            {
                pregunta: "¿Qué documento exige registrar incidentes críticos?",
                contexto: "Requisitos de documentación",
                opciones: [
                    { texto: "ISO 9001", correcta: false },
                    { texto: "ISO 27031", correcta: true },
                    { texto: "ISO 14000", correcta: false },
                    { texto: "NIST 500-52", correcta: false }
                ],
                explicacion: "ISO 27031 exige documentar incidentes críticos como parte de la continuidad de servicios TI.",
                referencia: "ISO/IEC 27031:2011"
            },
            {
                pregunta: "¿Qué norma cubre la protección de datos en la nube?",
                contexto: "Estándares de seguridad cloud",
                opciones: [
                    { texto: "ISO 27001", correcta: false },
                    { texto: "ISO 27018", correcta: true },
                    { texto: "ISO 27002", correcta: false },
                    { texto: "ISO 27005", correcta: false }
                ],
                explicacion: "ISO 27018 es el código de práctica para la protección de datos personales en la nube.",
                referencia: "ISO/IEC 27018:2019"
            }
        ]
    },
    
    "preguntas-completas-pdf": {
        nombre: "📄 TODAS las Preguntas PDF",
        descripcion: "65 preguntas completas del documento",
        icono: "fas fa-file-pdf",
        color: "#ec4899",
        preguntas: [
            // Preguntas de la PARTE 1 (1-20)
            {
                pregunta: "¿Qué establece el RPO?",
                contexto: "Pregunta 1 de selección múltiple",
                opciones: [
                    { texto: "Tiempo máximo para volver a operar", correcta: false },
                    { texto: "Cantidad máxima de datos que se pueden perder", correcta: true },
                    { texto: "Máximo de usuarios conectados", correcta: false },
                    { texto: "Espacio mínimo de almacenamiento", correcta: false }
                ],
                explicacion: "RPO (Recovery Point Objective) es la cantidad máxima de datos que la organización está dispuesta a perder desde el último respaldo hasta el momento del incidente.",
                referencia: "ISO 22301 definición"
            },
            {
                pregunta: "¿Qué tipo de respaldo copia toda la información completa?",
                contexto: "Pregunta 2 - Tipos de respaldo",
                opciones: [
                    { texto: "Incremental", correcta: false },
                    { texto: "Diferencial", correcta: false },
                    { texto: "Completo", correcta: true },
                    { texto: "Mixto", correcta: false }
                ],
                explicacion: "El respaldo completo (Full Backup) consiste en copiar todo el contenido de un sistema, incluyendo archivos, bases de datos y configuraciones.",
                referencia: "NIST SP 800-209 definición"
            },
            {
                pregunta: "El respaldo incremental copia:",
                contexto: "Pregunta 3 - Características específicas",
                opciones: [
                    { texto: "Todo el sistema", correcta: false },
                    { texto: "Lo cambiado desde el último respaldo incremental o full", correcta: true },
                    { texto: "Lo cambiado desde el último respaldo completo", correcta: false },
                    { texto: "Solo archivos nuevos", correcta: false }
                ],
                explicacion: "El respaldo incremental copia únicamente los archivos que han cambiado desde el último respaldo, ya sea completo o incremental.",
                referencia: "Definición estándar"
            },
            {
                pregunta: "La principal desventaja del respaldo local es:",
                contexto: "Pregunta 4 - Medios de almacenamiento",
                opciones: [
                    { texto: "Requiere internet", correcta: false },
                    { texto: "Alto costo mensual", correcta: false },
                    { texto: "Riesgo ante desastres locales", correcta: true },
                    { texto: "No se puede restaurar rápidamente", correcta: false }
                ],
                explicacion: "Al estar en la misma ubicación física que los sistemas productivos, comparte sus riesgos como incendios, inundaciones o robos.",
                referencia: "ISO 27002 consideraciones"
            },
            {
                pregunta: "El respaldo en la nube requiere obligatoriamente:",
                contexto: "Pregunta 5 - Seguridad cloud",
                opciones: [
                    { texto: "Token físico", correcta: false },
                    { texto: "Ancho de banda ilimitado", correcta: false },
                    { texto: "Cifrado de datos", correcta: true },
                    { texto: "Almacenamiento RAID", correcta: false }
                ],
                explicacion: "Según ISO 27018, los datos deben viajar cifrados y mantenerse cifrados en el almacenamiento en la nube.",
                referencia: "ISO 27018 requisito"
            },
            {
                pregunta: "¿Qué etapa según NIST incluye aislar el problema para evitar propagación?",
                contexto: "Pregunta 6 - Gestión de incidentes",
                opciones: [
                    { texto: "Validación", correcta: false },
                    { texto: "Contención", correcta: true },
                    { texto: "Restauración", correcta: false },
                    { texto: "Documentación", correcta: false }
                ],
                explicacion: "La contención busca evitar que el problema se expanda, lo que es esencial especialmente en casos de malware o accesos no autorizados.",
                referencia: "NIST SP 800-61"
            },
            {
                pregunta: "¿Qué medio es ideal para protección ante desastres físicos?",
                contexto: "Pregunta 7 - Estrategias de almacenamiento",
                opciones: [
                    { texto: "NAS interno", correcta: false },
                    { texto: "Respaldo local", correcta: false },
                    { texto: "Respaldo off-site", correcta: true },
                    { texto: "Disco del servidor", correcta: false }
                ],
                explicacion: "El respaldo off-site protege contra eventos catastróficos locales como incendios, inundaciones o desastres naturales.",
                referencia: "ISO 27031 recomendación"
            },
            {
                pregunta: "La restauración debe cumplir principalmente con el:",
                contexto: "Pregunta 8 - Objetivos de recuperación",
                opciones: [
                    { texto: "RTO", correcta: true },
                    { texto: "KPI", correcta: false },
                    { texto: "TIR", correcta: false },
                    { texto: "IPsec", correcta: false }
                ],
                explicacion: "RTO (Recovery Time Objective) es el tiempo máximo permitido para que un servicio vuelva a estar operativo.",
                referencia: "ISO 22301 objetivo"
            },
            {
                pregunta: "La validación se realiza para:",
                contexto: "Pregunta 9 - Verificación de recuperación",
                opciones: [
                    { texto: "Volver a generar respaldos", correcta: false },
                    { texto: "Confirmar integridad y funcionamiento", correcta: true },
                    { texto: "Borrar datos corruptos", correcta: false },
                    { texto: "Configurar usuarios", correcta: false }
                ],
                explicacion: "Verifica que los datos recuperados sean exactos y que los sistemas funcionen correctamente.",
                referencia: "Proceso de validación"
            },
            {
                pregunta: "¿Qué significa CDP?",
                contexto: "Pregunta 10 - Tecnologías avanzadas",
                opciones: [
                    { texto: "Cloud Data Protection", correcta: false },
                    { texto: "Continuous Data Protection", correcta: true },
                    { texto: "Central Database Process", correcta: false },
                    { texto: "Computer Disaster Plan", correcta: false }
                ],
                explicacion: "CDP es el método más avanzado de respaldo que registra cambios en tiempo real o en intervalos muy cortos.",
                referencia: "Tecnología de protección continua"
            },
            {
                pregunta: "¿Qué etapa incluye elegir el respaldo adecuado?",
                contexto: "Pregunta 11 - Proceso de recuperación",
                opciones: [
                    { texto: "Contención", correcta: false },
                    { texto: "Documentación", correcta: false },
                    { texto: "Restauración", correcta: true },
                    { texto: "Escalamiento", correcta: false }
                ],
                explicacion: "La etapa de restauración implica seleccionar el respaldo adecuado basado en RPO y RTO.",
                referencia: "Procedimiento de restauración"
            },
            {
                pregunta: "¿Quién debe validar que las notas recuperadas son correctas?",
                contexto: "Pregunta 12 - Roles y responsabilidades",
                opciones: [
                    { texto: "Área académica", correcta: true },
                    { texto: "Seguridad informática", correcta: false },
                    { texto: "Dirección general", correcta: false },
                    { texto: "Auditoría", correcta: false }
                ],
                explicacion: "Los usuarios responsables del proceso (área académica) verifican la integridad de la información restaurada.",
                referencia: "Roles según NIST"
            },
            {
                pregunta: "Un respaldo diferencial copia:",
                contexto: "Pregunta 13 - Tipos de respaldo",
                opciones: [
                    { texto: "Cambios desde el último incremental", correcta: false },
                    { texto: "Cambios desde el último full backup", correcta: true },
                    { texto: "Todo el sistema", correcta: false },
                    { texto: "Archivos cifrados solamente", correcta: false }
                ],
                explicacion: "Copia toda la información que ha cambiado desde el último respaldo completo.",
                referencia: "Definición de respaldo diferencial"
            },
            {
                pregunta: "La contención incluye:",
                contexto: "Pregunta 14 - Acciones específicas",
                opciones: [
                    { texto: "Verificar integridad", correcta: false },
                    { texto: "Desconectar el equipo afectado", correcta: true },
                    { texto: "Revisar logs", correcta: false },
                    { texto: "Notificar a auditoría", correcta: false }
                ],
                explicacion: "Acciones como desconectar equipos comprometidos o aislar segmentos de red para evitar propagación.",
                referencia: "Acciones de contención NIST"
            },
            {
                pregunta: "El almacenamiento en la nube destaca por:",
                contexto: "Pregunta 15 - Ventajas cloud",
                opciones: [
                    { texto: "No requerir internet", correcta: false },
                    { texto: "Tener durabilidad extremadamente alta", correcta: true },
                    { texto: "No ser escalable", correcta: false },
                    { texto: "No permitir restauraciones", correcta: false }
                ],
                explicacion: "Ofrece niveles de durabilidad extremadamente altos (ej: Amazon S3 promete 99.999999999%).",
                referencia: "Ventajas de almacenamiento cloud"
            },
            {
                pregunta: "Una desventaja del respaldo off-site es:",
                contexto: "Pregunta 16 - Limitaciones",
                opciones: [
                    { texto: "Requiere conectividad", correcta: false },
                    { texto: "Costos elevados", correcta: false },
                    { texto: "Lenta recuperación si está lejos", correcta: true },
                    { texto: "No permite copias diarias", correcta: false }
                ],
                explicacion: "Traer físicamente los discos o cintas puede tomar horas o días, dependiendo de la distancia.",
                referencia: "Limitaciones prácticas"
            },
            {
                pregunta: "El ransomware puede afectar:",
                contexto: "Pregunta 17 - Amenazas cibernéticas",
                opciones: [
                    { texto: "Solo a equipos sin Internet", correcta: false },
                    { texto: "Solo a servidores", correcta: false },
                    { texto: "Tanto a datos locales como respaldos conectados", correcta: true },
                    { texto: "Solo a la nube", correcta: false }
                ],
                explicacion: "Puede cifrar no solo el servidor principal, sino también el NAS o discos montados como unidades en la misma red.",
                referencia: "Amenaza ransomware"
            },
            {
                pregunta: "¿Qué documento exige registrar incidentes críticos?",
                contexto: "Pregunta 18 - Normativas",
                opciones: [
                    { texto: "ISO 9001", correcta: false },
                    { texto: "ISO 27031", correcta: true },
                    { texto: "ISO 14000", correcta: false },
                    { texto: "NIST 500-52", correcta: false }
                ],
                explicacion: "ISO 27031 exige documentar incidentes como base para mejorar políticas y ajustar procesos.",
                referencia: "ISO 27031 requerimiento"
            },
            {
                pregunta: "¿Quién autoriza la restauración final?",
                contexto: "Pregunta 19 - Jerarquía organizacional",
                opciones: [
                    { texto: "Técnico de laboratorio", correcta: false },
                    { texto: "Personal docente", correcta: false },
                    { texto: "Jefe de sistemas", correcta: true },
                    { texto: "Estudiantes", correcta: false }
                ],
                explicacion: "El líder o jefe de sistemas activa oficialmente el protocolo y autoriza la restauración final.",
                referencia: "Roles NIST SP 800-34"
            },
            {
                pregunta: "Los respaldos locales son útiles principalmente porque:",
                contexto: "Pregunta 20 - Ventajas locales",
                opciones: [
                    { texto: "No requieren energía", correcta: false },
                    { texto: "Son extremadamente seguros", correcta: false },
                    { texto: "Permiten restauración muy rápida", correcta: true },
                    { texto: "No consumen almacenamiento", correcta: false }
                ],
                explicacion: "Permiten una recuperación muy veloz ya que los archivos están en la misma red.",
                referencia: "Ventajas respaldo local"
            },
            // Preguntas de VERDADERO/FALSO (21-35)
            {
                pregunta: "El respaldo local es suficiente para proteger ante incendios.",
                contexto: "Afirmación 21 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: false },
                    { texto: "Falso", correcta: true }
                ],
                explicacion: "FALSO. El respaldo local comparte los mismos riesgos físicos que el sistema principal.",
                referencia: "NIST recomienda nunca depender solo del respaldo local"
            },
            {
                pregunta: "El incremental requiere todos los incrementales previos para restaurar.",
                contexto: "Afirmación 22 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. Requiere el respaldo completo y toda la cadena de incrementales para la restauración.",
                referencia: "Característica del respaldo incremental"
            },
            {
                pregunta: "El RTO mide el tiempo máximo aceptable de inactividad.",
                contexto: "Afirmación 23 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. RTO es el tiempo máximo permitido para que un servicio vuelva a estar operativo.",
                referencia: "Definición RTO ISO 22301"
            },
            {
                pregunta: "El respaldo en la nube no necesita cifrado.",
                contexto: "Afirmación 24 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: false },
                    { texto: "Falso", correcta: true }
                ],
                explicacion: "FALSO. Según ISO 27018, los datos en la nube deben viajar y almacenarse cifrados.",
                referencia: "ISO 27018 requisito de cifrado"
            },
            {
                pregunta: "La etapa de validación se realiza después de restaurar.",
                contexto: "Afirmación 25 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. La validación verifica que la restauración fue exitosa y los sistemas funcionan correctamente.",
                referencia: "Proceso de validación post-restauración"
            },
            {
                pregunta: "Un NAS puede ser cifrado por ransomware si está en la misma red.",
                contexto: "Afirmación 26 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. Si los dispositivos de respaldo están conectados permanentemente a la red, pueden ser afectados por ransomware.",
                referencia: "Vulnerabilidad NAS en redes comprometidas"
            },
            {
                pregunta: "El respaldo completo genera archivos pequeños y rápidos.",
                contexto: "Afirmación 27 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: false },
                    { texto: "Falso", correcta: true }
                ],
                explicacion: "FALSO. El respaldo completo requiere gran cantidad de espacio y puede tomar bastante tiempo.",
                referencia: "Desventaja del respaldo completo"
            },
            {
                pregunta: "Un respaldo diferencial crece cada día hasta el próximo respaldo completo.",
                contexto: "Afirmación 28 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. A medida que pasan los días desde el full backup, el tamaño del diferencial crece.",
                referencia: "Característica del respaldo diferencial"
            },
            {
                pregunta: "La contención siempre ocurre antes del análisis del daño.",
                contexto: "Afirmación 29 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. Primero se contiene el problema, luego se analiza el daño.",
                referencia: "Orden del procedimiento de incidentes"
            },
            {
                pregunta: "La documentación del incidente es opcional.",
                contexto: "Afirmación 30 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: false },
                    { texto: "Falso", correcta: true }
                ],
                explicacion: "FALSO. Es exigida por ISO 27031 y es la base para mejorar políticas.",
                referencia: "ISO 27031 requerimiento de documentación"
            },
            {
                pregunta: "El RPO define cuántos datos pueden perderse.",
                contexto: "Afirmación 31 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. RPO es la cantidad máxima de datos que la organización está dispuesta a perder.",
                referencia: "Definición RPO"
            },
            {
                pregunta: "El respaldo off-site se almacena dentro del mismo edificio.",
                contexto: "Afirmación 32 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: false },
                    { texto: "Falso", correcta: true }
                ],
                explicacion: "FALSO. El respaldo off-site consiste en trasladar copias fuera de la sede principal.",
                referencia: "Definición respaldo off-site"
            },
            {
                pregunta: "OneDrive y Google Drive pueden funcionar como respaldo en la nube.",
                contexto: "Afirmación 33 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. Son servicios empresariales que ofrecen funcionalidades de respaldo en la nube.",
                referencia: "Servicios cloud de respaldo"
            },
            {
                pregunta: "Un CDP registra cambios casi en tiempo real.",
                contexto: "Afirmación 34 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. CDP registra y respalda cambios en tiempo real o en intervalos muy cortos.",
                referencia: "Característica CDP"
            },
            {
                pregunta: "La restauración se elige según el RPO.",
                contexto: "Afirmación 35 - Verdadero/Falso",
                opciones: [
                    { texto: "Verdadero", correcta: true },
                    { texto: "Falso", correcta: false }
                ],
                explicacion: "VERDADERO. Se selecciona el punto de restauración usando el RPO (máxima pérdida aceptable).",
                referencia: "Criterio de selección de restauración"
            },
            // Preguntas de relación (36-45 del PDF original)
            {
                pregunta: "¿Qué diferencia principal existe entre RPO y RTO?",
                contexto: "Pregunta 36 - Diferencias conceptuales",
                opciones: [
                    { texto: "RPO mide tiempo, RTO mide datos", correcta: false },
                    { texto: "RPO mide datos perdidos, RTO mide tiempo de recuperación", correcta: true },
                    { texto: "RPO es para hardware, RTO para software", correcta: false },
                    { texto: "RPO es obligatorio, RTO opcional", correcta: false }
                ],
                explicacion: "RPO (Recovery Point Objective) mide la cantidad máxima de datos que se pueden perder. RTO (Recovery Time Objective) mide el tiempo máximo para recuperar operaciones.",
                referencia: "Diferencias clave entre RPO y RTO"
            },
            {
                pregunta: "¿Por qué nunca debe dependerse solo del respaldo local?",
                contexto: "Pregunta 37 - Estrategias de protección",
                opciones: [
                    { texto: "Es muy costoso", correcta: false },
                    { texto: "Comparte riesgos físicos con el sistema principal", correcta: true },
                    { texto: "No permite restauraciones rápidas", correcta: false },
                    { texto: "Requiere Internet constante", correcta: false }
                ],
                explicacion: "Porque comparte los mismos riesgos físicos (incendios, inundaciones, robos) que el sistema principal.",
                referencia: "NIST recomienda estrategia 3-2-1"
            },
            {
                pregunta: "Menciona dos ventajas del respaldo en la nube:",
                contexto: "Pregunta 38 - Ventajas cloud",
                opciones: [
                    { texto: "Alto costo y dependencia de Internet", correcta: false },
                    { texto: "Escalabilidad automática y alta durabilidad", correcta: true },
                    { texto: "Restauración lenta y complejidad técnica", correcta: false },
                    { texto: "Requiere hardware especializado", correcta: false }
                ],
                explicacion: "Escalabilidad automática (no comprar hardware) y durabilidad extremadamente alta (ej: 11 nueves en Amazon S3).",
                referencia: "Ventajas según ISO 27018"
            },
            {
                pregunta: "¿Qué debe analizarse en la etapa de análisis del daño?",
                contexto: "Pregunta 39 - Proceso de análisis",
                opciones: [
                    { texto: "Solo los sistemas afectados", correcta: false },
                    { texto: "Sistemas comprometidos, datos afectados y respaldos utilizables", correcta: true },
                    { texto: "Solo el costo de la recuperación", correcta: false },
                    { texto: "Solo la causa raíz del problema", correcta: false }
                ],
                explicacion: "Se analiza qué sistemas están comprometidos, qué datos fueron afectados y si los respaldos son utilizables.",
                referencia: "Proceso de análisis de daños NIST"
            },
            {
                pregunta: "¿Por qué es importante verificar la integridad del respaldo antes de restaurar?",
                contexto: "Pregunta 40 - Verificación de respaldos",
                opciones: [
                    { texto: "Para ahorrar tiempo", correcta: false },
                    { texto: "Para evitar reintroducir errores o malware", correcta: true },
                    { texto: "Porque lo exige la ley", correcta: false },
                    { texto: "Para reducir costos", correcta: false }
                ],
                explicacion: "Para evitar reintroducir información corrupta, errores o malware en el sistema.",
                referencia: "Mejor práctica ISO 27002"
            },
            {
                pregunta: "¿Qué sería un ejemplo de respaldo off-site?",
                contexto: "Pregunta 41 - Ejemplos prácticos",
                opciones: [
                    { texto: "NAS en la sala de servidores", correcta: false },
                    { texto: "Discos en caja fuerte en otra ciudad", correcta: true },
                    { texto: "Google Drive en la misma oficina", correcta: false },
                    { texto: "RAID interno del servidor", correcta: false }
                ],
                explicacion: "Discos duros cifrados almacenados en una sede administrativa en otro distrito o ciudad.",
                referencia: "Ejemplo práctico off-site"
            },
            {
                pregunta: "¿Por qué un incremental puede complicar la restauración?",
                contexto: "Pregunta 42 - Consideraciones técnicas",
                opciones: [
                    { texto: "Porque ocupa mucho espacio", correcta: false },
                    { texto: "Requiere la cadena completa de incrementales y el full backup", correcta: true },
                    { texto: "No permite restauraciones parciales", correcta: false },
                    { texto: "Es muy costoso de implementar", correcta: false }
                ],
                explicacion: "Requiere el respaldo completo y toda la cadena de incrementales. Si uno está dañado, la restauración se compromete.",
                referencia: "Desventaja del respaldo incremental"
            },
            {
                pregunta: "¿Qué información debe registrarse al documentar un incidente?",
                contexto: "Pregunta 43 - Documentación",
                opciones: [
                    { texto: "Solo la fecha y hora", correcta: false },
                    { texto: "Fecha, causa raíz, sistemas afectados, impacto y lecciones aprendidas", correcta: true },
                    { texto: "Solo el nombre del responsable", correcta: false },
                    { texto: "Solo el costo económico", correcta: false }
                ],
                explicacion: "Debe incluir fecha/hora, causa raíz, sistemas afectados, impacto, tiempo de recuperación y lecciones aprendidas.",
                referencia: "ISO 27031 requisitos de documentación"
            },
            {
                pregunta: "¿Cuál es el rol del área académica en una recuperación de notas?",
                contexto: "Pregunta 44 - Roles específicos",
                opciones: [
                    { texto: "Realizar la restauración técnica", correcta: false },
                    { texto: "Validar que las notas recuperadas sean correctas", correcta: true },
                    { texto: "Documentar el incidente", correcta: false },
                    { texto: "Contener el problema", correcta: false }
                ],
                explicacion: "Verificar la integridad de la información restaurada y reportar cualquier dato incorrecto o faltante.",
                referencia: "Rol de usuarios responsables"
            },
            {
                pregunta: "¿Qué acción inicial corresponde a la contención ante ransomware?",
                contexto: "Pregunta 45 - Acciones inmediatas",
                opciones: [
                    { texto: "Formatear el equipo", correcta: false },
                    { texto: "Desconectar el equipo de la red", correcta: true },
                    { texto: "Pagar el rescate", correcta: false },
                    { texto: "Reiniciar el sistema", correcta: false }
                ],
                explicacion: "Desconectar el equipo comprometido de la red para evitar que otros equipos sean cifrados.",
                referencia: "Acción de contención inmediata"
            }
        ]
    }
};

// VARIABLES GLOBALES
let mazoActual = null;
let preguntasActuales = [];
let preguntaIndex = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let puntajeTotal = 0;
let preguntasTotales = 0;
let mazosCompletados = 0;
let sonidoActivado = true;
let tiempoInicioQuiz = null;

// ELEMENTOS DEL DOM
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
const referenciaTexto = document.getElementById('referencia-texto');
const botonSiguiente = document.getElementById('boton-siguiente');
const botonFinalizar = document.getElementById('boton-finalizar');
const contadorPregunta = document.getElementById('contador-pregunta');
const contadorPuntos = document.getElementById('contador-puntos');
const barraProgreso = document.getElementById('barra-progreso');
const progresoTexto = document.getElementById('progreso-texto');
const categoriaPregunta = document.getElementById('categoria-pregunta');
const dificultadPregunta = document.getElementById('dificultad-pregunta');

// SONIDOS
const sonidoCorrecto = document.getElementById('sonido-correcto');
const sonidoIncorrecto = document.getElementById('sonido-incorrecto');
const sonidoCompletado = document.getElementById('sonido-completado');

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    inicializarAplicacion();
});

function inicializarAplicacion() {
    cargarMazos();
    cargarProgreso();
    configurarSonidos();
    configurarAtajosTeclado();
}

// CONFIGURACIÓN DE SONIDOS
function configurarSonidos() {
    // Intentar cargar sonidos
    try {
        sonidoCorrecto.load();
        sonidoIncorrecto.load();
        sonidoCompletado.load();
    } catch (e) {
        console.log("Sonidos no disponibles, continuando sin audio");
        sonidoActivado = false;
        document.getElementById('boton-sonido').innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

function toggleSonido() {
    sonidoActivado = !sonidoActivado;
    const boton = document.getElementById('boton-sonido');
    if (sonidoActivado) {
        boton.innerHTML = '<i class="fas fa-volume-up"></i>';
        boton.style.color = '#4f46e5';
    } else {
        boton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        boton.style.color = '#94a3b8';
    }
}

// CARGAR MAZOS EN PANTALLA DE INICIO
function cargarMazos() {
    contenedorMazos.innerHTML = '';
    
    Object.entries(mazos).forEach(([id, mazo], index) => {
        const preguntasCompletadas = localStorage.getItem(`mazo_${id}_completado`) || 0;
        const mejorPuntaje = localStorage.getItem(`mazo_${id}_puntaje`) || 0;
        
        const card = document.createElement('div');
        card.className = 'mazo-card';
        card.style.animationDelay = `${index * 0.2}s`;
        card.onclick = () => iniciarMazo(id);
        
        card.innerHTML = `
            <div class="mazo-imagen" style="background: ${mazo.color}">
                <i class="${mazo.icono}"></i>
            </div>
            <div class="mazo-texto">${mazo.nombre}</div>
            <div class="mazo-info">${mazo.descripcion}</div>
            <div class="mazo-estadisticas">
                <div class="mazo-estadistica">
                    <span class="mazo-estadistica-valor">${mazo.preguntas.length}</span>
                    <span class="mazo-estadistica-label">Preguntas</span>
                </div>
                <div class="mazo-estadistica">
                    <span class="mazo-estadistica-valor">${preguntasCompletadas}</span>
                    <span class="mazo-estadistica-label">Completadas</span>
                </div>
                <div class="mazo-estadistica">
                    <span class="mazo-estadistica-valor">${mejorPuntaje}%</span>
                    <span class="mazo-estadistica-label">Mejor</span>
                </div>
            </div>
        `;
        
        contenedorMazos.appendChild(card);
    });
}

// INICIAR UN MAZO
function iniciarMazo(mazoId) {
    mazoActual = mazoId;
    preguntasActuales = [...mazos[mazoActual].preguntas];
    
    // Mezclar preguntas aleatoriamente
    preguntasActuales = mezclarArray(preguntasActuales);
    
    // Inicializar variables del quiz
    preguntaIndex = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    tiempoInicioQuiz = new Date();
    
    // Cambiar a pantalla de quiz
    pantallaInicio.classList.remove('activa');
    pantallaQuiz.classList.add('activa');
    pantallaResultados.classList.remove('activa');
    
    // Actualizar categoría
    categoriaPregunta.textContent = mazos[mazoActual].nombre;
    
    // Mostrar primera pregunta
    mostrarPregunta();
}

// MEZCLAR ARRAY ALEATORIAMENTE (Fisher-Yates)
function mezclarArray(array) {
    const nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
}

// MOSTRAR PREGUNTA ACTUAL
function mostrarPregunta() {
    if (preguntaIndex >= preguntasActuales.length) {
        finalizarQuiz();
        return;
    }
    
    const pregunta = preguntasActuales[preguntaIndex];
    
    // Actualizar contadores
    contadorPregunta.textContent = `Pregunta ${preguntaIndex + 1}/${preguntasActuales.length}`;
    contadorPuntos.textContent = `Puntos: ${puntajeTotal}`;
    
    // Actualizar progreso
    const progreso = ((preguntaIndex) / preguntasActuales.length) * 100;
    barraProgreso.style.width = `${progreso}%`;
    progresoTexto.textContent = `${Math.round(progreso)}% completado`;
    
    // Configurar dificultad visual
    const dificultad = determinarDificultad(pregunta);
    dificultadPregunta.textContent = dificultad.icono + ' ' + dificultad.texto;
    dificultadPregunta.style.color = dificultad.color;
    
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
        botonOpcion.setAttribute('data-index', String.fromCharCode(65 + index)); // A, B, C, D
        botonOpcion.innerHTML = `<span>${opcion.texto}</span>`;
        botonOpcion.onclick = () => seleccionarOpcion(opcion.correcta, botonOpcion, pregunta);
        
        contenedorOpciones.appendChild(botonOpcion);
    });
}

// DETERMINAR DIFICULTAD DE LA PREGUNTA
function determinarDificultad(pregunta) {
    const longitud = pregunta.pregunta.length;
    const opcionesComplejas = pregunta.opciones.some(op => op.texto.length > 100);
    
    if (longitud > 150 || opcionesComplejas) {
        return { 
            icono: '●●●', 
            texto: 'Difícil', 
            color: '#ef4444' 
        };
    } else if (longitud > 80) {
        return { 
            icono: '●●○', 
            texto: 'Media', 
            color: '#f59e0b' 
        };
    } else {
        return { 
            icono: '●○○', 
            texto: 'Fácil', 
            color: '#10b981' 
        };
    }
}

// MANEJAR SELECCIÓN DE OPCIÓN
function seleccionarOpcion(esCorrecta, botonSeleccionado, pregunta) {
    // Deshabilitar todos los botones
    const botones = document.querySelectorAll('.opcion');
    botones.forEach(boton => {
        boton.disabled = true;
        
        // Encontrar y marcar la opción correcta
        const esOpcionCorrecta = pregunta.opciones.find(op => op.correcta).texto === boton.textContent.trim();
        if (esOpcionCorrecta) {
            boton.classList.add('correcta');
        }
        
        // Marcar la seleccionada como incorrecta si es incorrecta
        if (boton === botonSeleccionado && !esCorrecta) {
            boton.classList.add('incorrecta');
        }
    });
    
    // Reproducir sonido
    if (sonidoActivado) {
        if (esCorrecta) {
            sonidoCorrecto.currentTime = 0;
            sonidoCorrecto.play().catch(e => console.log("Error reproduciendo sonido"));
        } else {
            sonidoIncorrecto.currentTime = 0;
            sonidoIncorrecto.play().catch(e => console.log("Error reproduciendo sonido"));
        }
    }
    
    // Mostrar resultado
    if (esCorrecta) {
        resultadoTexto.textContent = '¡Correcto! 🎯';
        resultadoTexto.className = 'resultado correcto';
        respuestasCorrectas++;
        puntajeTotal += 10;
        preguntasTotales++;
        
        // Efecto visual para acierto
        crearConfetti();
        mostrarNotificacion('¡Bien hecho! +10 puntos', 'success');
    } else {
        resultadoTexto.textContent = 'Incorrecto 📝';
        resultadoTexto.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        preguntasTotales++;
        
        mostrarNotificacion('Estudia la explicación', 'warning');
    }
    
    // Mostrar explicación
    explicacionTexto.textContent = pregunta.explicacion;
    referenciaTexto.textContent = `📚 Referencia: ${pregunta.referencia}`;
    explicacionContainer.style.display = 'block';
    
    // Actualizar progreso local
    actualizarProgreso();
    
    // Mostrar botón siguiente o finalizar
    if (preguntaIndex < preguntasActuales.length - 1) {
        botonSiguiente.style.display = 'block';
        // Auto-avanzar después de 3 segundos
        setTimeout(() => {
            if (botonSiguiente.style.display === 'block') {
                siguientePregunta();
            }
        }, 3000);
    } else {
        botonFinalizar.style.display = 'block';
    }
}

// SIGUIENTE PREGUNTA
function siguientePregunta() {
    preguntaIndex++;
    mostrarPregunta();
}

// FINALIZAR QUIZ
function finalizarQuiz() {
    const tiempoFinQuiz = new Date();
    const tiempoTranscurrido = Math.round((tiempoFinQuiz - tiempoInicioQuiz) / 1000 / 60); // en minutos
    
    // Reproducir sonido de completado
    if (sonidoActivado) {
        sonidoCompletado.currentTime = 0;
        sonidoCompletado.play().catch(e => console.log("Error reproduciendo sonido"));
    }
    
    pantallaQuiz.classList.remove('activa');
    pantallaResultados.classList.add('activa');
    
    const porcentaje = Math.round((respuestasCorrectas / preguntasActuales.length) * 100);
    const puntosGanados = respuestasCorrectas * 10;
    
    // Actualizar título
    document.getElementById('subtitulo-resultados').textContent = 
        `Completaste "${mazos[mazoActual].nombre}" en ${tiempoTranscurrido} minutos`;
    
    // Mostrar resultados detallados
    const resultadosDetalles = document.getElementById('resultados-detalles');
    resultadosDetalles.innerHTML = `
        <h3 style="color: #4f46e5; margin-bottom: 20px; text-align: center;">
            <i class="fas fa-chart-bar"></i> Análisis de Resultados
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
            <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                <div style="color: #10b981; font-weight: bold; font-size: 0.9rem;">RESPUESTAS CORRECTAS</div>
                <div style="color: #f8fafc; font-size: 2.5rem; font-weight: 800; text-align: center;">${respuestasCorrectas}</div>
            </div>
            <div style="background: rgba(239, 68, 68, 0.1); padding: 15px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
                <div style="color: #ef4444; font-weight: bold; font-size: 0.9rem;">RESPUESTAS INCORRECTAS</div>
                <div style="color: #f8fafc; font-size: 2.5rem; font-weight: 800; text-align: center;">${respuestasIncorrectas}</div>
            </div>
        </div>
        <div style="background: rgba(79, 70, 229, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(79, 70, 229, 0.3); margin-bottom: 20px;">
            <div style="color: #4f46e5; font-weight: bold; font-size: 1rem;">PRECISIÓN TOTAL</div>
            <div style="color: #f8fafc; font-size: 3rem; font-weight: 800; text-align: center;">${porcentaje}%</div>
            <div style="width: 100%; height: 10px; background: rgba(255, 255, 255, 0.1); border-radius: 5px; margin-top: 15px; overflow: hidden;">
                <div style="width: ${porcentaje}%; height: 100%; background: linear-gradient(90deg, #4f46e5, #7c3aed); border-radius: 5px;"></div>
            </div>
        </div>
        <p style="color: #94a3b8; text-align: center; margin-top: 20px; font-size: 0.9rem;">
            <i class="fas fa-clock"></i> Tiempo total: ${tiempoTranscurrido} minutos
        </p>
    `;
    
    // Actualizar estadísticas
    document.getElementById('estadistica-correctas').textContent = respuestasCorrectas;
    document.getElementById('estadistica-incorrectas').textContent = respuestasIncorrectas;
    document.getElementById('estadistica-precision').textContent = `${porcentaje}%`;
    document.getElementById('estadistica-puntos').textContent = puntosGanados;
    
    // Mostrar recomendaciones
    const recomendaciones = document.getElementById('recomendaciones-texto');
    if (porcentaje >= 90) {
        recomendaciones.textContent = "¡Excelente desempeño! Dominas completamente este tema. Considera avanzar a mazos más desafiantes o ayudar a otros estudiantes.";
    } else if (porcentaje >= 70) {
        recomendaciones.textContent = "Buen trabajo. Tienes un buen entendimiento del tema. Revisa las preguntas incorrectas y repite el mazo para reforzar tu conocimiento.";
    } else if (porcentaje >= 50) {
        recomendaciones.textContent = "Progreso aceptable. Necesitas estudiar más los conceptos. Te recomendamos repasar el material teórico antes de intentar nuevamente.";
    } else {
        recomendaciones.textContent = "Necesitas más estudio. Revisa detenidamente las explicaciones de cada pregunta y estudia el material teórico antes de intentar nuevamente.";
    }
    
    // Guardar progreso del mazo
    guardarProgresoMazo(porcentaje);
    
    // Efecto de confetti si el puntaje es alto
    if (porcentaje >= 80) {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => crearConfetti(), i * 50);
        }
        mostrarNotificacion('¡Excelente puntaje! 🎉', 'success');
    }
}

// GUARDAR PROGRESO DEL MAZO
function guardarProgresoMazo(porcentaje) {
    // Guardar que el mazo fue completado
    const mazosCompletadosPrevios = parseInt(localStorage.getItem(`mazo_${mazoActual}_completado`) || 0);
    localStorage.setItem(`mazo_${mazoActual}_completado`, mazosCompletadosPrevios + 1);
    
    // Guardar mejor puntaje
    const mejorPuntajePrev = parseInt(localStorage.getItem(`mazo_${mazoActual}_puntaje`) || 0);
    if (porcentaje > mejorPuntajePrev) {
        localStorage.setItem(`mazo_${mazoActual}_puntaje`, porcentaje);
    }
    
    // Actualizar estadísticas generales
    const preguntasTotalesPrev = parseInt(localStorage.getItem('preguntasTotales') || 0);
    const puntajeTotalPrev = parseInt(localStorage.getItem('puntajeTotal') || 0);
    
    localStorage.setItem('preguntasTotales', preguntasTotalesPrev + preguntasActuales.length);
    localStorage.setItem('puntajeTotal', puntajeTotalPrev + puntajeTotal);
    
    actualizarProgreso();
}

// VOLVER AL INICIO
function volverInicio() {
    pantallaInicio.classList.add('activa');
    pantallaQuiz.classList.remove('activa');
    pantallaResultados.classList.remove('activa');
    cargarProgreso();
    cargarMazos(); // Recargar estadísticas actualizadas
}

// REPETIR MAZO
function repetirMazo() {
    if (mazoActual) {
        iniciarMazo(mazoActual);
    }
}

// SIGUIENTE MAZO
function siguienteMazo() {
    const mazoIds = Object.keys(mazos);
    const currentIndex = mazoIds.indexOf(mazoActual);
    const nextIndex = (currentIndex + 1) % mazoIds.length;
    
    iniciarMazo(mazoIds[nextIndex]);
}

// CARGAR PROGRESO
function cargarProgreso() {
    const preguntasTotales = localStorage.getItem('preguntasTotales') || 0;
    const puntajeTotal = localStorage.getItem('puntajeTotal') || 0;
    const mazosCompletados = Object.keys(mazos).reduce((total, id) => {
        return total + (parseInt(localStorage.getItem(`mazo_${id}_completado`) || 0) > 0 ? 1 : 0);
    }, 0);
    
    const precision = preguntasTotales > 0 ? 
        Math.round((puntajeTotal / (preguntasTotales * 10)) * 100) : 0;
    
    document.getElementById('preguntas-totales').textContent = preguntasTotales;
    document.getElementById('precision-total').textContent = `${precision}%`;
    document.getElementById('mazos-completados').textContent = mazosCompletados;
    document.getElementById('puntos-totales').textContent = puntajeTotal;
}

// ACTUALIZAR PROGRESO EN LOCALSTORAGE
function actualizarProgreso() {
    const precision = preguntasTotales > 0 ? 
        Math.round((puntajeTotal / (preguntasTotales * 10)) * 100) : 0;
    
    localStorage.setItem('preguntasTotales', preguntasTotales);
    localStorage.setItem('puntajeTotal', puntajeTotal);
    
    // Actualizar pantalla
    document.getElementById('preguntas-totales').textContent = preguntasTotales;
    document.getElementById('precision-total').textContent = `${precision}%`;
    document.getElementById('puntos-totales').textContent = puntajeTotal;
}

// CREAR CONFETTI
function crearConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Posición aleatoria
    confetti.style.left = Math.random() * 100 + 'vw';
    
    // Color aleatorio
    const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#10b981', '#f59e0b', '#0ea5e9'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Tamaño aleatorio
    const size = Math.random() * 15 + 5;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    // Rotación aleatoria
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    confettiContainer.appendChild(confetti);
    
    // Remover después de la animación
    setTimeout(() => {
        confetti.remove();
    }, 2000);
}

// MOSTRAR NOTIFICACIÓN
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    
    const icono = tipo === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
    const color = tipo === 'success' ? '#10b981' : '#f59e0b';
    
    notificacion.innerHTML = `
        <i class="fas ${icono}" style="color: ${color};"></i>
        <span>${mensaje}</span>
    `;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// CONFIGURAR ATAJOS DE TECLADO
function configurarAtajosTeclado() {
    document.addEventListener('keydown', function(event) {
        // Atajos numéricos para opciones (1-4)
        if (event.key >= '1' && event.key <= '4' && pantallaQuiz.classList.contains('activa')) {
            const index = parseInt(event.key) - 1;
            const botones = document.querySelectorAll('.opcion');
            if (botones[index] && !botones[index].disabled) {
                botones[index].click();
                event.preventDefault();
            }
        }
        
        // Tecla Enter para siguiente pregunta
        if (event.key === 'Enter' && botonSiguiente.style.display === 'block') {
            botonSiguiente.click();
            event.preventDefault();
        }
        
        // Tecla Espacio para siguiente pregunta
        if (event.key === ' ' && botonSiguiente.style.display === 'block') {
            botonSiguiente.click();
            event.preventDefault();
        }
        
        // Tecla Escape para volver al menú
        if (event.key === 'Escape') {
            if (pantallaQuiz.classList.contains('activa') || pantallaResultados.classList.contains('activa')) {
                volverInicio();
                event.preventDefault();
            }
        }
        
        // Teclas de flecha para navegación
        if (event.key === 'ArrowRight' && botonSiguiente.style.display === 'block') {
            botonSiguiente.click();
            event.preventDefault();
        }
        
        if (event.key === 'ArrowLeft' && preguntaIndex > 0) {
            // Podría implementarse navegación hacia atrás si se desea
            event.preventDefault();
        }
    });
}

// FUNCIÓN PARA RESETEAR PROGRESO (útil para pruebas)
function resetearProgreso() {
    if (confirm('¿Estás seguro de que quieres resetear todo tu progreso?')) {
        localStorage.clear();
        cargarProgreso();
        cargarMazos();
        mostrarNotificacion('Progreso reseteado correctamente', 'warning');
    }
}

// Añadir botón de reset en consola para desarrollo
console.log('Para resetear progreso, ejecuta: resetearProgreso()');

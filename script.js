// ============================================================================
// CONFIGURACIÓN DE URLs DE IMÁGENES
// ============================================================================

const configImagenes = {
    contenedores: {
        'contenedor1': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'contenedor2': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'contenedor3': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'contenedor4': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'contenedor5': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop'
    },
    subcontenedores: {
        'sub1_1': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'sub1_2': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'sub1_3': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'sub2_1': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'sub2_2': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop',
        'sub2_3': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'sub3_1': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'sub3_2': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'sub3_3': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'sub4_1': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop',
        'sub4_2': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'sub4_3': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'sub5_1': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'sub5_2': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'sub5_3': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop'
    },
    mazos: {
        'mazo1': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'mazo2': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'mazo3': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'mazo4': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'mazo5': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop'
    }
};

// ============================================================================
// ESTRUCTURA PRINCIPAL - PORTUGUÉS
// ============================================================================

const estructura = {
    'contenedor1': {
        nombre: 'Saudações Básicas',
        subcontenedores: {
            'sub1_1': { 
                nombre: 'Cumprimentos Diários', 
                mazos: generarMazosEspecificos('sub1_1') 
            },
            'sub1_2': { 
                nombre: 'Apresentações', 
                mazos: generarMazosEspecificos('sub1_2') 
            },
            'sub1_3': { 
                nombre: 'Despedidas', 
                mazos: generarMazosEspecificos('sub1_3') 
            }
        }
    },
    'contenedor2': {
        nome: 'Comida e Restaurante',
        subcontenedores: {
            'sub2_1': { 
                nome: 'Pratos Principais', 
                mazos: generarMazosEspecificos('sub2_1') 
            },
            'sub2_2': { 
                nome: 'Bebidas', 
                mazos: generarMazosEspecificos('sub2_2') 
            },
            'sub2_3': { 
                nome: 'Sobremesas', 
                mazos: generarMazosEspecificos('sub2_3') 
            }
        }
    },
    'contenedor3': {
        nome: 'Viagens e Transporte',
        subcontenedores: {
            'sub3_1': { 
                nome: 'Meios de Transporte', 
                mazos: generarMazosEspecificos('sub3_1') 
            },
            'sub3_2': { 
                nome: 'Direções', 
                mazos: generarMazosEspecificos('sub3_2') 
            },
            'sub3_3': { 
                nome: 'Hotelaria', 
                mazos: generarMazosEspecificos('sub3_3') 
            }
        }
    },
    'contenedor4': {
        nome: 'Trabalho e Negócios',
        subcontenedores: {
            'sub4_1': { 
                nome: 'Profissões', 
                mazos: generarMazosEspecificos('sub4_1') 
            },
            'sub4_2': { 
                nome: 'Escritório', 
                mazos: generarMazosEspecificos('sub4_2') 
            },
            'sub4_3': { 
                nome: 'Reuniões', 
                mazos: generarMazosEspecificos('sub4_3') 
            }
        }
    },
    'contenedor5': {
        nome: 'Casa e Família',
        subcontenedores: {
            'sub5_1': { 
                nome: 'Família', 
                mazos: generarMazosEspecificos('sub5_1') 
            },
            'sub5_2': { 
                nome: 'Casa', 
                mazos: generarMazosEspecificos('sub5_2') 
            },
            'sub5_3': { 
                nome: 'Atividades Domésticas', 
                mazos: generarMazosEspecificos('sub5_3') 
            }
        }
    }
};

// ============================================================================
// BASE DE DATOS DE PALAVRAS EM PORTUGUÊS
// ============================================================================

function generarMazosEspecificos(subcontenedorId) {
    const mazos = {};
    
    for (let i = 1; i <= 5; i++) {
        const mazoId = `mazo${i}`;
        mazos[mazoId] = {
            nome: `Mazo ${i}`,
            palavras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    
    return mazos;
}

function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    const palavrasDatabase = {
        // SAUDAÇÕES BÁSICAS
        'sub1_1': {
            1: [
                { portugues: 'Bom dia', opciones: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola'], resposta: 0 },
                { portugues: 'Boa tarde', opciones: ['Buenas tardes', 'Buenos días', 'Buenas noches', 'Adiós'], resposta: 0 },
                { portugues: 'Boa noite', opciones: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'], resposta: 0 },
                { portugues: 'Olá', opciones: ['Hola', 'Adiós', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Oi', opciones: ['Hola', 'Adiós', 'Sí', 'No'], resposta: 0 },
                { portugues: 'Tudo bem?', opciones: ['¿Todo bien?', '¿Cómo estás?', '¿Qué tal?', '¿Qué pasa?'], resposta: 0 },
                { portugues: 'Como vai?', opciones: ['¿Cómo vas?', '¿Qué tal?', '¿Todo bien?', '¿Cómo estás?'], resposta: 0 },
                { portugues: 'Estou bem', opciones: ['Estoy bien', 'Estoy mal', 'Estoy cansado', 'Estoy feliz'], resposta: 0 },
                { portugues: 'Obrigado', opciones: ['Gracias', 'Por favor', 'De nada', 'Lo siento'], resposta: 0 },
                { portugues: 'De nada', opciones: ['De nada', 'Gracias', 'Por favor', 'Perdón'], resposta: 0 }
            ],
            2: [
                { portugues: 'Por favor', opciones: ['Por favor', 'Gracias', 'De nada', 'Lo siento'], resposta: 0 },
                { portugues: 'Com licença', opciones: ['Con permiso', 'Perdón', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Desculpe', opciones: ['Disculpe', 'Perdón', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Perdão', opciones: ['Perdón', 'Gracias', 'Por favor', 'De nada'], resposta: 0 },
                { portugues: 'Até logo', opciones: ['Hasta luego', 'Hola', 'Adiós', 'Buenos días'], resposta: 0 },
                { portugues: 'Até amanhã', opciones: ['Hasta mañana', 'Hasta luego', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Tchau', opciones: ['Chao', 'Hola', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Adeus', opciones: ['Adiós', 'Hola', 'Hasta luego', 'Buenos días'], resposta: 0 },
                { portugues: 'Bem-vindo', opciones: ['Bienvenido', 'Adiós', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Prazer', opciones: ['Mucho gusto', 'Gracias', 'Por favor', 'De nada'], resposta: 0 }
            ],
            3: [
                { portugues: 'Como você está?', opciones: ['¿Cómo estás?', '¿Qué tal?', '¿Todo bien?', '¿Qué pasa?'], resposta: 0 },
                { portugues: 'Qual é o seu nome?', opciones: ['¿Cuál es tu nombre?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
                { portugues: 'Meu nome é...', opciones: ['Mi nombre es...', 'Yo soy...', 'Me llamo...', 'Tengo...'], resposta: 0 },
                { portugues: 'Prazer em conhecê-lo', opciones: ['Encantado de conocerte', 'Mucho gusto', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'De onde você é?', opciones: ['¿De dónde eres?', '¿Cómo estás?', '¿Qué tal?', '¿Cuántos años tienes?'], resposta: 0 },
                { portugues: 'Eu sou de...', opciones: ['Yo soy de...', 'Yo tengo...', 'Yo quiero...', 'Yo voy...'], resposta: 0 },
                { portugues: 'Quantos anos você tem?', opciones: ['¿Cuántos años tienes?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
                { portugues: 'Eu tenho ... anos', opciones: ['Yo tengo ... años', 'Yo soy ... años', 'Yo tengo ... hermanos', 'Yo quiero ... años'], resposta: 0 },
                { portugues: 'O que você faz?', opciones: ['¿Qué haces?', '¿Qué quieres?', '¿Qué tienes?', '¿Qué necesitas?'], resposta: 0 },
                { portugues: 'Eu sou estudante', opciones: ['Yo soy estudiante', 'Yo soy profesor', 'Yo soy médico', 'Yo soy ingeniero'], resposta: 0 }
            ],
            4: [
                { portugues: 'Faz favor', opciones: ['Por favor', 'Gracias', 'De nada', 'Perdón'], resposta: 0 },
                { portugues: 'Muito prazer', opciones: ['Mucho gusto', 'Encantado', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Como tem passado?', opciones: ['¿Cómo te ha ido?', '¿Qué tal?', '¿Cómo estás?', '¿Todo bien?'], resposta: 0 },
                { portugues: 'Tudo em ordem?', opciones: ['¿Todo en orden?', '¿Qué tal?', '¿Cómo estás?', '¿Qué pasa?'], resposta: 0 },
                { portugues: 'Que bom te ver', opciones: ['Qué bueno verte', 'Hola', 'Adiós', 'Gracias'], resposta: 0 },
                { portugues: 'Há quanto tempo!', opciones: ['¡Cuánto tiempo!', 'Hola', 'Adiós', 'Gracias'], resposta: 0 },
                { portugues: 'Como tem estado?', opciones: ['¿Cómo has estado?', '¿Qué tal?', '¿Cómo estás?', '¿Todo bien?'], resposta: 0 },
                { portugues: 'Vai tudo bem?', opciones: ['¿Va todo bien?', '¿Qué tal?', '¿Cómo estás?', '¿Qué pasa?'], resposta: 0 },
                { portugues: 'Estou ótimo', opciones: ['Estoy genial', 'Estoy bien', 'Estoy mal', 'Estoy regular'], resposta: 0 },
                { portugues: 'Mais ou menos', opciones: ['Más o menos', 'Muy bien', 'Mal', 'Regular'], resposta: 0 }
            ],
            5: [
                { portugues: 'Adeus e boa sorte', opciones: ['Adiós y buena suerte', 'Hola y gracias', 'Hasta luego', 'Buenos días'], resposta: 0 },
                { portugues: 'Tenha um bom dia', opciones: ['Que tengas un buen día', 'Buenos días', 'Buenas tardes', 'Buenas noches'], resposta: 0 },
                { portugues: 'Boa noite e durma bem', opciones: ['Buenas noches y duerme bien', 'Buenos días', 'Buenas tardes', 'Hola'], resposta: 0 },
                { portugues: 'Até a próxima', opciones: ['Hasta la próxima', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Nos vemos', opciones: ['Nos vemos', 'Hola', 'Adiós', 'Gracias'], resposta: 0 },
                { portugues: 'Foi um prazer', opciones: ['Fue un placer', 'Mucho gusto', 'Encantado', 'Hola'], resposta: 0 },
                { portugues: 'Cuide-se', opciones: ['Cuídate', 'Adiós', 'Hola', 'Gracias'], resposta: 0 },
                { portugues: 'Até breve', opciones: ['Hasta pronto', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Boa viagem', opciones: ['Buen viaje', 'Buenos días', 'Buenas tardes', 'Buenas noches'], resposta: 0 },
                { portugues: 'Até mais tarde', opciones: ['Hasta más tarde', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 }
            ]
        },
        'sub1_2': {
            1: [
                { portugues: 'Prazer em conhecê-lo', opciones: ['Encantado de conocerte', 'Mucho gusto', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Muito prazer', opciones: ['Mucho gusto', 'Encantado', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Este é o meu amigo', opciones: ['Este es mi amigo', 'Este es mi hermano', 'Este es mi padre', 'Este es mi jefe'], resposta: 0 },
                { portugues: 'Gostaria de apresentar...', opciones: ['Me gustaría presentar...', 'Quiero presentar...', 'Este es...', 'Te presento...'], resposta: 0 },
                { portugues: 'Como se chama?', opciones: ['¿Cómo te llamas?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
                { portugues: 'Me chamo...', opciones: ['Me llamo...', 'Yo soy...', 'Mi nombre es...', 'Tengo...'], resposta: 0 },
                { portugues: 'É um prazer', opciones: ['Es un placer', 'Mucho gusto', 'Encantado', 'Hola'], resposta: 0 },
                { portugues: 'Igualmente', opciones: ['Igualmente', 'También', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Permita-me apresentar-me', opciones: ['Permítame presentarme', 'Me presento', 'Soy...', 'Hola'], resposta: 0 },
                { portugues: 'Sou...', opciones: ['Soy...', 'Tengo...', 'Quiero...', 'Voy...'], resposta: 0 }
            ],
            2: [
                { portugues: 'De onde você é?', opciones: ['¿De dónde eres?', '¿Cómo estás?', '¿Qué tal?', '¿Cuántos años tienes?'], resposta: 0 },
                { portugues: 'Eu sou do Brasil', opciones: ['Soy de Brasil', 'Soy de México', 'Soy de España', 'Soy de Argentina'], resposta: 0 },
                { portugues: 'E você?', opciones: ['¿Y tú?', '¿Y usted?', '¿Y él?', '¿Y ella?'], resposta: 0 },
                { portugues: 'O que você faz?', opciones: ['¿Qué haces?', '¿Qué quieres?', '¿Qué tienes?', '¿Qué necesitas?'], resposta: 0 },
                { portugues: 'Eu sou estudante', opciones: ['Soy estudiante', 'Soy profesor', 'Soy médico', 'Soy ingeniero'], resposta: 0 },
                { portugues: 'Eu trabalho como...', opciones: ['Trabajo como...', 'Soy...', 'Estudio...', 'Vivo...'], resposta: 0 },
                { portugues: 'Qual é a sua profissão?', opciones: ['¿Cuál es tu profesión?', '¿Qué haces?', '¿Dónde trabajas?', '¿Qué estudias?'], resposta: 0 },
                { portugues: 'Eu sou engenheiro', opciones: ['Soy ingeniero', 'Soy médico', 'Soy profesor', 'Soy estudiante'], resposta: 0 },
                { portugues: 'Há quanto tempo você está aqui?', opciones: ['¿Cuánto tiempo llevas aquí?', '¿Desde cuándo estás aquí?', '¿Cuándo llegaste?', '¿Dónde vives?'], resposta: 0 },
                { portugues: 'Estou aqui há uma semana', opciones: ['Llevo una semana aquí', 'Llegué hace una semana', 'Vivo aquí una semana', 'Estudio aquí una semana'], resposta: 0 }
            ],
            3: [
                { portugues: 'Você fala português?', opciones: ['¿Hablas portugués?', '¿Hablas español?', '¿Hablas inglés?', '¿Hablas francés?'], resposta: 0 },
                { portugues: 'Falo um pouco', opciones: ['Hablo un poco', 'Hablo mucho', 'No hablo', 'Hablo bien'], resposta: 0 },
                { portugues: 'Estou aprendendo', opciones: ['Estoy aprendiendo', 'Estoy enseñando', 'Estoy trabajando', 'Estoy estudiando'], resposta: 0 },
                { portugues: 'Como se diz... em português?', opciones: ['¿Cómo se dice... en portugués?', '¿Qué significa...?', '¿Cómo se pronuncia...?', '¿Qué es...?'], resposta: 0 },
                { portugues: 'O que significa...?', opciones: ['¿Qué significa...?', '¿Cómo se dice...?', '¿Qué es...?', '¿Dónde está...?'], resposta: 0 },
                { portugues: 'Pode repetir?', opciones: ['¿Puede repetir?', '¿Puede hablar más despacio?', 'No entiendo', '¿Cómo?'], resposta: 0 },
                { portugues: 'Fale mais devagar', opciones: ['Hable más despacio', 'Hable más rápido', 'Hable más alto', 'Repita por favor'], resposta: 0 },
                { portugues: 'Não entendi', opciones: ['No entendí', 'No sé', 'No conozco', 'No recuerdo'], resposta: 0 },
                { portugues: 'Pode explicar?', opciones: ['¿Puede explicar?', '¿Puede ayudar?', '¿Puede mostrar?', '¿Puede repetir?'], resposta: 0 },
                { portugues: 'Compreendo', opciones: ['Comprendo', 'Entiendo', 'Sé', 'Conozco'], resposta: 0 }
            ],
            4: [
                { portugues: 'Você é casado?', opciones: ['¿Estás casado?', '¿Tienes hijos?', '¿Dónde vives?', '¿Qué edad tienes?'], resposta: 0 },
                { portugues: 'Sou solteiro', opciones: ['Soy soltero', 'Soy casado', 'Soy divorciado', 'Soy viudo'], resposta: 0 },
                { portugues: 'Tenho filhos', opciones: ['Tengo hijos', 'Tengo hermanos', 'Tengo padres', 'Tengo amigos'], resposta: 0 },
                { portugues: 'Moro com minha família', opciones: ['Vivo con mi familia', 'Vivo solo', 'Vivo con amigos', 'Vivo con mi pareja'], resposta: 0 },
                { portugues: 'Qual é o seu estado civil?', opciones: ['¿Cuál es tu estado civil?', '¿Estás casado?', '¿Tienes novia?', '¿Tienes hijos?'], resposta: 0 },
                { portugues: 'Sou divorciado', opciones: ['Soy divorciado', 'Soy casado', 'Soy soltero', 'Soy viudo'], resposta: 0 },
                { portugues: 'Tenho dois filhos', opciones: ['Tengo dos hijos', 'Tengo un hijo', 'Tengo tres hijos', 'No tengo hijos'], resposta: 0 },
                { portugues: 'Minha esposa se chama...', opciones: ['Mi esposa se llama...', 'Mi marido se llama...', 'Mi novia se llama...', 'Mi amigo se llama...'], resposta: 0 },
                { portugues: 'Estamos juntos há... anos', opciones: ['Llevamos juntos... años', 'Nos casamos hace... años', 'Nos conocimos hace... años', 'Trabajamos juntos... años'], resposta: 0 },
                { portugues: 'Somos casados', opciones: ['Estamos casados', 'Somos novios', 'Somos amigos', 'Somos compañeros'], resposta: 0 }
            ],
            5: [
                { portugues: 'O que você gosta de fazer?', opciones: ['¿Qué te gusta hacer?', '¿Qué quieres hacer?', '¿Qué puedes hacer?', '¿Qué sabes hacer?'], resposta: 0 },
                { portugues: 'Gosto de ler', opciones: ['Me gusta leer', 'Me gusta escribir', 'Me gusta estudiar', 'Me gusta trabajar'], resposta: 0 },
                { portugues: 'Meu hobby é...', opciones: ['Mi hobby es...', 'Mi trabajo es...', 'Mi estudio es...', 'Mi familia es...'], resposta: 0 },
                { portugues: 'Pratico esportes', opciones: ['Practico deportes', 'Miro deportes', 'Enseño deportes', 'Estudio deportes'], resposta: 0 },
                { portugues: 'Gosto de música', opciones: ['Me gusta la música', 'Me gusta el cine', 'Me gusta el arte', 'Me gusta la literatura'], resposta: 0 },
                { portugues: 'Toco violão', opciones: ['Toco la guitarra', 'Toco el piano', 'Toco la batería', 'Canto'], resposta: 0 },
                { portugues: 'Assisto filmes', opciones: ['Veo películas', 'Veo series', 'Veo deportes', 'Veo noticias'], resposta: 0 },
                { portugues: 'Leio livros', opciones: ['Leo libros', 'Escribo libros', 'Compro libros', 'Vendo libros'], resposta: 0 },
                { portugues: 'Viajo muito', opciones: ['Viajo mucho', 'Trabajo mucho', 'Estudio mucho', 'Leo mucho'], resposta: 0 },
                { portugues: 'Cozinho', opciones: ['Cocino', 'Como', 'Bebo', 'Compro comida'], resposta: 0 }
            ]
        },
        'sub1_3': {
            1: [
                { portugues: 'Tchau', opciones: ['Chao', 'Hola', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Até logo', opciones: ['Hasta luego', 'Hola', 'Adiós', 'Buenos días'], resposta: 0 },
                { portugues: 'Até amanhã', opciones: ['Hasta mañana', 'Hasta luego', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Até breve', opciones: ['Hasta pronto', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Até mais tarde', opciones: ['Hasta más tarde', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Nos vemos', opciones: ['Nos vemos', 'Hola', 'Adiós', 'Gracias'], resposta: 0 },
                { portugues: 'Cuide-se', opciones: ['Cuídate', 'Adiós', 'Hola', 'Gracias'], resposta: 0 },
                { portugues: 'Tenha um bom dia', opciones: ['Que tengas un buen día', 'Buenos días', 'Buenas tardes', 'Buenas noches'], resposta: 0 },
                { portugues: 'Boa noite', opciones: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'], resposta: 0 },
                { portugues: 'Adeus', opciones: ['Adiós', 'Hola', 'Hasta luego', 'Buenos días'], resposta: 0 }
            ],
            2: [
                { portugues: 'Foi um prazer', opciones: ['Fue un placer', 'Mucho gusto', 'Encantado', 'Hola'], resposta: 0 },
                { portugues: 'O prazer foi meu', opciones: ['El placer fue mío', 'Mucho gusto', 'Encantado', 'Hola'], resposta: 0 },
                { portugues: 'Volte sempre', opciones: ['Vuelve siempre', 'Ven siempre', 'Llama siempre', 'Escribe siempre'], resposta: 0 },
                { portugues: 'Espero vê-lo em breve', opciones: ['Espero verte pronto', 'Nos vemos pronto', 'Hasta pronto', 'Adiós'], resposta: 0 },
                { portugues: 'Mantenha contato', opciones: ['Mantén el contacto', 'Escríbeme', 'Llámame', 'Visítame'], resposta: 0 },
                { portugues: 'Até a próxima', opciones: ['Hasta la próxima', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Boa sorte', opciones: ['Buena suerte', 'Gracias', 'Por favor', 'De nada'], resposta: 0 },
                { portugues: 'Se cuida', opciones: ['Cuídate', 'Adiós', 'Hola', 'Gracias'], resposta: 0 },
                { portugues: 'Até logo, amigo', opciones: ['Hasta luego, amigo', 'Adiós, amigo', 'Hola, amigo', 'Gracias, amigo'], resposta: 0 },
                { portugues: 'Nos falamos', opciones: ['Hablamos', 'Nos vemos', 'Nos escribimos', 'Nos llamamos'], resposta: 0 }
            ],
            3: [
                { portugues: 'Tenha uma boa viagem', opciones: ['Que tengas un buen viaje', 'Buen viaje', 'Buenos días', 'Buenas tardes'], resposta: 0 },
                { portugues: 'Boa viagem', opciones: ['Buen viaje', 'Buenos días', 'Buenas tardes', 'Buenas noches'], resposta: 0 },
                { portugues: 'Volte logo', opciones: ['Vuelve pronto', 'Ven pronto', 'Llama pronto', 'Escribe pronto'], resposta: 0 },
                { portugues: 'Estarei esperando', opciones: ['Estaré esperando', 'Te espero', 'Nos vemos', 'Hasta luego'], resposta: 0 },
                { portugues: 'Não se esqueça de mim', opciones: ['No me olvides', 'Recuérdame', 'Piensa en mí', 'Escríbeme'], resposta: 0 },
                { portugues: 'Saudades', opciones: ['Te extraño', 'Te quiero', 'Te amo', 'Te necesito'], resposta: 0 },
                { portugues: 'Até sempre', opciones: ['Hasta siempre', 'Para siempre', 'Siempre', 'Nunca'], resposta: 0 },
                { portugues: 'Adeus e boa sorte', opciones: ['Adiós y buena suerte', 'Hola y gracias', 'Hasta luego', 'Buenos días'], resposta: 0 },
                { portugues: 'Que Deus te acompanhe', opciones: ['Que Dios te acompañe', 'Que tengas suerte', 'Que te vaya bien', 'Cuídate'], resposta: 0 },
                { portugues: 'Até um dia destes', opciones: ['Hasta uno de estos días', 'Hasta pronto', 'Hasta luego', 'Adiós'], resposta: 0 }
            ],
            4: [
                { portugues: 'Foi bom te ver', opciones: ['Fue bueno verte', 'Me alegro de verte', 'Qué bueno verte', 'Hola'], resposta: 0 },
                { portugues: 'Espero que nos vejamos logo', opciones: ['Espero que nos veamos pronto', 'Nos vemos pronto', 'Hasta pronto', 'Adiós'], resposta: 0 },
                { portugues: 'Mande notícias', opciones: ['Manda noticias', 'Escríbeme', 'Llámame', 'Visítame'], resposta: 0 },
                { portugues: 'Não demore', opciones: ['No tardes', 'Ven pronto', 'Llama pronto', 'Escribe pronto'], resposta: 0 },
                { portugues: 'Até daqui a pouco', opciones: ['Hasta dentro de poco', 'Hasta pronto', 'Hasta luego', 'Adiós'], resposta: 0 },
                { portugues: 'Te vejo em breve', opciones: ['Te veo pronto', 'Nos vemos pronto', 'Hasta pronto', 'Adiós'], resposta: 0 },
                { portugues: 'Passa bem', opciones: ['Que te vaya bien', 'Cuídate', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Até a vista', opciones: ['Hasta la vista', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Nos encontramos depois', opciones: ['Nos encontramos después', 'Nos vemos después', 'Hasta luego', 'Adiós'], resposta: 0 },
                { portugues: 'Foi um prazer conversar', opciones: ['Fue un placer conversar', 'Me gustó hablar contigo', 'Fue bueno hablar', 'Hola'], resposta: 0 }
            ],
            5: [
                { portugues: 'Até o próximo encontro', opciones: ['Hasta el próximo encuentro', 'Hasta la próxima reunión', 'Hasta luego', 'Adiós'], resposta: 0 },
                { portugues: 'Que tenhas um bom descanso', opciones: ['Que tengas un buen descanso', 'Descansa bien', 'Duerme bien', 'Buenas noches'], resposta: 0 },
                { portugues: 'Bom fim de semana', opciones: ['Buen fin de semana', 'Buenos días', 'Buenas tardes', 'Buenas noches'], resposta: 0 },
                { portugues: 'Até segunda-feira', opciones: ['Hasta el lunes', 'Hasta mañana', 'Hasta la semana que viene', 'Adiós'], resposta: 0 },
                { portugues: 'Nos falamos amanhã', opciones: ['Hablamos mañana', 'Nos vemos mañana', 'Hasta mañana', 'Adiós'], resposta: 0 },
                { portugues: 'Até a próxima semana', opciones: ['Hasta la próxima semana', 'Hasta la semana que viene', 'Hasta luego', 'Adiós'], resposta: 0 },
                { portugues: 'Tenha um ótimo dia', opciones: ['Que tengas un día excelente', 'Buen día', 'Buenos días', 'Buenas tardes'], resposta: 0 },
                { portugues: 'Até mais', opciones: ['Hasta más', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Foi ótimo', opciones: ['Fue genial', 'Fue bueno', 'Fue regular', 'Fue malo'], resposta: 0 },
                { portugues: 'Até qualquer hora', opciones: ['Hasta cualquier hora', 'Hasta cuando quieras', 'Hasta luego', 'Adiós'], resposta: 0 }
            ]
        }
        // ... (continuar con los demás subcontenedores)
    };

    if (palabrasDatabase[subcontenedorId] && palavrasDatabase[subcontenedorId][numeroMazo]) {
        return palavrasDatabase[subcontenedorId][numeroMazo];
    } else {
        return generarPalabras(10);
    }
}

function generarPalabras(cantidad) {
    const palavras = [];
    const palavrasBase = [
        { portugues: 'Casa', opciones: ['Casa', 'Apartamento', 'Edificio', 'Escuela'], resposta: 0 },
        { portugues: 'Carro', opciones: ['Coche', 'Moto', 'Bicicleta', 'Autobús'], resposta: 0 },
        { portugues: 'Livro', opciones: ['Libro', 'Revista', 'Periódico', 'Cuaderno'], resposta: 0 },
        { portugues: 'Água', opciones: ['Agua', 'Jugo', 'Refresco', 'Café'], resposta: 0 },
        { portugues: 'Comida', opciones: ['Comida', 'Bebida', 'Postre', 'Aperitivo'], resposta: 0 },
        { portugues: 'Tempo', opciones: ['Tiempo', 'Espacio', 'Lugar', 'Momento'], resposta: 0 },
        { portugues: 'Amigo', opciones: ['Amigo', 'Enemigo', 'Conocido', 'Vecino'], resposta: 0 },
        { portugues: 'Família', opciones: ['Familia', 'Amigos', 'Compañeros', 'Vecinos'], resposta: 0 },
        { portugues: 'Trabalho', opciones: ['Trabajo', 'Estudio', 'Descanso', 'Juego'], resposta: 0 },
        { portugues: 'Escola', opciones: ['Escuela', 'Casa', 'Trabajo', 'Parque'], resposta: 0 }
    ];
    
    for (let i = 0; i < quantidade; i++) {
        palavras.push({...palabrasBase[i % palavrasBase.length]});
    }
    return palavras;
}

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// ============================================================================
// FUNCIÓN DE PRONUNCIACIÓN
// ============================================================================

function pronunciarPalabra() {
    if (preguntaActual >= mazoActual.length) return;
    
    const palabra = mazoActual[preguntaActual].portugues;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(palabra);
        utterance.lang = 'pt-BR'; // Portugués de Brasil
        utterance.rate = 0.8; // Velocidad moderada
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Detener cualquier pronunciación anterior
        speechSynthesis.cancel();
        
        // Pronunciar la palabra
        speechSynthesis.speak(utterance);
        
        // Cambiar temporalmente el botón para mostrar que está funcionando
        const boton = document.getElementById('boton-pronunciacion');
        const textoOriginal = boton.textContent;
        boton.textContent = '🔊 Pronunciando...';
        boton.disabled = true;
        
        setTimeout(() => {
            boton.textContent = textoOriginal;
            boton.disabled = false;
        }, 2000);
        
    } else {
        alert('Seu navegador não suporta a função de pronúncia. Tente usar Chrome, Firefox ou Edge.');
    }
}

// ============================================================================
// FUNCIONES DEL SISTEMA PRINCIPAL
// ============================================================================

function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    return 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop';
}

function cargarContenedor(idContenedor) {
    if (estructura[idContenedor]) {
        contenedorActual = idContenedor;
        const contenedor = estrutura[idContenedor];
        
        document.getElementById('titulo-contenedor').textContent = contenedor.nome || contenedor.nombre;
        document.getElementById('nombre-contenedor').textContent = `Sub-Contêineres de ${contenedor.nome || contenedor.nombre}`;
        
        const contenedorSub = document.getElementById('contenedor-subcontenedores');
        contenedorSub.innerHTML = '';
        
        Object.keys(contenedor.subcontenedores).forEach(key => {
            const sub = contenedor.subcontenedores[key];
            const subDiv = document.createElement('div');
            subDiv.className = 'subcontenedor-card';
            subDiv.onclick = () => cargarSubcontenedor(key);
            
            subDiv.innerHTML = `
                <img src="${obtenerUrlImagen('subcontenedores', key)}" alt="${sub.nome || sub.nombre}" class="subcontenedor-imagen">
                <div class="subcontenedor-texto">${sub.nome || sub.nombre}</div>
                <div class="subcontenedor-info">5 mazos disponíveis</div>
            `;
            
            contenedorSub.appendChild(subDiv);
        });
        
        cambiarPantalla('pantalla-subcontenedores');
    }
}

function cargarSubcontenedor(idSubcontenedor) {
    const contenedor = estrutura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[idSubcontenedor];
    if (subcontenedor) {
        subcontenedorActual = idSubcontenedor;
        
        document.getElementById('titulo-subcontenedor').textContent = subcontenedor.nome || subcontenedor.nombre;
        document.getElementById('nombre-subcontenedor').textContent = `Mazos de ${subcontenedor.nome || subcontenedor.nombre}`;
        
        const contenedorMazos = document.getElementById('contenedor-mazos');
        contenedorMazos.innerHTML = '';
        
        Object.keys(subcontenedor.mazos).forEach(key => {
            const mazo = subcontenedor.mazos[key];
            const mazoDiv = document.createElement('div');
            mazoDiv.className = 'mazo-card';
            mazoDiv.onclick = () => cargarMazo(key);
            
            mazoDiv.innerHTML = `
                <img src="${obtenerUrlImagen('mazos', key)}" alt="${mazo.nome || mazo.nombre}" class="mazo-imagen">
                <div class="mazo-texto">${mazo.nome || mazo.nombre}</div>
                <div class="mazo-info">10 palavras</div>
            `;
            
            contenedorMazos.appendChild(mazoDiv);
        });
        
        cambiarPantalla('pantalla-mazos');
    }
}

function cargarMazo(idMazo) {
    const contenedor = estrutura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[subcontenedorActual];
    if (subcontenedor && subcontenedor.mazos[idMazo]) {
        mazoActual = [...subcontenedor.mazos[idMazo].palavras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        mezclarPreguntas();
        cambiarPantalla('pantalla-quiz');
        mostrarPregunta();
    }
}

function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

function mostrarPregunta() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = mazoActual.length;
        document.getElementById('palabra-portugues').textContent = pregunta.portugues;
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').className = 'resultado';
        document.getElementById('boton-siguiente').style.display = 'none';
        
        // Configurar el botón de pronunciación
        const botonPronunciacion = document.getElementById('boton-pronunciacion');
        botonPronunciacion.onclick = pronunciarPalabra;
        botonPronunciacion.disabled = false;
        botonPronunciacion.textContent = '🔊 Ouvir Pronúncia';
        
        const contenedorOpciones = document.getElementById('contenedor-opciones');
        contenedorOpciones.innerHTML = '';
        
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.resposta]);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

function verificarRespuesta(respuestaSeleccionada, respostaCorrecta) {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // Deshabilitar el botón de pronunciación durante la verificación
    document.getElementById('boton-pronunciacion').disabled = true;
    
    opciones.forEach(opcion => {
        if (opcion.textContent === respostaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respostaSeleccionada && respostaSeleccionada !== respostaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    if (respuestaSeleccionada === respostaCorrecta) {
        resultado.textContent = '¡Correto! ✅';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        
        setTimeout(() => {
            siguientePregunta();
        }, 1500);
        
    } else {
        resultado.textContent = `Incorreto. A resposta correta é: ${respostaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        
        document.getElementById('boton-siguiente').style.display = 'block';
    }
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    
    resultadoFinal.innerHTML = `
        Resumo do Quiz:
        
        Perguntas totais: ${mazoActual.length}
        Respostas corretas: ${respuestasCorrectas}
        Respostas incorretas: ${respuestasIncorrectas}
        Percentual de acertos: ${porcentaje}%
        
        ${porcentaje >= 80 ? '¡Excelente trabalho! 🎉' : 
          porcentaje >= 60 ? 'Bom trabalho, mas pode melhorar 👍' : 
          'Continue praticando, você vai melhorar na próxima vez 💪'}
    `;
}

function cambiarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    document.getElementById(idPantalla).classList.add('activa');
}

function volverAlInicio() {
    cambiarPantalla('pantalla-inicio');
}

function volverASubcontenedores() {
    cambiarPantalla('pantalla-subcontenedores');
}

function volverAMazos() {
    cambiarPantalla('pantalla-mazos');
}

function repetirQuiz() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mezclarPreguntas();
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Aplicativo de Português carregado!");
});

// From https://developers.google.com/youtube/v3/docs/search/list?hl=es-419#usage

export const Topics = [
    { name: 'música en general', value: '/m/04rlf' },
    { name: 'música clásica', value: '/m/0ggq0m'},
    { name: 'música electrónica', value: '/m/02lkt'},
    { name: 'hiphop', value: '/m/0glt670'},
    { name: 'música independiente', value: '/m/05rwpb'},
    { name: 'jazz', value: '/m/03_d0'},
    { name: 'música asiatica', value: '/m/028sqc'},
    { name: 'música latina', value: '/m/0g293'},
    { name: 'pop', value: '/m/064t9'},
    { name: 'reggae', value: '/m/06cqb'},
    { name: 'blues', value: '/m/06j6l'},
    { name: 'rock', value: '/m/06by7'},
    { name: 'soul', value: '/m/0gywn'},

    { name: 'Videojuegos (tema principal)', value: '/m/0bzvm2'},
    { name: 'Juego de acción', value: '/m/025zzc'},
    { name: 'Juego de acción y aventura', value: '/m/02ntfj'},
    { name: 'Juego casual', value: '/m/0b1vjn'},
    { name: 'Videojuegos de música', value: '/m/02hygl'},
    { name: 'Videojuegos de rompecabezas', value: '/m/04q1x3q'},
    { name: 'Videojuegos de carreras', value: '/m/01sjng'},
    { name: 'Videojuegos de rol', value: '/m/0403l3g'},
    { name: 'Videojuegos de simulación', value: '/m/021bp2'},
    { name: 'Juego de deportes', value: '/m/022dc6'},
    { name: 'Videojuegos de estrategia', value: '/m/03hf_rm'},

    { name: 'Deportes (tema principal)', value: '/m/06ntj'},
    { name: 'Béisbol', value: '/m/018jz'},
    { name: 'Básquetbol', value: '/m/018w8'},
    { name: 'Boxeo', value: '/m/01cgz'},
    { name: 'Críquet', value: '/m/09xp_'},
    { name: 'Fútbol americano', value: '/m/02vx4'},
    { name: 'Golf', value: '/m/037hz'},
    { name: 'Hockey sobre hielo', value: '/m/03tmr'},
    { name: 'Artes marciales mixtas', value: '/m/01h7lh'},
    { name: 'Deportes de motor', value: '/m/0410tth'},
    { name: 'Tenis', value: '/m/07bs0'},
    { name: 'Voleibol', value: '/m/07_53'},

    { name: 'Entretenimiento (tema principal)', value: '/m/02jjt'},
    { name: 'Humor', value: '/m/09kqc'},
    { name: 'Películas', value: '/m/02vxn'},
    { name: 'Artes escénicas', value: '/m/05qjc'},
    { name: 'Lucha profesional', value: '/m/066wd'},
    { name: 'Programas de TV', value: '/m/0f2f9'},
	
    { name: 'Estilo de vida (tema principal)', value: '/m/019_rr'},
    { name: 'Moda', value: '/m/032tl'},
    { name: 'Fitness', value: '/m/027x7n'},
    { name: 'Comida', value: '/m/02wbm'},
    { name: 'Pasatiempos', value: '/m/03glg'},
    { name: 'Mascotas', value: '/m/068hy'},
    { name: 'Atractivo físico [Belleza]', value: '/m/041xxh'},
    { name: 'Tecnología', value: '/m/07c1v'},
    { name: 'Turismo', value: '/m/07bxq'},
    { name: 'Vehículos', value: '/m/07yv9'},

    { name: 'Sociedad (tema principal)', value: '/m/098wr'},
    { name: 'Empresa', value: '/m/09s1f'},
    { name: 'Salud', value: '/m/0kt51'},
    { name: 'Militar', value: '/m/01h6rj'},
    { name: 'Política', value: '/m/05qt0'},
    { name: 'Religión', value: '/m/06bvp'},

    { name: 'Conocimiento', value: '/m/01k8wb'},
]

export const order = ['date','rating','relevance','title','viewCount'];
export const regionCode = ['ES','US', 'GB'];
export const relevanceLanguage = ['es','en',];
export const videoCaption = ['any','none','closedCaption'];
export const videoDuration = ['long','medium','short','none'];

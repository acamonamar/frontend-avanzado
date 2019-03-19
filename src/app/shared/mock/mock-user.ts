import { User } from '../models/user';

export const USERS: User[] = [
    {
        uid: 0,
        userName: 'acarmonamar',
        name: 'Alejandro',
        surname: 'Carmona Martos',
        phone: '644039911',
        email: 'jandrocm@gmail.com',
        password: '1234',
        userRol: 'student',
        address: [{
            street: 'Urbanización las Areanas - 45',
            provincia: 'Cádiz',
            municipio: 'Chiclana de la Frontera'
        }],
        avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
        studies: [
            {
                uid: 0,
                sid: 0,
                tipo_titulo: 'ciclo',
                formacion_universidad: null,
                formacion_ciclo: [
                    {
                        centro: 'IES Politécnico Jesús Marin',
                        familia: 'informatica',
                        grado: 'superior',
                        titulo: 'Administracion de sistemas informaticos y redes',
                        fecha: '1397293028',
                        formacion_dual: false,
                        formacion_bilingue: false,
                        certificado: true
                    },
                    {
                        centro: 'IES Politécnico Jesús Marin',
                        familia: 'informatica',
                        grado: 'superior',
                        titulo: 'Técnico Superior en Desarrollo de Aplicaciones Web',
                        fecha: '1397293028',
                        formacion_dual: false,
                        formacion_bilingue: false,
                        certificado: true
                    }
                ]
            },
        ],
        languages: [
            {
                uid: 0,
                lid: 0,
                idioma: 'Inglés',
                nivel: 'B2',
                fecha: '1548320228'
            },
            {
                uid: 0,
                lid: 0,
                idioma: 'Portugués',
                nivel: 'A2',
                fecha: '1548320228'
            }
        ],
        /*
                        offers: {
                            entities: [
                                {
                                    uid: 3,
                                    position: 'Professor Extraescolars programació i robòtica educativa',
                                    company: 'Eixos Creativa',
                                    family: 'Informática y Comunicaciones',
                                    date: '30/01/2019'
                                },
                                {
                                    uid: 3,
                                    position: 'Programaador Jr Java',
                                    company: 'Ki - Works',
                                    family: 'Informática y Comunicaciones',
                                    date: '28/01/2019'
                                },
                                {
                                    uid: 3,
                                    position: 'Programador.net',
                                    company: 'Tecnic Consultores',
                                    family: 'Informática y Comunicaciones',
                                    date: '28/01/2019'
                                },
                                {
                                    uid: 3,
                                    position: 'Programador Junior Java Spring boot',
                                    company: 'GRUPO CMC',
                                    family: 'Informática y Comunicaciones',
                                    date: '25/01/2019'
                                },
                                {
                                    uid: 3,
                                    position: 'Administrativa',
                                    company: 'Servium',
                                    family: 'Administración y Gestión',
                                    date: '25/01/2019'
                                },
                                {
                                    uid: 3,
                                    position: 'DESARROLLADOR/A SOFTWARE',
                                    company: 'PEPPER',
                                    family: 'Informática y Comunicaciones',
                                    date: '23/01/2019'
                                }
                            ]*/
    },
];

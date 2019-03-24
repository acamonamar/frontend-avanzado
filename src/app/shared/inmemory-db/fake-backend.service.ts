import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                id: 0,
                userName: 'acarmonamar',
                name: 'Alejandro',
                surname: 'Carmona Martos',
                nacimiento: '19/12/1985',
                phone: '644039911',
                phone_alt: '',
                email: 'jandrocm@gmail.com',
                password: '1234',
                userRol: 'Student',
                documento_identidad: 'DNI',
                numero_documento: '44365112k',
                permisos: 'B1',
                sobre_mi: 'LOREM IPSUM',
                otras_competencias: 'LOREM IPSUM',
                address: [{
                    calle: 'Urbanización las Areanas - 45',
                    provincia: 'Cádiz',
                    municipio: 'Chiclana de la Frontera',
                }],
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                studies: [
                    {id: 0, sid: 0, tipo_titulo: 'Ciclo',
                        formacion_universidad: [{
                            centro: '',
                            titulo: '',
                            fecha: '',
                            familia: '',
                            formacion: '',
                            certificado: true,
                        }],
                        formacion_ciclo: [{
                            centro: 'IES Politécnico Jesús Marin',
                            familia: 'Informática',
                            grado: 'Superior',
                            titulo: 'Administracion de sistemas informaticos y redes',
                            fecha: '30/06/2005',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: true
                        }]
                    },
                    {id: 0, sid: 1, tipo_titulo: 'Ciclo',
                        formacion_universidad: [{
                            centro: '',
                            titulo: '',
                            fecha: '',
                            familia: '',
                            formacion: '',
                            certificado: true,
                        }],
                        formacion_ciclo: [{
                            centro: 'IES Politécnico Jesús Marin',
                            familia: 'Informática',
                            grado: 'Superior',
                            titulo: 'Técnico Superior en Desarrollo de Aplicaciones Web',
                            fecha: '30/06/2007',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: true
                        }]
                    },
                    {id: 0, sid: 2, tipo_titulo: 'Universidad',
                        formacion_universidad: [{
                            centro: 'Universidad de Almería',
                            titulo: 'Ingeniero Técnico Informática de Gestión',
                            fecha: '30/06/2010',
                            familia: 'Informática',
                            formacion: 'Oficial',
                            certificado: true,
                        }],
                        formacion_ciclo: [{
                            centro: '',
                            familia: '',
                            grado: '',
                            titulo: '',
                            fecha: '',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: false
                        }]
                    }],
                experiences: [
                        {
                            id: 0,
                            eid: 0,
                            empresa: 'Suma',
                            fecha_incio: '1548320228',
                            fecha_fin: '1548320228',
                            puesto: 'Junior',
                            tareas: 'Desarrollador front-end'
                        },
                        {
                            id: 0,
                            eid: 1,
                            empresa: 'Indra',
                            fecha_incio: '1548320228',
                            fecha_fin: '1548320228',
                            puesto: 'Ingeniero',
                            tareas: 'Desarrollador back-end'
                        }
                        ],
                languages: [
                    {id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', fecha: '30/06/2008'},
                    {id: 0, lid: 1, idioma: 'Portugués', nivel: 'A2', fecha: '30/06/2013'}
                ]
            },
            {
                id: 1,
                userName: 'guillermopereapir',
                name: 'Guillermo',
                surname: 'Perea Piñero',
                nacimiento: '19/12/1985',
                phone: '644039911',
                phone_alt: '',
                email: 'guillermo@gmail.com',
                password: '1234',
                userRol: 'Student',
                documento_identidad: 'DNI',
                numero_documento: '44365112k',
                permisos: 'B1',
                sobre_mi: 'LOREM IPSUM',
                otras_competencias: 'LOREM IPSUM',
                address: [{
                    calle: 'Urbanización las Arenas - 45',
                    provincia: 'Cádiz',
                    municipio: 'Chiclana de la Frontera',
                }],
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                studies: [
                    {id: 0, sid: 1, tipo_titulo: 'Ciclo',
                        formacion_universidad: [{
                            centro: '',
                            titulo: '',
                            fecha: '',
                            familia: '',
                            formacion: '',
                            certificado: true,
                        }],
                        formacion_ciclo: [{
                            centro: 'IES Politécnico Jesús Marin',
                            familia: 'Informática',
                            grado: 'Superior',
                            titulo: 'Técnico Superior en Desarrollo de Aplicaciones Web',
                            fecha: '30/06/2007',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: true
                        }]
                    },
                    {id: 0, sid: 2, tipo_titulo: 'Universidad',
                        formacion_universidad: [{
                            centro: 'Universidad de Almería',
                            titulo: 'Ingeniero Técnico Informática de Gestión',
                            fecha: '30/06/2010',
                            familia: 'Informática',
                            formacion: 'Oficial',
                            certificado: true,
                        }],
                        formacion_ciclo: [{
                            centro: '',
                            familia: '',
                            grado: '',
                            titulo: '',
                            fecha: '',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: false
                        }]
                    }],
                experiences: [
                    {
                        id: 0,
                        eid: 1,
                        empresa: 'Indra',
                        fecha_incio: '1548320228',
                        fecha_fin: '1548320228',
                        puesto: 'Ingeniero',
                        tareas: 'Desarrollador back-end'
                    }
                ],
                languages: [
                    {id: 0, lid: 1, idioma: 'Portugués', nivel: 'A2', fecha: '30/06/2013'}
                ]
            },
            {
                id: 3,
                userName: 'angelapple',
                name: 'Angel',
                surname: 'Fernández ',
                email: 'angel@apple.com',
                phone: '958201132',
                nameCompany: 'Apple',
                razonSocial: 'Apple INC',
                CIF: '44365112k',
                address: 'C/ Parlamento, 11',
                provincia: 'Cádiz',
                URL: 'www.apple.com/es',
                password: '1234',
                userRol: 'Company',
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                hasFailed: false,
                offers: [
                        {
                            id: 3,
                            oid: 0,
                            puesto: 'Professor Extraescolars programació i robòtica educativa',
                            empresa: 'Apple',
                            familia: 'Informática y Comunicaciones',
                            fecha: '30/01/2019'
                        },
                        {
                            id: 3,
                            oid: 1,
                            puesto: 'Programaador Jr Java',
                            empresa: 'Apple',
                            familia: 'Informática y Comunicaciones',
                            fecha: '28/01/2019'
                        },
                        {
                            id: 3,
                            oid: 2,
                            puesto: 'Programador.net',
                            empresa: 'Apple',
                            familia: 'Informática y Comunicaciones',
                            fecha: '28/01/2019'
                        },
                        {
                            id: 3,
                            oid: 3,
                            puesto: 'Programador Junior Java Spring boot',
                            empresa: 'Apple',
                            familia: 'Informática y Comunicaciones',
                            fecha: '25/01/2019'
                        },
                        {
                            id: 3,
                            oid: 4,
                            puesto: 'Administrativa',
                            empresa: 'Apple',
                            familia: 'Administración y Gestión',
                            fecha: '25/01/2019'
                        },
                        {
                            id: 3,
                            oid: 5,
                            position: 'DESARROLLADOR/A SOFTWARE',
                            empresa: 'Apple',
                            familia: 'Informática y Comunicaciones',
                            fecha: '23/01/2019'
                        }
                    ]
            },
            {
                id: 4,
                userName: 'windows',
                name: 'Dámaso',
                surname: 'Sánchez',
                email: 'damaso@windows.com',
                phone: '958201132',
                nameCompany: 'Windows',
                razonSocial: 'Windows INC',
                CIF: '44365112k',
                address: 'C/ Parlamento, 11',
                provincia: 'Cádiz',
                URL: 'www.windows.com/es',
                password: '1234',
                userRol: 'Company',
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                hasFailed: false,
                offers: [
                        {
                            id: 4,
                            oid: 0,
                            puesto: 'Professor Extraescolars programació i robòtica educativa',
                            empresa: 'Windows',
                            familia: 'Informática y Comunicaciones',
                            fecha: '30/01/2019'
                        },
                        {
                            id: 4,
                            oid: 1,
                            puesto: 'Programador.net',
                            empresa: 'Windows',
                            familia: 'Informática y Comunicaciones',
                            fecha: '28/01/2019'
                        },
                    ]
            },
        ];
        return {users};
    }
}

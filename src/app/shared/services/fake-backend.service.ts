import { InMemoryDbService } from 'angular-in-memory-web-api';
import {AppSettings} from '../app.settings';
export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                uid: 0,
                userName: 'acarmonamar',
                name: 'Alejandro',
                surname: 'Carmona Martos',
                email: 'jandrocm@gmail.com',
                password: '1234',
                userRol: 'student',
                roles: [AppSettings.COMPANY_ROL.value],
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                parents: [],
                childrens: [],
                hasFailed: false,
                studies: {
                    action: 'SHOW',
                    entities: [
                        {
                            uid: 0,
                            sid: 0,
                            academic: 'ciclo',
                            level: 'Ciclo formativo',
                            title: 'Desarrollo de aplicaciones web',
                            institution: 'IES Politécnico Jesús Marin',
                            date: '1548320228',
                            certificate: false
                        },
                        {
                            uid: 0,
                            sid: 1,
                            academic: 'ciclo',
                            level: 'Ciclo formativo',
                            title: 'Administracion de sistemas informaticos y redes',
                            institution: 'IES Politécnico Jesús Marin',
                            date: '1397293028',
                            certificate: true
                        }
                    ]
                },
                experiences: {
                    action: 'SHOW',
                    entities: [
                        {
                            uid: 0,
                            eid: 0,
                            company: 'Suma',
                            position: 'Junior',
                            date: '1548320228'
                        },
                        {
                            uid: 0,
                            eid: 1,
                            company: 'Indra',
                            position: 'engineer',
                            date: '1548320228'
                        }
                    ]
                },

                languages: {
                    action: 'SHOW',
                    entities: [
                        {
                            uid: 0,
                            lid: 0,
                            level: '6',
                            name: 'English',
                            date: '1548320228'
                        },
                        {
                            uid: 0,
                            lid: 1,
                            level: '4',
                            name: 'French',
                            date: '1548320228'
                        }
                    ]
                },

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
                    ]
                }
            },
            {
                uid: 1,
                userName: 'ajvazquez',
                name: 'Antonio Jesús',
                surname: 'Vázquez Muñoz',
                email: 'aj@gmail.com',
                roles: [AppSettings.COMPANY_ROL.value],
                password: '1234',
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                parents: [],
                childrens: [],
                hasFailed: false,
                studies: {
                    action: 'SHOW',
                    entities: [
                        {
                            uid: 1,
                            sid: 0,
                            level: 'Ciclo formativo',
                            title: 'Desarrollo de aplicaciones web',
                            institution: 'IES Politécnico Jesús Marin',
                            date: '1548320228',
                            certificate: false
                        },
                        {
                            uid: 1,
                            sid: 1,
                            level: 'Ciclo formativo',
                            title: 'Administracion de sistemas informaticos y redes',
                            institution: 'IES Politécnico Jesús Marin',
                            date: '1397293028',
                            certificate: true
                        }
                    ]
                },
                experiences: {
                    action: 'SHOW',
                    entities: [
                        {
                            uid: 1,
                            eid: 0,
                            company: 'Suma',
                            position: 'Junior',
                            date: '1548320228'
                        },
                        {
                            uid: 1,
                            eid: 1,
                            company: 'Indra',
                            position: 'engineer',
                            date: '1548320228'
                        }
                    ]
                },

                languages: {
                    action: 'SHOW',
                    entities: [
                        {
                            uid: 1,
                            lid: 0,
                            level: '6',
                            name: 'English',
                            date: '1548320228'
                        },
                        {
                            uid: 1,
                            lid: 1,
                            level: '4',
                            name: 'French',
                            date: '1548320228'
                        },
                        {
                            uid: 1,
                            id: 2,
                            level: '5',
                            name: 'Italiano',
                            date: '1548320228'
                        }
                    ]
                },

                offers: {
                    entities: [
                        {
                            uid: 4,
                            position: 'Professor Extraescolars programació i robòtica educativa',
                            company: 'Windows',
                            family: 'Informática y Comunicaciones',
                            date: '30/01/2019'
                        },
                        {
                            uid: 4,
                            position: 'Programador.net',
                            company: 'Windows',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                    ]
                }
            },
            {
                uid: 3,
                userName: 'guillermoapple',
                name: 'Guillermo',
                surname: 'Perea Piñero',
                email: 'guillermo@apple.com',
                phone: '958201132',
                nameCompany: 'Apple',
                razonSocial: 'Apple INC',
                CIF: '44365112k',
                address: 'C/ Parlamento, 11',
                provincia: 'Cádiz',
                URL: 'www.apple.com/es',
                password: '1234',
                userRol: 'company',
                roles: [AppSettings.COMPANY_ROL.value],
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                parents: [],
                childrens: [],
                hasFailed: false,
                offers: {
                    entities: [
                        {
                            oid: 0,
                            position: 'Professor Extraescolars programació i robòtica educativa',
                            company: 'Apple',
                            family: 'Informática y Comunicaciones',
                            date: '30/01/2019'
                        },
                        {
                            oid: 1,
                            position: 'Programaador Jr Java',
                            company: 'Apple',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                        {
                            oid: 2,
                            position: 'Programador.net',
                            company: 'Apple',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                        {
                            oid: 3,
                            position: 'Programador Junior Java Spring boot',
                            company: 'Apple',
                            family: 'Informática y Comunicaciones',
                            date: '25/01/2019'
                        },
                        {
                            oid: 4,
                            position: 'Administrativa',
                            company: 'Apple',
                            family: 'Administración y Gestión',
                            date: '25/01/2019'
                        },
                        {
                            oid: 5,
                            position: 'DESARROLLADOR/A SOFTWARE',
                            company: 'Apple',
                            family: 'Informática y Comunicaciones',
                            date: '23/01/2019'
                        }
                    ]
                }
            },
            {
                uid: 4,
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
                userRol: 'company',
                roles: [AppSettings.COMPANY_ROL.value],
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                parents: [],
                childrens: [],
                hasFailed: false,
                offers: {
                    entities: [
                        {
                            oid: 0,
                            position: 'Professor Extraescolars programació i robòtica educativa',
                            company: 'Windows',
                            family: 'Informática y Comunicaciones',
                            date: '30/01/2019'
                        },
                        {
                            oid: 1,
                            position: 'Programador.net',
                            company: 'Windows',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                    ]
                }
            },
        ];
        return {
            users: users
        };
    }
}

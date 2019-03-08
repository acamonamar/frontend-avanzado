import { InMemoryDbService } from 'angular-in-memory-web-api';
import {AppSettings} from '../app.settings';
export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                uid: 'acarmonamar',
                name: 'Alejandro',
                surname: 'Carmona Martos',
                email: 'jandrocm@gmail.com',
                password: '1234',
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
                            level: 'Ciclo formativo',
                            title: 'Desarrollo de aplicaciones web',
                            institution: 'IES Politécnico Jesús Marin',
                            date: '1548320228',
                            certificate: false
                        },
                        {
                            uid: 1,
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
                            company: 'Suma',
                            position: 'Junior',
                            date: '1548320228'
                        },
                        {
                            uid: 0,
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
                            level: '6',
                            name: 'English',
                            date: '1548320228'
                        },
                        {
                            uid: 0,
                            level: '4',
                            name: 'French',
                            date: '1548320228'
                        }
                    ]
                },

                offers: {
                    entities: [
                        {
                            position: 'Professor Extraescolars programació i robòtica educativa',
                            company: 'Eixos Creativa',
                            family: 'Informática y Comunicaciones',
                            date: '30/01/2019'
                        },
                        {
                            position: 'Programaador Jr Java',
                            company: 'Ki - Works',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                        {
                            position: 'Programador.net',
                            company: 'Tecnic Consultores',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                        {
                            position: 'Programador Junior Java Spring boot',
                            company: 'GRUPO CMC',
                            family: 'Informática y Comunicaciones',
                            date: '25/01/2019'
                        },
                        {
                            position: 'Administrativa',
                            company: 'Servium',
                            family: 'Administración y Gestión',
                            date: '25/01/2019'
                        },
                        {
                            position: 'DESARROLLADOR/A SOFTWARE',
                            company: 'PEPPER',
                            family: 'Informática y Comunicaciones',
                            date: '23/01/2019'
                        }
                    ]
                }
            },
            {
                uid: 'ajvazquez',
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
                            uid: 0,
                            level: 'Ciclo formativo',
                            title: 'Desarrollo de aplicaciones web',
                            institution: 'IES Politécnico Jesús Marin',
                            date: '1548320228',
                            certificate: false
                        },
                        {
                            uid: 1,
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
                            company: 'Suma',
                            position: 'Junior',
                            date: '1548320228'
                        },
                        {
                            uid: 0,
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
                            level: '6',
                            name: 'English',
                            date: '1548320228'
                        },
                        {
                            uid: 0,
                            level: '4',
                            name: 'French',
                            date: '1548320228'
                        },
                        {
                            uid: 0,
                            level: '5',
                            name: 'Italiano',
                            date: '1548320228'
                        }
                    ]
                },

                offers: {
                    entities: [
                        {
                            position: 'Professor Extraescolars programació i robòtica educativa',
                            company: 'Eixos Creativa',
                            family: 'Informática y Comunicaciones',
                            date: '30/01/2019'
                        },
                        {
                            position: 'Programaador Jr Java',
                            company: 'Ki - Works',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                        {
                            position: 'Programador.net',
                            company: 'Tecnic Consultores',
                            family: 'Informática y Comunicaciones',
                            date: '28/01/2019'
                        },
                        {
                            position: 'Programador Junior Java Spring boot',
                            company: 'GRUPO CMC',
                            family: 'Informática y Comunicaciones',
                            date: '25/01/2019'
                        },
                        {
                            position: 'Administrativa',
                            company: 'Servium',
                            family: 'Administración y Gestión',
                            date: '25/01/2019'
                        },
                        {
                            position: 'DESARROLLADOR/A SOFTWARE',
                            company: 'PEPPER',
                            family: 'Informática y Comunicaciones',
                            date: '23/01/2019'
                        }
                    ]
                }
            }
        ];
        return {
            users: users
        };
    }
}

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
                email: 'jandrocm@gmail.com',
                password: '1234',
                userRol: 'student',
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
                            fecha: '1397293028',
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
                            fecha: '1397293028',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: true
                        }]
                    },
                    {id: 0, sid: 2, tipo_titulo: 'Universidad',
                        formacion_universidad: [{
                            centro: 'Universidad de Almería',
                            titulo: 'Ingeniero Técnico Informática de Gestión',
                            fecha: '1397293028',
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
                    {id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', fecha: '1548320228'},
                    {id: 0, lid: 1, idioma: 'Portugués', nivel: 'A2', fecha: '1548320228'}
                ]
            }];
        return {users};
    }
}

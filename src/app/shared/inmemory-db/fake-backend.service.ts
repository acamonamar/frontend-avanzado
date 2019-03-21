import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeBackendService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                id: 0,
                userName: 'acarmonamar',
                name: 'Alejandro',
                surname: 'Carmona Martos',
                phone: '644039911',
                email: 'jandrocm@gmail.com',
                password: '1234',
                userRol: 'student',
                documento_identidad: 'otro',
                numero_documento: '44365112k',
                permisos: 'B1',
                sobre_mi: 'LOREM IPSUM',
                otras_competencias:'LOREM IPSUM',
                address: [{
                    street: 'Urbanización las Areanas - 45',
                    provincia: 'Cádiz',
                    municipio: 'Chiclana de la Frontera',
                }],
                avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
                studies: [
                    {uid: 0, sid: 0, tipo_titulo: 'ciclo', formacion_universidad: null,
                        formacion_ciclo: [{
                            centro: 'IES Politécnico Jesús Marin',
                            familia: 'informatica',
                            grado: 'superior',
                            titulo: 'Administracion de sistemas informaticos y redes',
                            fecha: '1397293028',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: true
                        }]
                    },
                    {uid: 0, sid: 1, tipo_titulo: 'ciclo', formacion_universidad: null,
                        formacion_ciclo: [{
                            centro: 'IES Politécnico Jesús Marin',
                            familia: 'informatica',
                            grado: 'superior',
                            titulo: 'Técnico Superior en Desarrollo de Aplicaciones Web',
                            fecha: '1397293028',
                            formacion_dual: false,
                            formacion_bilingue: false,
                            certificado: true
                        }]
                    }],
                languages: [
                    {uid: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', fecha: '1548320228'},
                    {uid: 0, lid: 1, idioma: 'Portugués', nivel: 'A2', fecha: '1548320228'}
                ]
            }];
        return {users};
    }
}

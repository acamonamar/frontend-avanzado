import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import { ListIdiomas } from '../models/list-idiomas';
import { LISTADOIDIOMAS } from '../inmemory-db/mock-idiomas';

import { ListNivelesIdiomas } from '../models/list-niveles-idiomas';
import { LISTADONIVELESIDIOMAS} from '../inmemory-db/mock-niveles-idiomas';

import { ListTitulosAcademicos } from '../models/list-titulos-academicos';
import { LISTADO_TITULOS_ACADEMICOS} from '../inmemory-db/mock-titulos-academicos';

import { ListCentrosEducativos } from '../models/list-centros-educativos';
import { LISTADO_CENTROS_EDUCATIVOS } from '../inmemory-db/mock-centros-educativos';

import { ListTipoTitulo } from '../models/list-tipo-titulo';
import { LISTADO_TIPO_TITULOS } from '../inmemory-db/mock-tipos-titulos';

import { ListNivelGrado } from '../models/list-nivel-grado';
import { LISTADO_NIVEL_GRADO } from '../inmemory-db/mock-nivel-grado';

import { ListFamiliasFormacion } from '../models/list-familias-formacion';
import { LISTADO_FAMILIAS_FORMACION } from '../inmemory-db/mock-familias-formacion';

import { ListProvincias } from '../models/list-provincias';
import { LISTADO_PROVINCIAS } from '../inmemory-db/mock-provincias';

import { ListDocumentosIdentidad } from '../models/list-documentos-identidad';
import { LISTADO_DOCUMENTOS_IDENTIDAD } from '../inmemory-db/mock-documentos-identidad';

@Injectable()
export class MockService {

    constructor() { }

    getIdiomas(): Observable<ListIdiomas[]> {
        return Observable.of(LISTADOIDIOMAS);
    }
    getNivelesIdiomas(): Observable<ListNivelesIdiomas[]> {
        return Observable.of(LISTADONIVELESIDIOMAS);
    }
    getTitulosAcademicos(): Observable<ListTitulosAcademicos[]> {
        return Observable.of(LISTADO_TITULOS_ACADEMICOS);
    }
    getCentrosEducativos(): Observable<ListCentrosEducativos[]> {
        return Observable.of(LISTADO_CENTROS_EDUCATIVOS);
    }
    getTipoTitulos(): Observable<ListTipoTitulo[]> {
        return Observable.of(LISTADO_TIPO_TITULOS);
    }
    getNivelGrado(): Observable<ListNivelGrado[]> {
        return Observable.of(LISTADO_NIVEL_GRADO);
    }
    getFamiliasFormacion(): Observable<ListFamiliasFormacion[]> {
        return Observable.of(LISTADO_FAMILIAS_FORMACION);
    }
    getProvincias(): Observable<ListProvincias[]> {
        return Observable.of(LISTADO_PROVINCIAS);
    }
    getDocumentos(): Observable<ListDocumentosIdentidad[]> {
        return Observable.of(LISTADO_DOCUMENTOS_IDENTIDAD);
    }
    /*getIdioma(id: number): Observable<ListIdiomas> {
        return Observable.of(LISTADOIDIOMAS.find(item => item.idioma_id === id));
    }*/
}

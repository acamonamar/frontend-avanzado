import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import { ListIdiomas } from '../models/list-idiomas';
import { LISTADOIDIOMAS } from '../inmemory-db/mock-idiomas';

import { ListNivelesIdiomas } from '../models/list-niveles-idiomas';
import { LISTADONIVELESIDIOMAS} from '../inmemory-db/mock-niveles-idiomas';

@Injectable()
export class MockService {

    constructor() { }

    getIdiomas(): Observable<ListIdiomas[]> {
        return Observable.of(LISTADOIDIOMAS);
    }
    getNivelesIdiomas(): Observable<ListNivelesIdiomas[]> {
        return Observable.of(LISTADONIVELESIDIOMAS);
    }
    /*getIdioma(id: number): Observable<ListIdiomas> {
        return Observable.of(LISTADOIDIOMAS.find(item => item.idioma_id === id));
    }*/
}

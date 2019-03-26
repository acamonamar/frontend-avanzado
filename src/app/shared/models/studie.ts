export class Universidad {
    centro: string;
    titulo: string;
    fecha: string;
    familia: string;
    formacion: string;
    certificado: boolean;
}

export class Ciclo {
    centro: string;
    familia: string;
    grado: string;
    titulo: string;
    fecha: string;
    formacion_dual: boolean;
    formacion_bilingue: boolean;
    certificado: boolean;
}

export class Studie {
    public id: number;
    public sid: number;
    public tipo_titulo: string;
    public formacion_universidad: Universidad[];
    public formacion_ciclo: Ciclo[];

    constructor(
        id: number,
        sid: number,
        tipo_titulo: string,
        formacion_universidad: Universidad[],
        formacion_ciclo: Ciclo[],
    ) {
        this.id = id;
        this.sid = sid;
        this.tipo_titulo = tipo_titulo;
        this.formacion_universidad = formacion_universidad;
        this.formacion_ciclo = formacion_ciclo;
    }
}

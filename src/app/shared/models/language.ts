export class Language {
    public id: number;
    public lid: number;
    public idioma: string;
    public nivel: string;
    public fecha: string;

    constructor(
        id: number,
        lid: number,
        idioma: string,
        nivel: string,
        fecha: string
    ) {
        this.id = id;
        this.lid = lid;
        this.idioma = idioma;
        this.nivel = nivel;
        this.fecha = fecha;
    }
}

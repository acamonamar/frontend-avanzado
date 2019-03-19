export class Language {
    public uid: number;
    public lid: number;
    public idioma: string;
    public nivel: string;
    public fecha: string;

    constructor(
        uid: number,
        lid: number,
        idioma: string,
        nivel: string,
        fecha: string
    ) {
        this.uid = uid;
        this.lid = lid;
        this.idioma = idioma;
        this.nivel = nivel;
        this.fecha = fecha;
    }
}

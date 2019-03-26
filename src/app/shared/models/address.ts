export class Address {

    public calle: string;
    public provincia: string;
    public municipio: string;

    constructor(
        calle: string,
        provincia: string,
        municipio: string,
    ) {
        this.calle = calle;
        this.provincia = provincia;
        this.municipio = municipio;
    }
}

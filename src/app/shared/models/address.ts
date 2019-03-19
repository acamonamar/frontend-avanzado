export class Address {

    public street: string;
    public provincia: string;
    public municipio: string;

    constructor(
        street: string,
        provincia: string,
        municipio: string,
    ) {
        this.street = street;
        this.provincia = provincia;
        this.municipio = municipio;
    }
}

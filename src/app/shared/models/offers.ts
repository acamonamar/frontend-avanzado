export class Offers {
    public id: number;
    public oid: number;
    public puesto: string;
    public empresa: string;
    public familia: string;
    public fecha: string;

    constructor(
        id: number,
        oid: number,
        puesto: string,

        empresa: string,
        familia: string,
        fecha: string,
    ) {
        this.id = id;
        this.oid = oid;
        this.puesto = puesto;
        this.empresa = empresa;
        this.familia = familia;
        this.fecha = fecha;
    }
}

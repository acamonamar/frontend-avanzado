export class Experience {
    public id: number;
    public eid: number;
    public empresa: string;
    public fecha_incio: string;
    public fecha_fin: string;
    public puesto: string;
    public tareas: string;

    constructor(
        id: number,
        eid: number,
        empresa: string,
        fecha_incio: string,
        fecha_fin: string,
        puesto: string,
        tareas: string
    ) {
        this.id = id;
        this.eid = eid;
        this.empresa = empresa;
        this.fecha_incio = fecha_incio;
        this.fecha_fin = fecha_fin;
        this.puesto = puesto;
        this.tareas = tareas;
    }
}

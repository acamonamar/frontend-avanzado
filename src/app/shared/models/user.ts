import { Address }      from './address';
import { Studie }       from './studie';
import { Experience }   from './experience';
import { Language }     from './language';

export class User {
    public id: number;
    public userName: string;
    public name: string;
    public surname: string;
    public phone: string;
    public documento_identidad: string;
    public numero_documento: string;
    public email: string;
    public permisos: string;
    public sobre_mi: string;
    public otras_competencias: string;
    public password: string;
    public userRol: string;
    public avatar_hash: string;
    public address: Address[] ;
    public studies: Studie[];
    public experiences: Experience[];
    public languages: Language[];

    constructor(
        id: number,
        userName: string,
        name: string,
        surname: string,
        phone: string,
        documento_identidad: string,
        numero_documento: string,
        email: string,
        permisos: string,
        sobre_mi: string,
        otras_competencias: string,
        password: string,
        userRol: string,
        avatar_hash: string,
        address: Address[],
        studies: Studie[],
        experiences: Experience[],
        languages: Language[]
    ) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.documento_identidad = documento_identidad;
        this.numero_documento = numero_documento;
        this.permisos = permisos;
        this.email = email;
        this.sobre_mi = sobre_mi;
        this.otras_competencias = otras_competencias;
        this.password = password;
        this.userRol = userRol;
        this.avatar_hash = avatar_hash;
        this.address = address;
        this.studies = studies;
        this.experiences = experiences;
        this.languages = languages;
    }
}

import { Address }      from './address';
import { Studie }       from './studie';
import { Experience }   from './experience';
import { Language }     from './language';
import { Offers } from './offers';

export class User {
    public id: number;
    public userName: string;
    public name: string;
    public surname: string;
    public nacimiento: string;
    public phone: string;
    public phone_alt: string;
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
    public offers: Offers[];

    constructor(
        id: number,
        userName: string,
        name: string,
        surname: string,
        nacimiento: string,
        phone: string,
        phone_alt: string,
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
        languages: Language[],
        offers: Offers[]
    ) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.surname = surname;
        this.nacimiento = nacimiento;
        this.phone = phone;
        this.phone_alt = phone_alt;
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
        this.offers = offers;
    }
}

import { Address }      from './address';
import { Studie }       from './studie';
// import { Experience }   from './experience';
import { Language }     from './language';

export class User {
    public id: number;
    public userName: string;
    public name: string;
    public surname: string;
    public phone: string;
    public email: string;
    public password: string;
    public userRol: string;
    public avatar_hash: string;
    public address: Address[] ;
    public studies: Studie[];
    // public experiences: Experience[];
    public languages: Language[];

    constructor(
        id: number,
        userName: string,
        name: string,
        surname: string,
        phone: string,
        email: string,
        password: string,
        userRol: string,
        avatar_hash: string,
        address: Address[],
        studies: Studie[],
        // experiences: Experience[],
        languages: Language[]
    ) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.userRol = userRol;
        this.avatar_hash = avatar_hash;
        this.address = address;
        this.studies = studies;
        // this.experiences = experiences;
        this.languages = languages;
    }
}

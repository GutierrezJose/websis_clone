export class CareerDTO {
    id: number;
    name: string;
    idFaculty: number;

    constructor(id: number, name: string, idFaculty: number) {
        this.id = id;
        this.name = name;
        this.idFaculty = idFaculty;
    }
}
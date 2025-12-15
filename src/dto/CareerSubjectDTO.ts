export class CareerSubjectDTO {
    id: number;
    idCareer: number;
    idSubject: number
    prerequisite: number | undefined;
    level: string;
    elective: boolean;

    constructor(id: number, idCareer: number, idSubject: number, level: string, elective: boolean, prerequisite: number| undefined) {
        this.id = id;
        this.idCareer = idCareer;
        this.idSubject = idSubject;
        this.level = level;
        this.elective = elective;
        this.prerequisite = prerequisite;
    }
}
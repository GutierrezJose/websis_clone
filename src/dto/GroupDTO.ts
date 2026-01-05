export class GroupDTO {
    idGroupSubject: number;
    idCareerSubject: number;
    groupName: string;

    constructor (idGroupSubject: number, idCareerSubject: number, groupName: string) {
        this.idGroupSubject = idGroupSubject;
        this.idCareerSubject = idCareerSubject;
        this.groupName = groupName;
    }
}
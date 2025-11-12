export class UserDTO {
    id: Number;
    username: String;
    firstName: String;
    lastName: String;
    ci: Number;
    birthDate: Date;
    address: String;
    phone: String;

    constructor(id: Number, username: String, firstName: String, lastName: String, ci: Number, birthDate: Date, address: String, phone: String) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ci = ci;
        this.birthDate = birthDate;
        this.address = address;
        this.phone = phone;
    }

}
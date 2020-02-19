class Employee {
    constructor (name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

    grabName() {
        return this.name;
    }

    grabID() {
        return this.id;
    }

    grabEmail() {
        return this.email;
    }

    grabTitle() {
        return this.title;
    }

    grabRole() {
        return Employee;
    }
}
module.exports = Employee;
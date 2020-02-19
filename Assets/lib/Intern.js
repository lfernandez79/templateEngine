const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, school, id, email) {
        super(name, id, email);
        this.school = school
    }

    grabSchool() {
        return this.school;
    }

    grabRole() {
        return Intern;
    }

}

module.exports = Intern
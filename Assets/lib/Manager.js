const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, officeNumber){
    super(name, id, title);
    this.officeNumber = officeNumber;
    }

    grabRole() {
        return Manager;
    }

    getOfficeNumber() {
    return this.officeNumber;
    }
}
module.exports = Manager
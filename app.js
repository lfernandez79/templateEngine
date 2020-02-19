// Create all requires 
const inquirer = require("inquirer");
const fs = require("fs");

// sotred all funciton definition with async-await
async function Begin() {

    try {
        var manager = await newManager();
        var team = await newTeam();
        var engineer = await newEngineer();
        var intern = await newIntern();
    } catch (error) {
        console.log(error);
    };
    
};

// Calling fucntion created above.
Begin();

// MANAGER QUESTIONS
function newManager() {
    return inquirer.prompt([
        {
            type:"input",
            name:"nameManager",
            message: "Provide manager name: "
        },
        {
            type:"input",
            name:"idManager",
            message:"What is the manager ID?"
        },
        {
            type:"input",
            name:"emailManager",
            message:"Manager email address:"
        },
        {
            type:"input",
            name:"phoneManager",
            message:"Manager office number:"
        },
    ])
    
}


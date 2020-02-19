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

// QUESTION TO CREATE A TEAM WITH A CHOICE OPTIONS
function newTeam() {
    return inquirer.prompt([
        {
            type: "list",
            name: "Members",
            message: "Do you have an engineer or intern?",
            choices: ["Engineer", "Intern", "Don't add any more team members"]
        }
    ]);
}

// QUESTION TO CREATE AN ENGINEER
function newEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameEngineer",
            message: "Name of the engineer:?"
        },
        {
            type: "input",
            name: "idEngineer",
            message: "What's ID of the engineer:"
        },
        {
            type: "input",
            name: "emailEngineer",
            message: "What's the email of the engineer:"
        },
        {
            type: "input",
            name: "githubID",
            message: "Enter engineer github username:"
        }
    ]);
}

function newIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameIntern",
            message: "Provide intern name:"
        },
        {
            type: "input",
            name: "idIntern",
            message: "What's the ID of the intern:"
        },
        {
            type: "input",
            name: "emailIntern",
            message: "What' s the email of the intern:"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What's the school the intern is attending to:"
        }
    ]);
}


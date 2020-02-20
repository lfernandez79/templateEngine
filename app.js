// Create all requires 
const inquirer = require("inquirer");
const fs = require("fs");

// link all Classes
const Manager = require("./Assets/lib/Manager");
const Engineer = require("./Assets/lib/Engineer")
const Intern = require("./Assets/lib/Intern");

const arrManager = [];
const arrEngineer = [];
const arrIntern = [];


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
    

.then(function({ nameManager, idManager, emailManager, phoneManager})
  {
   const manager = new Manager (nameManager, idManager, emailManager, phoneManager);

    arrManager.push(manager);
    newTeam();
  });
}
newManager();


// QUESTION TO CREATE A TEAM WITH A CHOICE OPTIONS
function newTeam() {
    return inquirer.prompt([
        {
            type: "list",
            name: "Members",
            message: "Do you have an engineer or intern?",
            choices: ["Engineer", "Intern", "Don't add team members"]
        }
    ])
    .then(answers => {
        switch (answers.Members) {
            case "Engineer":
                 newEngineer();
                break;
            case "Intern":
                 newIntern();
                 break;
        
            // default:
            //     createCards(arrManager, arrEngineer, arrIntern);
        }
    });

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
    ])

    .then(function({nameEngineer, idEngineer, emailEngineer, githubID}) 
        { 
            const engineer = new Engineer(nameEngineer, idEngineer, emailEngineer, githubID);
            arrEngineer.push(engineer);
            newTeam();

        })

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
    ])
    .then(function({nameIntern, idIntern, emailIntern, internSchool}) {
        const intern = new Intern(nameIntern, idIntern, emailIntern, internSchool);
        arrIntern.push(intern);
        newTeam();
    });
}


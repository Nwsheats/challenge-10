const Employee = require("./lib/employee");
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require("fs");
const { join } = require("path");

function generateHTML(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="./src/bootstrap.min.css">
        <title>Team Dashboard</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info d-flex">
            <div class="row w-100 justify-content-center">
            <h1 class="text-center text-white">My Team</h1>
            </div>
          </nav>
        <main class="d-flex">
        <section class="w-100 column">
            <section class="w-100 h-100 my-4 column">
                <div class="container h-100">
                    <div class="row h-50">
                    ${answers.map((answer)=> {
                        console.log(answer)
                        let string = ''
                        switch(answer.type) {
                            case 'Manager':
                                string+= generateManager(answer)
                                break;
                            case 'Engineer':
                                string+= generateEngineer(answer)
                                break;
                            case 'Intern':
                                string+= generateIntern(answer)
                                break;
                            default:
                          } return string;
                    }
                ).join('')}
                    </div>
                </div>
            </section>
        </main>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="script.js"></script>
    </html>`;
}




function generateManager(Manager) {
    return `<div class="col-3 m-3 bg-primary border text-dark">
    <h3 class="text-black">Name: ${Manager.name}</h3>
    <p class="text-black">Employee ID: ${Manager.id}</p>
    <a class="text-black" href="mailto:${Manager.email}">Email: ${Manager.email}</a>
    <p class="text-black">Office Number: ${Manager.officeNumber}</p>
    </div>
    `
}


function generateEngineer(Engineer) {
    return `<div class="col-3 m-3 bg-primary border text-dark">
    <h3 class="text-black">Name: ${Engineer.name}</h3>
    <p class="text-black">Employee ID: ${Engineer.id}</p>
    <a class="text-black" href="mailto:${Engineer.email}">Email: ${Engineer.email}</a>
    <a class="text-black" href="https://github.com/${Engineer.gitHub}/">GitHub: ${Engineer.gitHub}</a>
    </div>
    `
}


function generateIntern(Intern) {
    return `<div class="col-3 m-3 bg-primary border text-dark">
    <h3 class="text-black">Name: ${Intern.name}</h3>
    <p class="text-black">Employee ID: ${Intern.id}</p>
    <a class="text-black" href="mailto:${Intern.email}">Email: ${Intern.email}</a>
    <p class="text-black">School: ${Intern.school}</p>
    </div>
    `
}


module.exports = generateHTML;

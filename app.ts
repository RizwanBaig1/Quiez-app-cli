
import { log } from "console";
import inquirer from "inquirer"

const quiz:{
    question_1:string;
    question_2:string;
    question_3:string;
    question_4:string;
    question_5:string;
}= await inquirer.prompt([
    {
        name: " question_1",
        type: "list",
        message:"Q1.What is the correct way to check if two value are not equal in Typescript?",
        choices: ["a ==b","a ===b","a=b","a !==b"]
    },
    {
        name: " question_2",
        type: "list",
        message:"Q2.Wich of the following characters is commonly allowed in variable names in Typescript?",
        choices: ["$","@","#","&"]
    },
    {
        name: " question_3",
        type: "list",
        message:"Q3.Wich operator is commonly used for string concatenation in Typescript?",
        choices: ["+","-","*","/"]
    },
    {
        name: " question_4",
        type: "list",
        message:"Q4.In Typescript wich symbol is commonly used to termeinate a statement?",
        choices: [",",";",":","."]
    },
    {
        name: " question_5",
        type: "list",
        message:"Q5.Wich method of inquirer is used to start the prompt inquirer and receive user input?",
        choices: ["start()","prompt()","init()","run()"]
    }
]);
//hm yahn pr score ka variable bny ge ta k hmary score count ho skeen 
let score: number = 0;
//ab hm switch case use kren ge ta k user ne jo b answer dy hen wo correct hen ya incorrect hen
//switch case ka syntex: switch(expression){case ""}

switch(quiz.question_1) {
    case "a !==b":      //case me question ka correct answer liken ge
    console.log("1. correct!");  //agr user correct anser dy ga tou ye print ho jay ga
    ++score;           //correct answer dyny pr score me 1 ka increment ho jay ga
    break;              //agr user correct anser dy ga tou ye break point iss code ko stop kr dy ga
    default:           //agr user incorrect answer dy ga tou 
        console.log("1. Incorrect");   //incorrect answer pr ye print ho ga
    }
    
switch(quiz.question_2) {
    case "$":      
    console.log("2. correct!");  
    ++score;           
    break;              
    default:          
        console.log("2.Incorrect");   
    }
    
switch(quiz.question_3) {
    case "+":      
    console.log("3.correct!");  
    ++score;           
    break;              
    default:           
        console.log("3.Incorrect");   
    }
    
switch(quiz.question_4) {
    case ";":      
    console.log("4.correct!");  
    ++score;            
    break;               
    default:            
        console.log("4.Incorrect");   
    }
    
switch(quiz.question_5) {
    case "prompt()":     
    console.log("5.correct!");  
    ++score;           
    break;             
    default:           
        console.log("5.Incorrect");   
    }
    //score k lea
    console.log(`score: ${score}`);
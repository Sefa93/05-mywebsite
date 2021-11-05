import Java from '../../assets/images/Java.png';
import C from  '../../assets/images/C.png';
import Python from '../../assets/images/Python.png';
import typescript from '../../assets/images/typescript.png'
import Javascript from '../../assets/images/Javascript.png';
import css from '../../assets/images/css.png';
import html5 from '../../assets/images/html5.png';
import React from '../../assets/images/React.png';
import NodeJs from '../../assets/images/NodeJs.png';
import Mysql from '../../assets/images/Mysql.png';
import Git from '../../assets/images/Git.png';


interface Skill {
    id: number;
    skillName: string;
    logo: HTMLElement;
    description: string; 
}

/**
 * Java
 */
const skillJava = {
    id: 1,
    skillName: "Java",
    logo: <img src={Java}/>,
    description: "Java is a programming language supporting OOP with classes methods & attributes and much more. I can handle the basic"
    + " concepts of Java like creating a class with methods(getter/setter) and attributes & using its libraries"
}

/**
 * C/C++
 */
 const skillCpp = {
    id: 2,
    skillName: "Cpp",
    logo: <img src={C}/>,
    description: "If you want to programming hardware then there is no way around using C/C++. Main Concept of C are pointer, structs, unions"
    + " It's important to handle pointer in C, because C is not like Java. Call by Reference only works with pointer. "
}

/**
 * Python
 */

 const skillPython = {
    id: 3,
    skillName: "Python",
    logo: <img src={Python}/>,
    description: "Currently i'm learning python. I decided to learn python because its simplicity. For example in many programming languages"
    + " you need to declare a main function before execute a print function. In python its sufficient to write print('Hello World')",
}

/**
 * TypeScript 
 */
const skillTypescript = {
    id: 4,
    skillName: "Typescript",
    logo: <img src={typescript}/>,
    description: "Typescript is an language built on top of Javascript to enable type definition for javascript variables and objects, e.g"
    + " const zahl: number = 11;"
}

/**
 * Javascript
 */
 const skillJavascript = {
    id: 5,
    skillName: "Javascript",
    logo: <img src={Javascript}/>,
    description: "Javascript is is the most popular programming languages for building web pages and application",
}

/**
 * CSS 
 */
const skillCss = {
    id: 6,
    skillName: "Css",
    logo: <img src={css}/>,
    description: "Cascading Style Sheets are used to design html elements. If you need someone who knows what media queries"
    + " or keyframes are then i'm the right one",
}

/**
 * HTML
 */
const skillHTML = {
    id: 7,
    skillName: "HTML5",
    logo: <img src={html5}/>,
    description: "HTML is an language to define content for web pages/applications, like input fields, buttons, paragraphs etc."
    + " The Handling of basic HTML elements like divs, buttons, inputs are no problem for me",
}

/**
 * React
 */
const skillReact = {
    id: 8,
    skillName: "React",
    logo: <img src={React}/>,
    description: 'React is a popular fronted library to build beautiful web pages. The guys from facebook & instagram did a great work to publish'
    + " it under the MIT licencse. Hint: This page was created with React",
}

const skillNodeJs = {
    id: 9,
    skillName: "NodeJs",
    logo: <img src={NodeJs}/>,
    description: 'NodeJs is a javascript runtime environment to execute javascript code outside of web browsers. It comes with npm (Node package Manager) containing'
    + " a lot of modules which facilitates implenenting frontend & backend stuff.",  
}

const skillMysql = {
    id: 10,
    skillName: "MySQL",
    logo: <img src={Mysql}/>,
    description: 'MySQL is a popular database. I worked with MySQL workbench to create my own database scheme and tables to connect it'
    + " with my react application",
}

const skillGit = {
    id: 11,
    skillName: "Git",
    logo: <img src={Git}/>,
    description: "Git is a software to manage different software versions (local or remote). It's very helpful for tracebility of software errors."
    + " So far i used the commands for creating a branch, commit, push and pull."
}


export const skillsArray = [skillJava, skillCpp, skillPython, skillTypescript, skillJavascript, skillCss, skillHTML, skillReact, skillNodeJs, skillMysql, skillGit]
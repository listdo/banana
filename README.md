# 🍌Banana
Banana is a small Todo List implemented in Angular


## Introduction
This is a small deo application developed to get a better start with Angular. I created this because I myself had a rough start with Angular but like the concepts behinde it. In this readme I am going to document the essential steps I needed for better understanding.

## Goal
The goal is to create a small todo-app that shows basic functionality of Angular.

## Getting Started
1. Install NodeJs https://nodejs.org/en/
2. Install AngularCLI with NPM
    - npm install -g @angular/cli (This step could take a while)
3. Create a new project
    - ng new <Projectname> --routing
4. Create a new component
    - ng g c <Componentname> (in our example "ng g c components/todo-list")
5. Remove content of app-component.html
    - this is the main component from here every thing else gets rendered we remove the content to make space for our content
6. Add your own component in the app-component.html file
    - the tag has the same name as the corresponding selector
    - selector can be found in the <componentname>.component.ts file
7. Add some data to todo-list.component.ts
8. Add display of the data in todo-list.component.html and Step one setting up your first angular app is done

## Common Commands
- ng new <Projectname>
    - creates a new project in the current folder
- ng serve
    - starts the application (can run while development)
- ng generate component <componentname>
    - creates a new component and corresponding files
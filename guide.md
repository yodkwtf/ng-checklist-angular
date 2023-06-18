# Angular - A Beginner's Guide

This is a beginner's guide to Angular. It's a collection of notes and code snippets from the [Angular Crash Course](https://youtu.be/3dHNOWTI7H8) by [Traversy Media](https://www.youtube.com/@TraversyMedia) and the official [Angular documentation](https://angular.io/docs).

## What is Angular?

- A frontend Javascript framework
- Created by Google
- Used to build Single Page Applications (SPAs)
- Uses TypeScript

It typically runs on the client side, in the browser but can also be used on the server through Node.js or other server-side frameworks.

## Angular vs AngularJS

AngularJS is the first version of Angular. It was released in 2010 and is also known as Angular 1. It's still used in many legacy projects. Angular 2 was released in 2016 and is a complete rewrite of AngularJS. It's a completely different framework. Angular 2+ is just called Angular. Angular 2+ is much more performant and has a lot more features. It's also much easier to learn and use. AngularJS is no longer supported by Google.

## Why Angular?

- Full featured framework (routing, forms, validation, http, etc)
- Proffered and popular in the enterprise world
- TypeScript support (optional)
- Test friendly (unit, e2e, etc)
- CLI (scaffolding, build, etc)

## Prerequisites

- HTML, CSS, JS
- TypeScript (optional)
- OOP (classes, objects, interfaces, etc)
- Node.js and NPM
- Asynchronous programming (promises, observables, etc)
- Array methods (forEach, map, filter, reduce, etc)
- Fetch API and HTTP (GET, POST, PUT, DELETE, etc)

## Angular Components

- Components are the fundamental building blocks of Angular applications.
- They display data on the screen, listen for user input, and take action based on that input.
- A component is a TypeScript class with an HTML template and an optional style sheet.
- Used to break up the application into smaller pieces of reusable code.
- Are reusable and can be used in other components.

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  services: [PostsService],
})
export class AppComponent {
  /** Properties */
  title = "my-app";
}
```

- The `@Component` decorator specifies the Angular metadata for the component.
- The `selector` property defines the HTML tag that represents the component (parent component).
- The `templateUrl` property defines the HTML template for the component.
- The `styleUrls` property defines the CSS styles for the component.
- The `services` property defines the services used by the component.

## Angular Services

- Increase modularity and reusability of code.
- Components can give certain tasks to services and then listen for the result.
- These tasks can be anything such as fetching data from a server, logging data, or validating user input.
- This makes components lean and focused on supporting the view, and makes it easy to unit-test components with a mock service.

## Angular CLI

- Standard tooling for Angular development.
- Create new projects, add files, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
- Dev server and easy production builds.
- Generate components, services, pipes, directives, etc.

###### Install Angular CLI globally

```sh
npm install -g @angular/cli
```

###### Create new project

```sh
ng new my-app
```

###### Run dev server

```sh
ng serve
```

The app will be available at http://localhost:4200

## Working with Components

### First Component

###### app.component.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "My World";
}
```

###### app.component.html

```html
<h1>Welcome to {{ title }}</h1>

<!-- Run any js code -->
{{2 + 5}}
```

###### Output

```
Welcome to My World
7
```

### Create a new component

```sh
ng generate component components/navbar
```

This will create a new folder called `navbar` with the following files:

- `navbar.component.ts`
- `navbar.component.html`
- `navbar.component.css`
- `navbar.component.spec.ts`

Now we can use the `navbar` component in the `app` component.

###### app.component.html

```html
<main>
  <app-navbar></app-navbar>
</main>
```

### Passing data to a component

###### navbar.component.html

```html
<nav>
  <h1>{{title}}</h1>
  <app-button color="green" text="Add"></app-button>
</nav>
```

###### navbar.component.ts

```ts
export class ButtonComponent {
  @Input() text: string;
  @Input() color: string;
}
```

###### button.component.html

```html
<button [ngStyle]="{'background': color}" class="btn">{{text}}</button>

<!-- [ngStyle] is a directive -->
```

### Adding Events to a Component

###### button.component.html

```html
<button (click)="onClick()" class="btn">{{text}}</button>
```

###### button.component.ts

```ts
export class ButtonComponent {
  @Input() text: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
```

The `btnClick` event will be emitted when the button is clicked. We can listen for this event in the `navbar` component or any other component that uses the `button` component.

Every button click works differently. We can pass a function to the `btnClick` event (our custom event) and execute it when the button is clicked.

###### navbar.component.html

```html
<app-button (btnClick)="addTask()" text="Add"></app-button>
```

###### navbar.component.ts

```ts
export class NavbarComponent {
  addTask() {
    console.log("Added Task");
  }
}
```

import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-not-found',
    template: `
        <h2>404 - Page not found</h2>
        <p>You might want to go to the <a [routerLink]="['/dashboard']">Home page</a></p>
    `
})
export class NotFoundComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
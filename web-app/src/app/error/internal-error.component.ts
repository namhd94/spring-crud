import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-internal-error',
    template: `
        <h2>500 - Internal Server Error</h2>
        <p>You might want to go to the <a [routerLink]="['/dashboard']">Home page</a></p>
    `
})
export class InternalErrorComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
import { Component } from "@angular/core";



@Component({
    selector: 'third-component',
    templateUrl: './third.component.html',
    styleUrls: ['./third.component.css']
})
export class ThirdComponent {
    text = "The Third / manually created component"
    constructor(){

    }


}
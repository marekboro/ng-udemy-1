import { Component } from "@angular/core";

@Component({
    selector: '[app-server]',
    templateUrl: './server.component.html',
    styles:[`
        .online {
            background-color: dodgerBlue
        }
        .offline {
            background-color: black
        }
`]

})

export class ServerComponent {
    server_id: string = "12345";
    server_status: string = "offline";

    constructor() {
        this.server_status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.server_status;
    }
    getColor() {
        return this.server_status === 'online' ? "white" : "red"
    }
}
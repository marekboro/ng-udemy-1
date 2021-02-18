import { Component } from "@angular/core";

@Component({
selector: '[app-server]',
templateUrl: './server.component.html'

})

export class ServerComponent {
    server_id:string = "12345";
    server_status:string = "offline";

    getServerStatus(){
        return this.server_status;
    }
}
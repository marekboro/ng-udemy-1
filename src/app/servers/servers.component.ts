import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '.app-servers',
  templateUrl:'./servers.component.html', 
  // template: ` 
  //   <p>servers do work!</p>
  //   <div app-server></div>
  //   <div app-server></div>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created recently!'; 
  cretionClass = "serverCreationStatus1";
  serverName='Enter server name';
  serverCreated=false;
  servers = ['testServer', 'testServer2']
  

  constructor() { 

    

    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "A server with name: "+ this.serverName.toUpperCase() +" was created";
    this.cretionClass = "serverCreationStatus2"
    this.serverCreated=true;
    this.serverName="";
    this.servers.push(this.serverName);

    setTimeout(()=> {
      this.serverCreationStatus = 'No server created recently!';
      this.cretionClass = "serverCreationStatus1";
      this.serverCreated=false;
    },3000)
  }
  onUpdateServerName(event: Event){
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

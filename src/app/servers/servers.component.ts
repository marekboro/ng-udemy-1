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

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}

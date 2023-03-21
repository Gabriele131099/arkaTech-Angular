import { Component } from '@angular/core';

@Component({
  selector: 'app-home-log',
  templateUrl: './home-log.component.html',
  styleUrls: ['./home-log.component.scss']
})
export class HomeLogComponent {
  user:any;
  flagLog:boolean=false;
  ngOnInit() {
   
    let url = window.location.href.split("/")[3]
    this.user = localStorage.getItem("User")
    if (this.user==null && (url!="login" && url!="signUp" && url!="")) {
      console.log()
      window.location.href= "http://localhost:4200/login"
    }
    
  }
}

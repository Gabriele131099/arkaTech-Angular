import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  arrayUsers: any;
  constructor(private httpClient : HttpClient){}
  ngOnInit() {
    this.getData()
    this.logOut()
  }
  async getData() {
    this.httpClient.get('http://localhost:8080/users').subscribe(
      response =>{
        this.arrayUsers = response
        console.log(response)
      }
    )
   
  }
  logOut(){
    if ( localStorage.getItem('User')==null) {
      
    }else{
      if (confirm("CONFERMI IL LOGOUT?")) {
        
        localStorage.removeItem( 'User');
       window.location.href="http://localhost:4200/login"
      }else{
        window.location.href="http://localhost:4200/home"
      }
    }
   
  }
  log() {
    this.getData()
    let user = this.arrayUsers.filter(
      (ele: any) => ele.email == this.profileForm.controls['email'].value
    )[0];
    if (user == undefined) {
      alert('dati non validi');
    }
    console.log(user);
    if (user.password == this.profileForm.controls['password'].value) {
      console.log('loggato');
      window.location.href = 'http://localhost:4200/';
      localStorage.setItem( 'User',JSON.stringify(user));
      let arrayPg:any = localStorage.getItem( 'arrayPg');
      console.log(arrayPg)
      localStorage.setItem( 'arrayPg',JSON.stringify(arrayPg));
    } else {
      alert('dati non validi');
    }
    if (user == undefined) {
      alert('dati non validi');
    }
    console.log(user);
  }
}

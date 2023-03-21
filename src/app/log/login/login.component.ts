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
  ngOnInit() {}
  async getData() {
    await fetch('http://localhost:8080/users')
      .then((response) => response.json())
      .then((toDoListArray) => {
        this.arrayUsers = toDoListArray;
        console.log(this.arrayUsers);
      });
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
    } else {
      alert('dati non validi');
    }
    if (user == undefined) {
      alert('dati non validi');
    }
    console.log(user);
  }
}

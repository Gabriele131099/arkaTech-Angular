import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  profileForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  createUser(){
    let flagEmailExist:any="false";
    let flagUsernameExist:any="false";
       fetch(`http://localhost:8080/usersCheckEmail/${this.profileForm.controls['email'].value}`)
        .then((response) => response.text())
        .then((flag) => {
          flagEmailExist = flag;
          console.log(flagEmailExist+" email");
          if (flagEmailExist=="true") {
            alert("email esistente")
          }
        });
   
        fetch(`http://localhost:8080/usersCheckUsername/${this.profileForm.controls['username'].value}`)
        .then((response) => response.text())
        .then((flag) => {
          flagUsernameExist = flag;
          console.log(flagUsernameExist +" username");
          if (flagUsernameExist=="true") {
            alert("Username esistente")
          }
        });

        if (flagEmailExist=="false" && flagUsernameExist=="false") {
           fetch(`http://localhost:8080/users`, {
            method: "POST",
            body: this.profileForm.controls['username'].value+"/space/"+this.profileForm.controls['email'].value+"/space/"+this.profileForm.controls['password'].value,
          }).then((res) => {
            window.location.href="http://localhost:4200/login"
          
            console.log(res)
          });
        }
  
      }
}

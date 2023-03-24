import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PgServiceService } from 'src/app/service/pg-service.service';

@Component({
  selector: 'app-create-pg',
  templateUrl: './create-pg.component.html',
  styleUrls: ['./create-pg.component.scss']
})
export class CreatePgComponent {

  flagLoadData:boolean = false;
  constructor(public pgService:PgServiceService, private http:HttpClient) { }
  
  createPgForm = new FormGroup({
    characterName: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    alignment: new FormControl('', [Validators.required]),
    background: new FormControl(' ', [Validators.required]),
    personalityTraits: new FormControl('', [Validators.required]),
    ideals: new FormControl('', [Validators.required]),
    bonds: new FormControl('', [Validators.required]),
    flaws: new FormControl('', [Validators.required]),
    raceAndFeatures: new FormControl('', [Validators.required]),
    featuresAndTraits: new FormControl('', [Validators.required]),
    aClass: new FormControl('', [Validators.required]),
  });

  positionForm:number=0;

  arrayBackground:any 
  arrayRace:any 
  
  arrayBackgroundText:any = [];
  arrayRaceAttribute:any = [];
  async ngOnInit() {
    await this.getDataRaces();
    await this.getDataBg();
   setTimeout(() => {
    this.flagLoadData = true
   }, 1000);
  }

  next(){
    this.positionForm++
  }
  back(){
    this.positionForm--
  }


 //bg
 async  getDataBg() {
  this.http.get('http://localhost:8080/bg').subscribe(
   response =>{
    this.arrayBackground = response
   }
   )
   
}
getDataBgForType() {
 if (this.createPgForm.controls['background'].value==undefined) {
   alert("errore")
 }else{
   this.http.get('http://localhost:8080/bg/'+this.createPgForm.controls['background'].value).subscribe(
    response =>{
     console.log(response)
     this.arrayBackgroundText = response
    }
  )
 }
 console.log(name)
}
//races
async getDataRaces() {
  this.http.get('http://localhost:8080/races').subscribe(
   (response) =>{
     console.log(response)
  setTimeout(() => {
    this.arrayRace = response
  }, 1000);
   
   }
 )

}
getDataRaceAttribute() {
 if (this.createPgForm.controls['race'].value==undefined) {
   alert("errore")
 }else{
   this.http.get('http://localhost:8080/race/'+this.createPgForm.controls['race'].value).subscribe(
    response =>{
      console.log(response)
     this.arrayRaceAttribute = response
    }
  )

 }
 console.log(name)
}
  createPg(){
    /** Usage returns typed data */
    // const data = fetch(`http://localhost:8080/pg`, {
    //   method: "POST",
    //   body: "Simon" ,
    // }).then((res) => {
    //   window.location.href="http://localhost:4200/archivio"
    
    //   console.log(res)
    // });
    let jsonPg:any={
      characterName:this.createPgForm.controls['characterName'].value,
      race:this.createPgForm.controls['race'].value,
      alignment:this.createPgForm.controls['alignment'].value,
      background:this.createPgForm.controls['background'].value,
      personalityTraits:this.createPgForm.controls['personalityTraits'].value,
      ideals:this.createPgForm.controls['ideals'].value,
      bonds:this.createPgForm.controls['bonds'].value,
      flaws:this.createPgForm.controls['flaws'].value,
      raceAndFeatures:this.createPgForm.controls['raceAndFeatures'].value,
      featuresAndTraits:this.createPgForm.controls['featuresAndTraits'].value,
      aClass:this.createPgForm.controls['aClass'].value,
  
    }
    console.log(jsonPg)
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
    aClass: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    background: new FormControl(' ', [Validators.required]),
    alignment: new FormControl('', [Validators.required]),
    personalityTraits: new FormControl('', [Validators.required]),
    ideals: new FormControl('', [Validators.required]),
    bonds: new FormControl('', [Validators.required]),
    flaws: new FormControl('', [Validators.required]),
    STR: new FormControl(0, [Validators.required,Validators.max(20), Validators.min(0)]),
    DEX: new FormControl(0, [Validators.required]),
    CON: new FormControl(0, [Validators.required]),
    INT: new FormControl(0, [Validators.required]),
    WIS: new FormControl(0, [Validators.required]),
    CHA: new FormControl(0, [Validators.required]),
  });
  getCharacterName(){
   return this.createPgForm.controls['characterName'].value;;
  }
  getaClass(){
    return this.createPgForm.controls['aClass'].value;;
  }
  getAlignment(){
    return this.createPgForm.controls['alignment'].value;;
  }
  getRace(){
    return this.createPgForm.controls['race'].value;;
  }


getpersonalityTraits()
{
return this.createPgForm.controls['personalityTraits'].value;
}
getideals()
{
return this.createPgForm.controls['ideals'].value;
}
getbonds()
{
return this.createPgForm.controls['bonds'].value;
}
getflaws()
{
return this.createPgForm.controls['flaws'].value;
}
getDEX()
{
return this.createPgForm.controls['DEX'].value;
}
getCON()
{
return this.createPgForm.controls['CON'].value;
}
getINT()
{
return this.createPgForm.controls['INT'].value;
}
getWIS()
{
return this.createPgForm.controls['WIS'].value;
}
getCHA()
{
return this.createPgForm.controls['CHA'].value;
}
  positionForm:number=0;

  arrayBackground:any 
  arrayRace:any 
  arrayAligmen:any = [
   ' N',
    'L/N',
    'L/B',
    'L/M',
    'C/M',
    'C/B',
    'C/N' ,
  ]
  arrayClasses:any
  arrayBackgroundText:any = [];
  arrayRaceAttribute:any = [];
  arrayPg :any
  async ngOnInit() {
    await this.getDataRaces();
    await this.getDataBg();
    await this.getDataClasses();
    this.flagLoadData = true
    this.arrayPg = localStorage.getItem( 'arrayPg');
  }

  next(){
    switch (this.positionForm) {
      case 0:
        if (this.getAlignment()!="" && this.getCharacterName()!="" && this.getAlignment()!="" && this.getRace()!="" ) {
          this.positionForm++
        }
        break;
        case 0:
          if (this.getCHA()!=0 && this.getCON()!=0 && this.getDEX()!=0 && this.getINT()!=0 ) {
            this.positionForm++
          }
          break;
      
      default:
        break;
    }
   
  }
  back(){
    this.positionForm--
  }

  
  //classes
 async  getDataClasses() {
  this.http.get('http://localhost:8080/classes').subscribe(
   response =>{
    this.arrayAligmen = response
   }
   )
   
}
getDataClassesForType() {
 if (this.createPgForm.controls['background'].value==undefined) {
   alert("errore")
 }else{
   this.http.get('http://localhost:8080/classes/'+this.createPgForm.controls['aClass'].value).subscribe(
    response =>{
     console.log(response)
     this.arrayBackgroundText = response
    }
  )
 }
 console.log(name)
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
      flaws:this.createPgForm.controls['flaws'
    ].value,
      aClass:this.createPgForm.controls['aClass'].value,
      DEX: this.createPgForm.controls['DEX'].value,
      CON: this.createPgForm.controls['CON'].value,
      INT: this.createPgForm.controls['INT'].value,
      WIS: this.createPgForm.controls['WIS'].value,
      CHA: this.createPgForm.controls['CHA'].value,
    }
    console.log(jsonPg)
  }
}

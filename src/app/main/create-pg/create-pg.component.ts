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
  constructor(public pgService:PgServiceService) { }
  
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

  arrayBackground:any =  this?.pgService?.getDataBg().catch((error:string)=>console.log(error));
  arrayRace:any = this?.pgService?.getDataRaces().catch((error:string)=>console.log(error));
  
  arrayBackgroundText:any;
  arrayRaceAttribute:any;
  ngOnInit() {
   
  }

  next(){
    this.positionForm++
  }
  back(){
    this.positionForm--
  }

  getDataBgForType(){
    let s:String|undefined = this.createPgForm.controls['background'].value?.toString();
    this.arrayBackgroundText = this.pgService.getDataBgForType(s);
  }
  getDataRaceAttribute(){
    let s:String|undefined = this.createPgForm.controls['race'].value?.toString();
    this.arrayRaceAttribute = this.pgService.getDataRaceAttribute(s);
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

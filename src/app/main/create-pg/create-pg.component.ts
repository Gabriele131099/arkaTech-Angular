import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RacesService } from 'src/app/service/races.service';

@Component({
  selector: 'app-create-pg',
  templateUrl: './create-pg.component.html',
  styleUrls: ['./create-pg.component.scss']
})
export class CreatePgComponent {
  constructor(private races:RacesService) { }
  
  createPgForm = new FormGroup({
    characterName: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),

    alignment: new FormControl('', [Validators.required]),
    background: new FormControl('', [Validators.required]),
    personalityTraits: new FormControl('', [Validators.required]),
    ideals: new FormControl('', [Validators.required]),
    bonds: new FormControl('', [Validators.required]),
    flaws: new FormControl('', [Validators.required]),
    raceAndFeatures: new FormControl('', [Validators.required]),
    featuresAndTraits: new FormControl('', [Validators.required]),
    aClass: new FormControl('', [Validators.required]),

  });
  arrayRace:String[] = this.races.arrayRaces
  positionForm:number=0;
  next(){
    this.positionForm++
  }
  back(){
    this.positionForm--
  }
  createPg(){
    /** Usage returns typed data */
    const data = fetch(`http://localhost:8080/pg`, {
      method: "POST",
      body: "Simon" ,
    }).then((res) => {
      window.location.href="http://localhost:4200/archivio"

      console.log(res)
    });
  }
}

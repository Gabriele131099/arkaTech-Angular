import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-archivio',
  templateUrl: './archivio.component.html',
  styleUrls: ['./archivio.component.scss']
})
export class ArchivioComponent {
  arrayPg: any;
  user:any
  constructor(private httpClient:HttpClient){}
  ngOnInit() {
    this.getData()
    this.user =  window?.localStorage?.getItem("User");
  console.log(JSON.parse(this.user));
  this.user = JSON.parse(this.user);
  this.httpClient.get('http://localhost:8080/'+this.user.id).subscribe(
    response =>{
      this.user = response;
      console.log(this.user)
    })
  }
  async getData() {
    this.httpClient.get('http://localhost:8080/pg').subscribe(
      response =>{
        this.arrayPg = response
        this.arrayPg.push({
         id:1, 
          userId:12, 
          characterName:"Kilua", 
          playerName:"Ken", 
          race:"Elfo", 
          alignment:"Alto", 
          classLevel:1, 
          background:"Rapitore", 
          personalityTraits:"", 
          ideals:"", 
          bonds:"", 
          flaws:"", 
          XP:1, 
          STR:1, 
          strMod:1, 
          DEX:1, 
          dexMod:1, 
          CON:1, 
          conMod:1, 
          INT:1, 
          intMod:1, 
          WIS:1, 
          wisMod:1, 
          CHA:1, 
          chaMod:1, 
          passive:1, 
          profBonus:1, 
          initiative:1, 
          speed:1, 
          hpMax:1, 
          hdTotal:1, 
          HD:1, 
          raceBonuses:"", 
          raceAndFeatures:"", 
          featuresAndTraits:"", 
          aClass:""
        })
         this.arrayPg =  this.arrayPg.filter((ele:any)=>ele.userId==this.user.id)
        console.log(this.arrayPg)
      }
    )
  
    }
}

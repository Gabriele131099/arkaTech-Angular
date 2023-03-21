import { Component } from '@angular/core';
import { RacesService } from 'src/app/service/races.service';

@Component({
  selector: 'app-create-pg',
  templateUrl: './create-pg.component.html',
  styleUrls: ['./create-pg.component.scss']
})
export class CreatePgComponent {
  constructor(private races:RacesService) { }
  arrayRace:String[] = this.races.arrayRaces

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

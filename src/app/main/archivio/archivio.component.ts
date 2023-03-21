import { Component } from '@angular/core';

@Component({
  selector: 'app-archivio',
  templateUrl: './archivio.component.html',
  styleUrls: ['./archivio.component.scss']
})
export class ArchivioComponent {
  arrayPg: any;
  ngOnInit() {
    this.getData()
  }
  async getData() {
    await fetch('http://localhost:8080/pg')
      .then((response) => response.json())
      .then((toDoListArray) => {
        this.arrayPg = toDoListArray;
        console.log(this.arrayPg);
      });

     
  }

}

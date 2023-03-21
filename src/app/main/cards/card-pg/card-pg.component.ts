import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-pg',
  templateUrl: './card-pg.component.html',
  styleUrls: ['./card-pg.component.scss']
})
export class CardPgComponent {
  @Input() pg:any;
  ngOnInit(){}

  delete(id:string){
    fetch(`http://localhost:8080/pg/${id}`, 
    {  method: "DELETE"})
    .then(response => {
        console.log(response.status); 
        window.location.href="http://localhost:4200/archivio"
      }).catch(error=>(console.log(error)));   
  }
}

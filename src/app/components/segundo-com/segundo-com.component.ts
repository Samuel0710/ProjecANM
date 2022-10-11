import { Component, OnInit } from '@angular/core';
import { Animes } from 'src/app/model/animeMo.model';
import { ServerService } from 'src/app/server/server.service';

@Component({
  selector: 'app-segundo-com',
  templateUrl: './segundo-com.component.html',
  styleUrls: ['./segundo-com.component.scss'],
})
export class SegundoComComponent implements OnInit {
  animes: any;
  erro: any;

  constructor(private crudServer: ServerService) { 
    this.getter();
  }

  ngOnInit() {}
getter(){
  this.crudServer.getAnime().subscribe(
    (data: Animes)=>{this.animes = data;
      console.log('a variavel que prenchemos', this.animes);
    },
    error=>{
      this.erro= error;
      console.error=(error);
    });
}
}

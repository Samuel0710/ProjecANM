import { Data } from './../../model/Data';

import { Component, OnInit } from '@angular/core';
import { Animes } from 'src/app/model/animeMo.model';
import { ServerService } from 'src/app/server/server.service';

@Component({
  selector: 'app-segundo-com',
  templateUrl: './segundo-com.component.html',
  styleUrls: ['./segundo-com.component.scss'],
})
export class SegundoComComponent implements OnInit {

  animes:Animes[]=[];
  erro: any;
  data: Data[]=[];

  constructor(private crudServer: ServerService) {
    this.getter();
  }

  ngOnInit() {}
getter(){
  this.crudServer.getAnime().subscribe(
    (data: Animes)=>{this.animes.push({
      paginition: data.paginition,
      data: data.data
    });
    this.data=this.animes[0].data;
    console.log ('parametro data',this.data);
      console.log('lista', this.animes);
      console.log('lista data',data);
    },
    error=>{
      this.erro= error;
      console.error=(error);
    });

}
}

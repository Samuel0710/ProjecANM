import { Animes } from 'src/app/model/animeMo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})

export class ServerService {
  constructor(private http: HttpClient) { }
    public getAnime(): Observable<any>{
     return this.http.get(`https://api.jikan.moe/v4/anime`);
     }
     
  
}

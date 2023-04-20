import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=&appid=';
  key = 'f562919bf2b054c4c9a7eccd0ce38537';
  
  constructor(private http:HttpClient) { }

  getClima(ciudad:string): Observable<any>{
    const url  = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key}`;
    return this.http.get(url);
  }
  
}

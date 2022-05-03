import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { WEATHER} from  './WEATHER'
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private dataEndpoint = 'http:localhost:3000';

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get<WEATHER>(this.dataEndpoint);
  }
}

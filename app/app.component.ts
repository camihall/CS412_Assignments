import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "./app-service.service";
import {Observable} from 'rxjs';
import {NONE_TYPE} from "@angular/compiler";
import {WEATHER} from "./WEATHER";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome to PS5';
  data: WEATHER[] | undefined;

  private dataEndpoint = 'http://localhost:3000'

  constructor(private service: AppServiceService){

  }

  ngOnInit(){
    this.getDataFromAPI();
  }


  getDataFromAPI(){
    this.service.getData().subscribe((response) => {
      console.log('Response from API is ', response);
      this.data = [response];
    });
  }
}


import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature: string = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  // to intialse something when app starts
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDiaz0Pwp3EXqx3QpUj88Ua81wtSmwF9sw",
      authDomain: "ng-recipe-book-12729.firebaseapp.com",
    });
  }
}

import { Component } from '@angular/core';
import * as mjs from "mathjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myE: number = mjs.e; 
}

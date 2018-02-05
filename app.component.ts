import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
 mapClicked(cordinates)
{
  this.lat = cordinates.lat
  this.lng = cordinates.lng
  console.log(cordinates)
}

centerChanged(x)
{
  console.log(x)
}}





import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';

  units: any;

  selectedRoute: any;

  cityRoutes = {
    'burbank': {name: 'Burbank',  id: 5331835},
    'chicago': {name: 'Chicago',  id: 4887398},
    'dallas': {name: 'Dallas',  id: 4684888},
    'dc': {name: 'Washington, DC',  id: 4366164},
    'sanjose': {name: 'San Jose', id: 5392171},
    'seattle': {name: 'Seattle',  id: 5809844},
  };

  cities = [
    {name: 'Burbank, CA', route: 'burbank', id: 5331835},
    {name: 'Chicago, IL', route: 'chicago', id: 4887398},
    {name: 'Dallas, TX', route: 'dallas', id: 4684888},
    {name: 'Washington, DC', route: 'dc', id: 4366164},
    {name: 'San Jose, CA', route: 'sanjose', id: 5392171},
    {name: 'Seattle, WA', route: 'seattle', id: 5809844},
  ]

  // unitKeys = {Kelvin: 'Standard', Celsius: 'Metric', Fahrenheit: 'Imperial'}
  // tempUnits = ['Kelvin', 'Celsius', 'Fahrenheit']

  constructor(private _httpService: HttpService,
    private _router: Router) {}
  ngOnInit() {
    
  }




  // chooseRoute(route) {
  //   this.selectedRoute = route;
  // }
  // setUnits(tempUnit) {
    
  //   this._httpService.setUnits(this.unitKeys[tempUnit]);
  //   this._httpService.refresh();
  // }
}

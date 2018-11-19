import { Component } from '@angular/core';
import {Owner} from './shared/models/owner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 1;

owners: Owner[] = [
  {ownerId: 1, firstName: 'Jan', lastName: 'Jorgensen'},
  {ownerId: 2, firstName: 'Ole', lastName: 'Jorgensen'}


  ];



}

import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: Housinglocation;

}

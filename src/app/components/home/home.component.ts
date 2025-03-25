import { Component , inject} from '@angular/core';
import { HousingLocationComponent } from '../housinglocation/housinglocation.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 housinglocationList: Housinglocation[] = [];

 HousingService: HousingService = inject(HousingService);
 
  constructor() { 
    this.housinglocationList = this.HousingService.getAllHousingLocations();
  }

}

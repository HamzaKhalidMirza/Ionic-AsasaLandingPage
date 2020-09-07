import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer-registration',
  templateUrl: './dealer-registration.page.html',
  styleUrls: ['./dealer-registration.page.scss'],
})
export class DealerRegistrationPage implements OnInit {

  citiesSelection: any = false;
  cities: any = [];

  constructor() { }

  ngOnInit() {
    this.cities = [ 'Karachi', 'Islamabad', 'Lahore', 'Faisalabad',
                   'Rawalpindi', 'Multan', 'Gujranwala', 'Hyderabad City', 'Peshawar',
                   'Abbottabad', 'Quetta', ' Bannu', 'Sargodha', 'Other'
                  ];
  }

  selectCity() {
    this.citiesSelection = true;
  }
  unSelectCity() {
    this.citiesSelection = false;
  }
}

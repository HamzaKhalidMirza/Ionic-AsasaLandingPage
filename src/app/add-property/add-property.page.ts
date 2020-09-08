import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {

  selection: any;
  propertyTypes: any = [];
  areaUnits: any = [];
  addPropertyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.selection = 'Sale';
    this.areaUnits = [ 'Kanal', 'Marla', 'Sq. Feet', 'Sq. Yard' ];
    this.propertyTypes = [ 'Apartment', 'House','Penthouse', 'Farm House',
                           'Shop', 'Plaza', 'Office', 'Floor',
                           'Residential Plot', 'Commercial Plot', 'Farm House Plot' ];
    this.formInitializer();
  }

  formInitializer() {
    this.addPropertyForm = this.formBuilder.group({
      name: [''],
      email: [''],
      mobileNo: [''],
      city: [''],
      propertyDetails: [''],
      propertyType: [''],
      landArea: [''],
      landAreaUnit: [''],
      demandArea: [''],
      message: ['']
    });
  }

  selectSale() {
    this.selection = 'Sale';
  }
  selectRent() {
    this.selection = 'Rent';
  }
}

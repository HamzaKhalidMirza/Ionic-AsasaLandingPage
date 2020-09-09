import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTestimonialPage } from './add-testimonial.page';

describe('AddTestimonialPage', () => {
  let component: AddTestimonialPage;
  let fixture: ComponentFixture<AddTestimonialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestimonialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTestimonialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetidorComponent } from './add-competidor.component';

describe('AddCompetidorComponent', () => {
  let component: AddCompetidorComponent;
  let fixture: ComponentFixture<AddCompetidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompetidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetidorComponent } from './edit-competidor.component';

describe('EditCompetidorComponent', () => {
  let component: EditCompetidorComponent;
  let fixture: ComponentFixture<EditCompetidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompetidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

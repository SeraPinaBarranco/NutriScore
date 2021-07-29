import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarIngredienteComponent } from './agregar-ingrediente.component';

describe('AgregarIngredienteComponent', () => {
  let component: AgregarIngredienteComponent;
  let fixture: ComponentFixture<AgregarIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarIngredienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

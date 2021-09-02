import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRecetasComponent } from './listar-recetas.component';

describe('ListarRecetasComponent', () => {
  let component: ListarRecetasComponent;
  let fixture: ComponentFixture<ListarRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

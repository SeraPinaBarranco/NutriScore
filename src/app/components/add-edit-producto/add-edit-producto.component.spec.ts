import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductoComponent } from './add-edit-producto.component';

describe('AddEditProductoComponent', () => {
  let component: AddEditProductoComponent;
  let fixture: ComponentFixture<AddEditProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

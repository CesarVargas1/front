import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdTablapartidoComponent } from './amd-tablapartido.component';

describe('AmdTablapartidoComponent', () => {
  let component: AmdTablapartidoComponent;
  let fixture: ComponentFixture<AmdTablapartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdTablapartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdTablapartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

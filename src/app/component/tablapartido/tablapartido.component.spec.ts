import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapartidoComponent } from './tablapartido.component';

describe('TablapartidoComponent', () => {
  let component: TablapartidoComponent;
  let fixture: ComponentFixture<TablapartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

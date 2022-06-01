import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeiasVirtualComponent } from './teias-virtual.component';

describe('TeiasVirtualComponent', () => {
  let component: TeiasVirtualComponent;
  let fixture: ComponentFixture<TeiasVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeiasVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeiasVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

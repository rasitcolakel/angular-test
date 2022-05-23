import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeiasComponent } from './teias.component';

describe('TeiasComponent', () => {
  let component: TeiasComponent;
  let fixture: ComponentFixture<TeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

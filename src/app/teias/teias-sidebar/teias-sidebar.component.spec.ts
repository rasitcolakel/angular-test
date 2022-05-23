import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeiasSidebarComponent } from './teias-sidebar.component';

describe('TeiasSidebarComponent', () => {
  let component: TeiasSidebarComponent;
  let fixture: ComponentFixture<TeiasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeiasSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeiasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

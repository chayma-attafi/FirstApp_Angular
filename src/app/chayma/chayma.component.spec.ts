import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaymaComponent } from './chayma.component';

describe('ChaymaComponent', () => {
  let component: ChaymaComponent;
  let fixture: ComponentFixture<ChaymaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaymaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaymaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

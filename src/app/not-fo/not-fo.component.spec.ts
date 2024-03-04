import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoComponent } from './not-fo.component';

describe('NotFoComponent', () => {
  let component: NotFoComponent;
  let fixture: ComponentFixture<NotFoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

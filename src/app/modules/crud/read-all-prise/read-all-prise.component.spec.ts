import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllPriseComponent } from './read-all-prise.component';

describe('ReadAllPriseComponent', () => {
  let component: ReadAllPriseComponent;
  let fixture: ComponentFixture<ReadAllPriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllPriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadAllPriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

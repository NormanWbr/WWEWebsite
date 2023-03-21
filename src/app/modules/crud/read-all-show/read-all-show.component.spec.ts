import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllShowComponent } from './read-all-show.component';

describe('ReadAllShowComponent', () => {
  let component: ReadAllShowComponent;
  let fixture: ComponentFixture<ReadAllShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadAllShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllSuperstarComponent } from './read-all-superstar.component';

describe('ReadAllSuperstarComponent', () => {
  let component: ReadAllSuperstarComponent;
  let fixture: ComponentFixture<ReadAllSuperstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllSuperstarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadAllSuperstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

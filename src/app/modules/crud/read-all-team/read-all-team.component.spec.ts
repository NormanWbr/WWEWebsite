import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllTeamComponent } from './read-all-team.component';

describe('ReadAllTeamComponent', () => {
  let component: ReadAllTeamComponent;
  let fixture: ComponentFixture<ReadAllTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadAllTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

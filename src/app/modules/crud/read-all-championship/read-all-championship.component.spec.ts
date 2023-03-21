import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllChampionshipComponent } from './read-all-championship.component';

describe('ReadAllChampionshipComponent', () => {
  let component: ReadAllChampionshipComponent;
  let fixture: ComponentFixture<ReadAllChampionshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAllChampionshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadAllChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

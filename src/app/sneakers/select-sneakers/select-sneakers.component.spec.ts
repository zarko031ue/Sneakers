import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSneakersComponent } from './select-sneakers.component';

describe('SelectSneakersComponent', () => {
  let component: SelectSneakersComponent;
  let fixture: ComponentFixture<SelectSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSneakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

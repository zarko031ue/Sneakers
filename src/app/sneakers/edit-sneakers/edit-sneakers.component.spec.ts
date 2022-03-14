import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSneakersComponent } from './edit-sneakers.component';

describe('EditSneakersComponent', () => {
  let component: EditSneakersComponent;
  let fixture: ComponentFixture<EditSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSneakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

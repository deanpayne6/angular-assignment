import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringManagerEmailComponent } from './hiring-manager-email.component';

describe('HiringManagerEmailComponent', () => {
  let component: HiringManagerEmailComponent;
  let fixture: ComponentFixture<HiringManagerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringManagerEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringManagerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

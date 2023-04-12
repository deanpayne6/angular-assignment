import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringManagerNameComponent } from './hiring-manager-name.component';

describe('HiringManagerNameComponent', () => {
  let component: HiringManagerNameComponent;
  let fixture: ComponentFixture<HiringManagerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringManagerNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringManagerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

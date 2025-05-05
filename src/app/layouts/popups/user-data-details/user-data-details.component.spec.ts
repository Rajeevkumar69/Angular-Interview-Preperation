import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataDetailsComponent } from './user-data-details.component';

describe('UserDataDetailsComponent', () => {
  let component: UserDataDetailsComponent;
  let fixture: ComponentFixture<UserDataDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataDetailsComponent]
    });
    fixture = TestBed.createComponent(UserDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

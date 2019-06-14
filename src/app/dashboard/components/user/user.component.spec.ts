import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User } from '../../services/user/user.service';
import { UserComponent } from './user.component';

const testUser: User = {
  email: 'test@email.com',
  firstName: 'TestFirst',
  lastName: 'TestLast'
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = testUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

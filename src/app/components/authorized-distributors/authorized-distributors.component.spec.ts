import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedDistributorsComponent } from './authorized-distributors.component';

describe('AuthorizedDistributorsComponent', () => {
  let component: AuthorizedDistributorsComponent;
  let fixture: ComponentFixture<AuthorizedDistributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedDistributorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

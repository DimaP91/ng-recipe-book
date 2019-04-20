import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { DebugElement } from '@angular/core';
import { AuthService } from '../auth.service';
import { By } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

class AuthServiceStub {

}

describe('Signin component:', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule],
      declarations: [ SigninComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have form with two inputs', () => {
    const form = de.query(By.css('form'));
    expect(form).not.toBeNaN();
    expect(form.queryAll(By.css('input')).length).toBe(2);
  });

  it('shold no vilidate if form is empty', () => {
    const form = de.query(By.css('form'));
    console.log(component);
  });
});

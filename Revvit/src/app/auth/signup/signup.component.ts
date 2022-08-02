import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  signupForm: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void{
    this.signupForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]'
          ),
          Validators.minLength(8),
        ]
      ],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      job: ['', Validators.required],
    });
  }

  get username(){
    return this.signupForm.get('username')
  }

  get password(){
    return this.signupForm.get('password')
  }

  get email(){
    return this.signupForm.get('email')
  }

  get job(){
    return this.signupForm.get('job')
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }
}

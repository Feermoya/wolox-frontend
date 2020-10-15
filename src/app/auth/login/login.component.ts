import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../class/user';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: User;
  remember = false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {
    console.log(this.form);

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      });

    } else {
      this.loginService.post(this.form.value).subscribe((data) => {
        console.log("post");
        const token = data;
        if (localStorage.getItem('remember') === '1') {

        } else {
          localStorage.setItem('token', null);
        }
        if (this.remember) {
          this.loginService.saveToken(token);
          this.router.navigate(['/techs']);
          localStorage.setItem('remember', '1')
        } else {
          localStorage.setItem('remember', '2');
          this.loginService.saveToken(token);
          this.router.navigate(['/techs']);
        }
      }, (error) => {
        console.warn(error);
      }
      );
    }
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required],
      remember: false
    });
  }

  //validators
  get emailInvalid() {
    return this.form.get('email').invalid &&
      this.form.get('email').touched;
  }

  get passwordInvalid() {
    return this.form.get('password').invalid &&
      this.form.get('password').touched;
  }

}

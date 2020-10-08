import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    // this.usuario = new UsuarioModel();
    // this.usuario.email = 'user@wolox.com.ar';
    this.createForm();
  }

  onSubmit() {
    console.log(this.form);

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      });

    } else {
      this.loginService.post(this.form.value).subscribe((data) => {
        console.log("else post");
        console.log(data);
      });
    }
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required]
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

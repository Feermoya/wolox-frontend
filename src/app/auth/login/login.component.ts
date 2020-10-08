import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from '../../class/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuario: UsuarioModel;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    this.usuario.email = 'user@wolox.com.ar';
    this.createForm();
  }

  onSubmit() {

  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
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

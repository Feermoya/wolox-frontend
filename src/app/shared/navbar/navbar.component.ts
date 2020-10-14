import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('remember') === '2') {
      this.onLogout();
    }
  }

  scroll(): void {
    document.getElementById('homeBoton').click();
    setTimeout(function () {
      document.getElementById("benefits").scrollIntoView();
    }, 300);

  }

  onLogout(): void {
    this.loginService.logout();
  }

}

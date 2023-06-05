import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm !: FormGroup;
  passRegex!: RegExp;

  constructor(private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder){}

    ngOnInit(): void {
      this.passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      this.loginForm = this.formBuilder.group({
          login: [null, [Validators.required]],
          password: [null, [Validators.required, Validators.pattern(this.passRegex)]]
      });
    }

  onLogin(): void {
this.auth.login(this.loginForm.value.login,
  this.loginForm.value.password);
this.router.navigateByUrl('films');
  }
}

import { Component } from '@angular/core';
import{ FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistroComponent } from "../registro/registro.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink, RouterOutlet, RegistroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    formularioLogin = new FormGroup
    ({
        correo: new FormControl('',[Validators.required,Validators.email]),
        contraseña: new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern('^[A-Za-z0-9]+$')])
    })

}

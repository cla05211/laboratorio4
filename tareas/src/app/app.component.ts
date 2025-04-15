import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from "./pages/bienvenida/bienvenida.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from "./pages/./registro/registro.component";
import { ErrorComponent } from "./pages/error/error.component";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormsModule, LoginComponent, BienvenidaComponent, RegistroComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

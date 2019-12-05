import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Usuario } from './usuarios/usuario';

/**
 * The app component. This component is the base of s3_vinilos-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s3_vinilos-Front";
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService) { }
    usuario: Usuario;
    login(idUsuario: number): void {
this.authService.login()
    }

    logout(): void {
        this.authService.logout()
    }

}






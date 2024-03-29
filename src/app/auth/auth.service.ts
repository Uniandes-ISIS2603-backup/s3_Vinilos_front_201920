import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';

const usuarios = '../../assets/usuarios.json';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router) { }

    start (): void {

    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (correo: String, contrasena: String): void {
        var i = 0;
        for (i = 0; i < usuarios.length; i++){
            var pCorreo = usuarios[i]['correo'];
            var pContra = usuarios[i]['correo'];
            if(pCorreo == correo && pContra == contrasena){
                this.router.navigateByUrl('/usuario/i');
            }
        }
        
        
    }

    /**
     * Logs the user out
     */
    logout (): void {
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}

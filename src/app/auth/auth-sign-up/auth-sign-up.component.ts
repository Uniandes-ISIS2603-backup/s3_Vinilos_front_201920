import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { Usuario } from '../../usuarios/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'app/core/services/usuarios.service';
import { UsuarioDetail } from 'app/usuarios/usuario-detail';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private usuariosService : UsuariosService,
        private formBuilder: FormBuilder
    ) {
        this.buildForm();
     }

    usuario: Usuario;
    form: FormGroup;



    buildForm(){
        this.form = this.formBuilder.group({
            nombre : [''],
            contrasena : [''],
            celular: [''],
            correo: [''],
            fechaNacim: [''],
            pais: [''],
            direccion: ['']
        });
    }
    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        let respuesta = '';
        let correo = (this.form.value.correo);
        for (let index = 0; index < correo.length; index++) {
    
          let temp = correo.charCodeAt(index);
          respuesta = respuesta + temp;
          
        }
        
        let fechaTemp :string= this.form.value.fechaNacim +'T00:00:00Z[UTC]';
        console.log(fechaTemp);

        let  tempo: UsuarioDetail ={
            nombre : this.form.value.nombre,
            contraseña : this.form.value.contrasena,
            celular: this.form.value.celular,
            correo: respuesta,
            fechaNacim: fechaTemp,
            pais: this.form.value.pais,
            direccion: this.form.value.direccion

        };
        console.log(tempo);
        this.usuariosService.postUsuarioCorreo(tempo).subscribe();
        this.toastrService.success('Successfully signed up')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
    }

}

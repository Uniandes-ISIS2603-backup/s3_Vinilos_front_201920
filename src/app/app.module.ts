import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';

import { ViniloModule } from './vinilo/vinilo.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArtistaModule } from "./artistas/artista.module";
import { GeneroModule } from "./genero/genero.module";
import { EnvioModule } from "./envio/envio.module";

import { VinilosFavoritosModule } from "./vinilosFavoritos/vinilosFavoritos.module";

import { UsuarioModule } from "./usuarios/usuario.module";
import { WelcomeComponent } from './welcome/welcome.component';
<<<<<<< HEAD

import { CarritoModule } from './carrito/carrito.module';



=======
import { CarritoModule } from './Carrito/carrito.module';
>>>>>>> 23ca95bd633bab5942314f59517cf8caba065493


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        WelcomeComponent
    
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        ViniloModule,
        PedidosModule,
        ArtistaModule,
        GeneroModule,
        EnvioModule,
        VinilosFavoritosModule,
<<<<<<< HEAD
        UsuarioModule,

    ],
=======
        UsuarioModule, 
        CarritoModule],
>>>>>>> 23ca95bd633bab5942314f59517cf8caba065493
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}

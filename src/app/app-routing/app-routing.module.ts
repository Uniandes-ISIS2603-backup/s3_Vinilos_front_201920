import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import { UsuarioDetailComponent } from '../usuarios/usuario-detail/usuario-detail.component';
import { ViniloDetailComponent } from '../vinilo/vinilo-detail/vinilo-detail.component';
import { ViniloListComponent } from '../vinilo/vinilo-list/vinilo-list.component';
import { GeneroListComponent } from '../genero/genero-list/genero-list.component';
import { HomeComponent } from 'app/home/home.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { ArtistaListComponent } from "../artistas/artista-list/artista-list.Component";
import {ArtistaDetailComponent} from '../artistas/artista-detail/artista-detail.component';
import { EnvioDetailComponent } from '../envio/envio-detail/envio-detail.component';
import { EnvioListComponent } from '../envio/envio-list/envio-list.component';
import { FavoritosListComponent } from '../vinilosFavoritos/favoritos-list/favoritos-list.component';
import { CarritoListComponent } from "../Carrito/carrito-list/carrito-list.Component";
import { Usuario } from 'app/usuarios/usuario';
import { NavComponentVinilo } from 'app/vinilo/nav/nav.component';

const routes: Routes = [

    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
    //            canActivate: [NgxPermissionsGuard],
    //            data: {
    //                permissions: {
    //                    only: ['GUEST']
    //                }
    //            }
            },
            {
                path: 'sign-up',
                component: AuthSignUpComponent,
   //             canActivate: [NgxPermissionsGuard],
   //             data: {
   //                 permissions: {
   //                     only: ['GUEST']
   //                 }
    //            }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: 'vinilos/list',
        component: ViniloListComponent
    },
    {

        path: 'vinilos',
        component: NavComponentVinilo,
        children: [
        {
            path: ':id',
            component: ViniloDetailComponent
        }
        ]
    },
    {
        path: 'artista',
        children: [
        {
            path: 'list',
            component: ArtistaListComponent
        },
        {
            path: ':id',
            component: ArtistaDetailComponent
        }
        ]
    },
    {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosModule)

    },
    {
        path:'genero',
        children: [{
            path:'list',
            component:GeneroListComponent
        }]
    },
    {
        path:'vinilosFavoritos',
        children: [{
            path:'list',
            component:FavoritosListComponent
        }]
    },
  
    {
        path:'envio',
        children: [{
            path:'list',
            component:EnvioListComponent
        },
        {
            path: ':id',
            component: EnvioDetailComponent
          }]
    },

    {
        path:'usuario',
        children: [{
            path:':id',
            component:UsuarioDetailComponent
        }]

<<<<<<< HEAD
<<<<<<< HEAD
    }
    ,
    {
        path:'carrito',
        children: [{
            path:':list',
            component:ArtistaListComponent
        }]

=======
>>>>>>> parent of 23636b5d... Carrito
=======
>>>>>>> parent of 23636b5d... Carrito
    }
];
@NgModule({
        imports: [
            RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule],
        declarations: []
    })
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import { ViniloDetailComponent } from '../vinilo/vinilo-detail/vinilo-detail.component';
import { ViniloListComponent } from '../vinilo/vinilo-list/vinilo-list.component';
import { HomeComponent } from 'app/home/home.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import {ArtistaListComponent} from '../artistas/artista-list/artista-list.component';
import {ArtistaDetailComponent} from '../artistas/artista-detail/artista-detail.component';

const routes: Routes = [

    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    /**{
        path: '**',
        redirectTo: 'home',
    },*/
    {
        path: 'vinilos',
        children: [{
            path: 'list',
            component: ViniloListComponent
        },
        {
            path: ':id',
            component: ViniloDetailComponent
        }
        ]
    },
    {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosModule)

    },
    {
        path: 'artistas',
        children: [{
            path: 'list',
            component: ArtistaListComponent
        },
        {
            path: ':id',
            component: ArtistaDetailComponent
        }
        ]
    }
];
@NgModule({
        imports: [
            CommonModule,
            RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
        ],
        exports: [RouterModule],
        declarations: []
    })
export class AppRoutingModule {

}

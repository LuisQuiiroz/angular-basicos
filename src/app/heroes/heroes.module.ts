import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        // Componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        //Cosas que quiero hacer publicas o visibles fuera de este modulo
        ListadoComponent
    ],
    imports: [
        // Modulos
        CommonModule
    ]
})
export class HeroesModule { }

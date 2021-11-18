import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        // Modulos
        CommonModule
    ]
})
export class ContadorModule {}
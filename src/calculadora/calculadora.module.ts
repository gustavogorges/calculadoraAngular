import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { calculadoraComponent } from "./calculadora.component";
import { BotoesModule } from "src/botoes/botoes.module";


@NgModule({
    declarations: [
        calculadoraComponent
    ],
    imports: [
        BrowserModule, BotoesModule
    ],
    exports: [
        calculadoraComponent
    ]

})

export class calculadoraModule{}
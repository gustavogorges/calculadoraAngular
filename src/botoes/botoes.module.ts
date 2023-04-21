import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BotoesComponent } from "./botoes.component";



@NgModule({
    imports: [CommonModule],
    declarations: [BotoesComponent],
    exports: [BotoesComponent]
})
export class BotoesModule{}
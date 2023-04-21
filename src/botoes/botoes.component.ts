import { Component, Input } from "@angular/core";



@Component({
    selector: 'app-botoes',
    templateUrl: './botoes.component.html',
    styleUrls: ['./botoes.component.css']
})
export class BotoesComponent{
    @Input()
    largura = '';
    @Input()
    altura = '';
    @Input()
    conteudo = '';
}
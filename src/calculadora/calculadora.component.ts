import { Component } from "@angular/core";

@Component({
  selector: "calculadora-root",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"],
})
export class calculadoraComponent {
  resultado: string = "";
  numeroNumber: Number;
  numero: Number;
  operacao: string;
  remover: string = "";
  conta;
 
  // number1:Number = 0;
  // number2:Number = 0;
  // number3:Number = 0;
  // number4:Number = 0;

  addHTMLnumber(numero: string): void {
    this.resultado += `${numero}`;
  }

  addHTMLresult(): void {
    this.resultado = `${this.conta}`;
  }

  addHTMLtext(operacao: string): void {
    this.resultado += `${operacao}`;
    this.conta += eval(operacao);
  }

  removeHTMLtext(remover: String): void {
    this.resultado = `${remover}`;
  }

  clickBtn0(): void {
    this.addHTMLnumber("0");
  }

  clickBtn1(): void {
    this.addHTMLnumber("1");
  }

  clickBtn2(): void {
    this.addHTMLnumber("2");
  }

  clickBtn3(): void {
    this.addHTMLnumber("3");
  }

  clickBtn4(): void {
    this.addHTMLnumber("4");
  }

  clickBtn5(): void {
    this.addHTMLnumber("5");
  }

  clickBtn6(): void {
    this.addHTMLnumber("6");
  }

  clickBtn7(): void {
    this.addHTMLnumber("7");
  }

  clickBtn8(): void {
    this.addHTMLnumber("8");
  }

  clickBtn9(): void {
    this.addHTMLnumber("9");
  }

  clickBtnAdicao(): void {
    this.addHTMLtext("+");
  }

  clickBtnSubtracao(): void {
    this.addHTMLtext("-");
  }

  clickBtnDivisao(): void {
    this.addHTMLtext("/");
  }

  clickBtnMultiplicacao(): void {
    this.addHTMLtext("*");
  }

  clickBtnApagar(): void {
    this.removeHTMLtext(" ");
  }

  clickBtnIgual(): void {
    this.conta = eval(String(this.resultado));
    this.addHTMLresult();
  }

  clickBtnApagar1(): void {
    let tamanhoDisplay = this.resultado.length;
    this.resultado = this.resultado.substring(0, tamanhoDisplay -1);
  }
}

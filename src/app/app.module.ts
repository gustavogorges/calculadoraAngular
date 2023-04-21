import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { calculadoraModule } from 'src/calculadora/calculadora.module';
import { BotoesModule } from 'src/botoes/botoes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, calculadoraModule, BotoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

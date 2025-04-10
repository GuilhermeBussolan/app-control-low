import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  mostrar: boolean = false;
  color: string = "red";
  cores = ["azul", "amarelo", "vermelho"]
  itemSelecionado:string = 'um';
  mes:number = 1;

  trocarValor(event:Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement
    this.itemSelecionado = elementoSelecionado.value
  }

  constructor(){

  }
}

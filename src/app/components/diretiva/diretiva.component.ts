import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretiva.component.html',
  styleUrl: './diretiva.component.css'
})
export class DiretivaComponent {
  //ngClass
  isActive = true
  hasError = true
  classes = ["text-sucess", "text-danger", "special"]
  isSpecial = false

  //exemplos ngStyle
  size = '50px'
  font = 'Arial'
  color = 'yellow'

  //exemplos ngModel
  currentItem: any = {
    name: ''
  }

  setUpperCaseName(value:string){
    this.currentItem.name = value.toLocaleUpperCase()
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-propertie-binding',
  standalone: true,
  imports: [],
  templateUrl: './propertie-binding.component.html',
  styleUrl: './propertie-binding.component.css'
})
export class PropertieBindingComponent {
  imgUrl = '../../../assets/spfc.png'
  isDisabled = true
  descImg = "SPFC"

}

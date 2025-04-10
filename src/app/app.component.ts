import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacaoComponent, ControlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';
}

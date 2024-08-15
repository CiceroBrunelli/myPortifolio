import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSectionComponent } from './pages/main-section/main-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myPortifolio';
}

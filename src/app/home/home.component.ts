import { Component } from '@angular/core';
import { AdditionalInfoComponent } from '../additional-info/additional-info.component';
import { log } from 'console';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorsComponent } from '../errors/errors.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [AdditionalInfoComponent, LoadingComponent, ErrorsComponent],
})
export class HomeComponent {
  showInfo: boolean = false;
  showAdditionalInfo() {
    this.showInfo = true;
    setTimeout(() => {
      this.showInfo = false;
      console.log('reset happened');
    }, 3000);
  }
}

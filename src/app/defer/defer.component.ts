import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
})
export class DeferComponent {
  constructor() {
    setTimeout(() => {}, 5000000);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}

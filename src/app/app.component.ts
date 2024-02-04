import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeferComponent } from './defer/defer.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

interface UserInterface {
  id: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    DeferComponent,
    LoadingComponent,
    PlaceholderComponent,
    ErrorComponent,
  ],
})
export class AppComponent {
  title = 'ng-v17-new-features';

  users = signal<UserInterface[]>([
    { id: '1', name: 'foo', role: 'developer' },
    { id: '2', name: 'bar', role: 'admin' },
    { id: '3', name: 'baz', role: 'qa' },
  ]);

  user = this.users()[0];
}

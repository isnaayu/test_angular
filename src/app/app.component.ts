import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
// import { LocalStorageService } from './local-storage.service';
// import { LocalStorageListService } from './local-storage-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, CommonModule, RouterOutlet],
  template: `
    <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}

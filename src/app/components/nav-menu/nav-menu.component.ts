import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [MatChipsModule, MatListModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {}

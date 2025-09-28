import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  #router = inject(Router);

  ngOnInit(): void {
    const previousState = localStorage.getItem('auth_state');
    const previousVerifier = localStorage.getItem('code_verifier');

    const returnedData = new URLSearchParams(window.location.search);
    const returnedState = returnedData.get('state');
    const returnedCode = returnedData.get('code');

    if (previousState && previousVerifier && returnedState && returnedCode) {
      if (returnedState != previousState) {
        this.#router.navigate(['login']);
      } else {
        alert('State matches, now need to write the access token logic');
      }
    }
  }
}

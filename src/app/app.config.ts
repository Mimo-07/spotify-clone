import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { routes } from './app.routes';
import { AccessTokenInterceptor } from './services/access-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // withInterceptorsFromDi(): used to support class based interceptor approach, hover over it for more details
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true,
    },
    provideRouter(
      routes,
      withComponentInputBinding(),
      // withDebugTracing()
    ),
  ],
};

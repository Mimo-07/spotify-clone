import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessTokenService } from '../auth/access-token.service';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  readonly #accessTokenService = inject(AccessTokenService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const accessTokenResponse = this.#accessTokenService.accessTokenResponse();

    if (!request.url.endsWith('/api/token')) {
      const reqWithHeader = request.clone({
        headers: request.headers.set(
          'Authorization',
          `${accessTokenResponse.token_type} ${accessTokenResponse.access_token}`,
        ),
      });

      return next.handle(reqWithHeader);
    }

    return next.handle(request);
  }
}

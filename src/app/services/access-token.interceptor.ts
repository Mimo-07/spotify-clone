import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenType } from '../auth/auth.interface';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const accessToken = sessionStorage.getItem(TokenType.ACCESS_TOKEN);

    if (!request.url.endsWith('/api/token') && accessToken) {
      const reqWithHeader = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
      });

      return next.handle(reqWithHeader);
    }

    return next.handle(request);
  }
}

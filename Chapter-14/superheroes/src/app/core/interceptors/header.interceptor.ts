import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization = localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '';
    // Use the JWT if the request endpoint has an api/v1 substring
    if(httpRequest.url.includes('api/v1'))
      // next call the API with the added header
    return next.handle(httpRequest.clone({ setHeaders: { Authorization } }));
    else 
    return next.handle(httpRequest);
  }
}

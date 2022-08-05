import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("token");

    if(idToken){
      const cloned = req.clone({
        headers: req.headers.set("Authorization", idToken)
        .set("Access-Control-Allow-Origin", "origin-list")
      });
      return next.handle(cloned);
    }else{
      return next.handle(req)
    }
  }
}
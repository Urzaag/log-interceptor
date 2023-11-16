import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var time = new Date;
    console.log("Request made to: " + req.urlWithParams + " at: " + time);
    // pipe permet d'ajouter des actions à effectuer quand l'observable est résolue
    // return next.handle(req);
    return next.handle(req).pipe(
      // tap est un observable qui indique : "Je fais des actions sans modifier la réponse"
        tap((response) => {
          // On s'assure qu'il s'agit bien d'une réponse http
            if (response instanceof HttpResponse) {
              // Ici sera le code exécuté à la réponse du serveur
              // Dans le cas où tout s'est bien passé
              var delay = (new Date).getMilliseconds() - time.getMilliseconds();
              console.log("This request took: " + delay + " milliseconds");
              }
            })
    );
  }
}
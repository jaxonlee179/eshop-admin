import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Consts } from "src/app/shared/consts";
import { environment } from "src/environments/environment";

export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem(Consts.TOKEN);
        if (token) {
            return next.handle(req.clone({
                headers: req.headers.set('Authorization', 'bearer ' + token)
            }));
        }
        return next.handle(req);
    }
}
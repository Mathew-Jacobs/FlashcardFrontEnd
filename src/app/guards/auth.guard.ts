import { Injectable } from "../../../node_modules/@angular/core";
import { CanActivate, Router } from "../../../node_modules/@angular/router";
import { Observable } from "../../../node_modules/rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if (!localStorage.getItem('id_token')) {
                this.router.navigate(['/login']);
                return observer.next(false);
            } else {
                return observer.next(true);
            }
        })
    }
}
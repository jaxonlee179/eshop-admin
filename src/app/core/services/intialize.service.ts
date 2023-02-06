import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { Consts } from 'src/app/shared/consts';

@Injectable({
  providedIn: 'root'
})
export class IntializeService {

  constructor(private loginService: LoginService) { }

  getCurrentUser() {
    let token = localStorage.getItem(Consts.TOKEN);
    if (token) {
      this.loginService.getCurrentUser()
        .subscribe();
    }
    else {
      this.loginService.currentUser$.next(null);
    }
  }
}

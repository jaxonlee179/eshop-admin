import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { Consts } from '../shared/consts';
import { LoginInputDto } from '../shared/Models/Account/loginInputDto';
import { LoginResultDto } from '../shared/Models/Account/loginResultDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser$: ReplaySubject<LoginResultDto | null> = new ReplaySubject<LoginResultDto | null>(1);

  constructor(private httpClient: HttpClient) { }

  login(loginInputDto: LoginInputDto): Observable<LoginResultDto> {
    return this.httpClient.post<LoginResultDto>('/api/AdminAccount/login', loginInputDto)
      .pipe(
        map(user => {
          if (user) {
            this.currentUser$.next(user);
            localStorage.setItem(Consts.TOKEN, user.token);
          }
          return user;
        })
      );
  }

  getCurrentUser(): Observable<LoginResultDto> {
    return this.httpClient.get<LoginResultDto>('/api/Account')
      .pipe(
        map(user => {
          if (user) {
            this.currentUser$.next(user);
            localStorage.setItem(Consts.TOKEN, user.token);
          }
          return user;
        })
      );
  }
}

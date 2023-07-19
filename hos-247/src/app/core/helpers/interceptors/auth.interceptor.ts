import * as http from '@angular/common/http';
import * as core from '@angular/core';
import * as router from '@angular/router';

import { catchError, map, throwError } from 'rxjs';

import * as core_helpers from '@core/helpers';
import * as repositories from '@core/repositories';

// @core.Injectable()
// export class AuthInterceptor implements http.HttpInterceptor {
//   public constructor(
//     private readonly router: router.Router,
//     @core.Inject(core_helpers.TOKEN)
//     private readonly tokenService: core_helpers.TokenService,
//     private readonly authService: repositories.AuthService,
//   ) {}

//   public intercept(
//     request: http.HttpRequest<any>,
//     next: http.HttpHandler,
//   ): any {
    // const token = this.tokenService.getToken();
    // const refreshToken = this.tokenService.getRefreshToken();

    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: 'Bearer ' + token,
    //     },
    //   });
    // }

    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({
    //     setHeaders: {
    //       'content-type': 'application/json',
    //     },
    //   });
    // }

    // request = request.clone({
    //   headers: request.headers.set('Accept', 'application/json'),
    // });

    // return next.handle(request).pipe(
    //   map((event: http.HttpEvent<any>) => {
    //     if (event instanceof http.HttpResponse) {
    //       console.log('event--->>>', event);
    //     }
    //     return event;
    //   }),
    //   catchError((error: http.HttpErrorResponse) => {
    //     console.log(error.error.error);
    //     if (error.status === 401) {
    //       if (error.error.error === 'invalid_token') {
    //         this.authService
    //           .refreshToken({ refresh_token: refreshToken })
    //           .subscribe(() => {
    //             location.reload();
    //           });
    //       } else {
    //         this.router
    //           .navigate(['login'])
    //           .then(() => console.log('redirect to login'));
    //       }
    //     }
    //     return throwError(error);
    //   }),
    // );
//   }
// }

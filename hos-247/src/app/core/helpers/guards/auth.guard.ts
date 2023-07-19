import * as core from '@angular/core';
import * as router from '@angular/router';

import * as core_helpers from '@core/helpers';
import * as repositories from '@core/repositories';
import { Observable } from 'rxjs';

@core.Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements router.CanLoad, router.CanActivate, router.CanActivateChild
{
  checkTokenExpiration(): boolean {
    return false || true;
  }

  canLoad(): boolean {
    return true;
    // return this.checkTokenExpiration()
  }

  canActivateChild(
    next: router.ActivatedRouteSnapshot,
    state: router.RouterStateSnapshot,
  ):
    | Observable<boolean | router.UrlTree>
    | Promise<boolean | router.UrlTree>
    | boolean
    | router.UrlTree {
    return true;
  }

  // public constructor(
  //   private readonly router: router.Router,
  //   @core.Inject(core_helpers.TOKEN)
  //   private readonly tokenService: core_helpers.TokenService,
  //   private readonly authService: repositories.AuthService,
  // ) {}

  public canActivate(
    next: router.ActivatedRouteSnapshot,
    state: router.RouterStateSnapshot,
  ): boolean {
    const url: string = state.url;
    return true;
    // return this.checkLogin(url);
  }

  // public checkLogin(url: string): boolean {
  //   if (this.tokenService.getRefreshToken()) {
  //     return true;
  //   }
  //   return false;

  //   // this.authService.redirectUrl = url;

  //   // this.router.navigate(['/login']).then(() => false);
  // }
}

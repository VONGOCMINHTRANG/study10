import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = ():
  | Observable<boolean | UrlTree>
  | Promise<UrlTree>
  | boolean
  | UrlTree => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Nếu đã tồn tại accessToken trong localStorage
  // Không cho truy cập route /sign-in và /sign-up
  if (authService.isLoggedIn()) {
    router.navigate(['/']);
    return false;
  }

  // Nếu chưa thì cho truy cập vào 2 route đó
  return true;
};

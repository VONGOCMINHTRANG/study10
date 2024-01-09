import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const UserGuard: CanActivateFn = ():
  | Observable<boolean | UrlTree>
  | Promise<UrlTree>
  | boolean
  | UrlTree => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Nếu đã đăng nhập thì cho truy cập vào route của user
  if (authService.isLoggedIn()) {
    return true;
  }

  // Nếu chưa thì không cho truy cập
  router.navigate(['/page-not-found']);
  return false;
};

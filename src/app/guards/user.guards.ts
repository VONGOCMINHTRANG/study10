import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

export const UserGuard: CanActivateFn = ():
  | Observable<boolean | UrlTree>
  | Promise<UrlTree>
  | boolean
  | UrlTree => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (typeof window !== 'undefined') {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (accessToken) {
      try {
        // Nếu đã đăng nhập và accessToken hợp lệ thì cho truy cập vào route của user
        if (authService.isLoggedIn() && jwtDecode(accessToken)) return true;
      } catch {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');

        router.navigate(['/page-not-found']);
        return false;
      }
    }
  }

  // Nếu chưa thì không cho truy cập
  router.navigate(['/page-not-found']);
  return false;
};

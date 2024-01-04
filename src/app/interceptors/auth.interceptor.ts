import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, from, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken: string | null = localStorage.getItem('accessToken');
    const date = new Date();

    // Trong trường hợp đã đăng nhập rồi
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      //   console.log('accessToken exp', decodedToken.exp);

      // Kiểm tra thời hạn của accessToken hiện tại
      // Nếu nhỏ hơn 1000 -> Yêu cầu lấy accessToken mới trước, rồi mới gửi request lên server
      // Lớn hơn 1000 -> Tiếp tục gửi request lên server
      if (Number(decodedToken.exp) < Number(date.getTime() / 1000)) {
        return this.refreshAccessToken(request, next);
      }

      return next.handle(request);
    }

    // Tạm thời nếu chưa có accessToken, thì vẫn cho tiếp tục gửi request lên server
    return next.handle(request);
  }

  private refreshAccessToken(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.authService.handleRefreshAccessToken()).pipe(
      switchMap((newAccessToken) => {
        // Cập nhật accessToken mới vào localStore
        localStorage.setItem('accessToken', JSON.stringify(newAccessToken));

        // Đính kèm thêm accessToken đã được update lại
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        // Sau khi cập nhật xong, gửi tiếp request trước đó cùng với accessToken mới cho server
        return next.handle(authRequest);
      })
    );
  }

  constructor(private authService: AuthService, private router: Router) {}
}

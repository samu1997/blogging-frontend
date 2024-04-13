import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const isAuth = authService.isAuthenticated();
  if (isAuth) {
    return true;
  } else {
    console.log('else');
    const router = inject(Router);
    const sharedService = inject(SharedService);
    sharedService.setToastData({
      type: 'danger',
      message: 'Session expired',
    });
    return router.createUrlTree(['/auth/login']);
  }
};

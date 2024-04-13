import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const sharedService = inject(SharedService);
  const router = inject(Router);

  const isAuth = authService.isAuthenticated();
  if (isAuth) {
    return true;
  } else {
    sharedService.setToastData({
      type: 'danger',
      message: 'Session expired',
    });
    return router.createUrlTree(['/auth']);
  }
};

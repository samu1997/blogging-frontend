import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const sharedService = inject(SharedService);
  const router = inject(Router);

  const isAuth = authService.isAuthenticated();
  if (isAuth) {
    sharedService.setToastData({
      type: 'warning',
      message: 'You are already logged in',
    });
    const url = router.url ?? '/dashboard';
    return router.createUrlTree([url]);
  }
  return true;
};

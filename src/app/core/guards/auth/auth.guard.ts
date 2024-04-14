import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

import _ from 'lodash';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const isAuth = authService.isAuthenticated();
  if (isAuth) {
    return true;
  } else {
    const getUser = authService.getUser();
    if (!_.isEmpty(getUser)) {
      const sharedService = inject(SharedService);
      sharedService.setToastData({
        type: 'danger',
        message: 'Session expired',
      });
    }
    const router = inject(Router);
    return router.createUrlTree(['/auth/login']);
  }
};

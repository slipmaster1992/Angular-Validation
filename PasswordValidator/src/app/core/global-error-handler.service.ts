import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }


  handleError(error: any) {

    const router = this.injector.get(Router);
    console.log(`Request URL: ${router.url}`);

    if (error instanceof HttpErrorResponse) {
      console.error('Backend Returned Status Code: ', error.status);
      console.error('Response Body: ', error.message);
    } else {

      console.error('An Error Occured: ', error.message);
    }

    router.navigate(['error']);
  }
}

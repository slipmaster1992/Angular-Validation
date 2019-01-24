import { Directive } from '@angular/core';
import { AsyncValidatorFn, AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';


export function UniqueEmailValidator(userService: UserService): AsyncValidatorFn {

  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

    return userService.getUserByEmail(c.value).pipe(
      map(users => {

        return users && users.length > 0 ? { 'uniqueEmail': true } : null;
      })
    );


  };


}




@Directive({
  selector: '[uniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true }]
})


export class UniqueEmailValidatorDirective implements AsyncValidator {


  constructor(private userService: UserService) { }


  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return UniqueEmailValidator(this.userService)(c);
  }



}

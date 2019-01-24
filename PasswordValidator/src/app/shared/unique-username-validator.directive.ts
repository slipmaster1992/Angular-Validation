import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';



export function UniqueUserNameValidator(userService: UserService): AsyncValidatorFn {

  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

    return userService.getUserByUserName(c.value).pipe(

      map(users => {

        return users && users.length > 0 ? { 'UniqueUsername': true } : null;
      })
    );
  };

}




@Directive({
  selector: '[UniqueUsername]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {



  constructor(private userService: UserService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return UniqueUserNameValidator(this.userService)(c);
  }


}

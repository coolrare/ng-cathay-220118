import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[password-complexity][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordComplexityDirective, multi: true }
  ]
})

export class PasswordComplexityDirective implements Validator {
  validate(c: FormControl): ValidationErrors | null {
    if (!c.value) {
      return null;
    }

    let value = c.value as string;

    let validationStatus = true;
    let result: any = {};

    // 至少有一個數字
    let pattern1 = /\d+/
    if (value.search(pattern1) == -1) {
      result.number = true;
      validationStatus = false;
    }
    // 至少有一個小寫英文字母
    let pattern2 = /[a-z]+/
    if (value.search(pattern2) == -1) {
      result.lowercase = true;
      validationStatus = false;
    }
    // 至少有一個大寫英文字母
    let pattern3 = /[A-Z]+/
    if (value.search(pattern3) == -1) {
      result.uppercase = true;
      validationStatus = false;
    }
    // 字串長度在 6 ~ 30 個字母之間
    let pattern4 = /^.{6,30}$/
    if (value.search(pattern4) == -1) {
      result.length = true;
      validationStatus = false;
    }

    if (validationStatus) {
      return null;
    } else {
      return {
        passwordComplexity: result
      };
    }
  }
}

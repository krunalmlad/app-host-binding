import { Directive, HostBinding, HostListener, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel]'
})
export class ModelStatusBindingDirective {

  clickCount:  number = 0;
  constructor(private control: NgModel){

  }

  @HostBinding('class.valid') valid(){
    return this.control.valid;
  }

  @HostBinding('class.invalid') inValid(){
    return this.control.invalid;
  }


}

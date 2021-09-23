import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingDemoComponent } from './binding-demo.component';
import { ModelStatusBindingDirective } from './count-directives.directive';

@NgModule({
  declarations: [
    BindingDemoComponent,
    ModelStatusBindingDirective
  ],
  imports:[
    FormsModule, ReactiveFormsModule,
  ],
  exports: [BindingDemoComponent]
})

export class BindingDemoModule { }

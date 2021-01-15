import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';



@NgModule({
  declarations: [OneWayBindingComponent,
    NgIfComponent,
    NgTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OneWayBindingComponent,
    NgIfComponent,
    NgTemplateComponent
  ]
})
export class OneWayBindingModule { }

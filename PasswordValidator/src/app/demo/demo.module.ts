import { NgModule } from '@angular/core';

import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    SharedModule
  ],
  declarations: [

    CreateFormComponent,
    ReactiveFormComponent,
    DemoComponent

  ]
})
export class DemoModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoComponent } from './demo.component';



const routes: Routes = [

  {
    path: '', component: DemoComponent, children: [

      { path: '', component: CreateFormComponent },
      { path: 'reactiveForm', component: ReactiveFormComponent }

    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class DemoRoutingModule { }

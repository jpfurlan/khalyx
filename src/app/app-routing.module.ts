import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeginnerComponent } from './components/tab/beginner/beginner.component';
import { IntermediaryComponent } from './components/tab/intermediary/intermediary.component';
import { AdvancedComponent } from './components/tab/advanced/advanced.component';


const routes: Routes = [{
  path: "",
  component: BeginnerComponent
},{
  path: "beginner",
  component: BeginnerComponent
},{
  path: "intermediary",
  component: IntermediaryComponent
},{
  path: "advanced",
  component: AdvancedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

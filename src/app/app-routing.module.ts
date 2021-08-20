import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BegginerComponent } from './components/tab/begginer/begginer.component';
import { IntermediaryComponent } from './components/tab/intermediary/intermediary.component';
import { AdvancedComponent } from './components/tab/advanced/advanced.component';





const routes: Routes = [{
  path: "",
  component: BegginerComponent
},{
  path: "begginer",
  component: BegginerComponent
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

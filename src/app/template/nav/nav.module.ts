import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BegginerComponent } from 'src/app/components/tab/begginer/begginer.component';
import { IntermediaryComponent } from 'src/app/components/tab/intermediary/intermediary.component';
import { AdvancedComponent } from 'src/app/components/tab/advanced/advanced.component';

const appRoutes : Routes = [
  { path:'begginer', component:BegginerComponent},
  { path:'intermediary', component: IntermediaryComponent},
  { path:'advanced', component:AdvancedComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true},
    ),
  ]
})
export class NavModule { }

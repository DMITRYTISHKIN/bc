import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent } from './history';
import { MissionComponent } from './mission';
import { TeamComponent } from './team';
import { WishesComponent } from './wishes';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'wishes', component: WishesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

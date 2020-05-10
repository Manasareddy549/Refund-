import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookMovieComponent } from './bookmovie/bookmovie.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { UpdateseatsComponent } from './updateseats/updateseats.component';
import { RefundComponent } from './refund/refund.component';
import { ListseatsComponent } from './listseats/listseats.component';

const routes: Routes = [
  {path:'',redirectTo:'/bookmovie',pathMatch:'full'},
  {path:'app-bookmovie', component:BookMovieComponent},
  {path:'Cancel-ticket',component:CancelTicketComponent},
  {path:'app-refund',component:RefundComponent},
  {path:'app-listseats',component: ListseatsComponent},
  {path:'app-updateseats',component:UpdateseatsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

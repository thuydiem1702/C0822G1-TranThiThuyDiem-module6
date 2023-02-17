import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import {UpdateComponent} from "./component/update/update.component";
import {CreateComponent} from "./component/create/create.component";


const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "create", component: CreateComponent},
  {path: "edit/:id", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

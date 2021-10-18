import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PostpageComponent } from './pages/postpage/postpage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'post/:id', component: PostpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

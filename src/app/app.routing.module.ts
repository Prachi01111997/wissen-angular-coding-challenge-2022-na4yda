import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserDataComponent } from "./user-data/user-data.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "userData", component: UserDataComponent },
  { path: "welcome/:username", component: WelcomeComponent },
  { path: "", redirectTo: "login", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

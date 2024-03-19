import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";

@NgModule({
declarations: [
    AuthComponent
  ],
  imports: [
    // ANGULAR MODULES
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent },
    ])
  ]
})
export class AuthModule {}

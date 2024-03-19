import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from '../directives/dropdown.directive';
import { PlaceholderDirective } from '../directives/placeholder.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective,
    // AUTHENTICATION
    PlaceholderDirective
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }

import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PlaceholderDirective } from '../directives/placeholder.directive';
import { AuthResponseData } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective)
  alertHost: PlaceholderDirective;
  private closeSubscription: Subscription;


  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const { email, password } = form.value;
    let authObservable: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe(
      (responseData) => {
        console.log(responseData);
        this.error = null;
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorResponse) => {
        console.log(errorResponse);
        this.error = errorResponse;
        this.showErrorAlert(errorResponse);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError(event: null) {
    this.error = event;
  }

  private showErrorAlert(message: string) {
    // Returns the AlertComponent Factory not the component itself.
    // The factory is an Object that knows how to create AlertComponents.
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    // Creates and Adds the Alert Component to the View Container Reference.
    // Where the appPlaceholder is located.
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);

    // Gives us access to the exact instance of the component that was created.
    componentRef.instance.message = message;

    // To close component
    this.closeSubscription = componentRef.instance.close.subscribe(() => {
      // To unsubscribe since component will be destroyed
      this.closeSubscription.unsubscribe();
      // To clear the component reference, removing all components in the
      // View Container Reference.
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    // If we get rid of the Auth Component we want to make sure to unsubscribe.
      if(this.closeSubscription) {
        this.closeSubscription.unsubscribe();
      }
  }
}

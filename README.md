# angular-number-only

this is a directive in angular used to make sure only number in input textbox
working for browser in pc and mobile device
also support ctr+c ctr+v action from keyboard

## Description

code based on angular6.1, should working for all angular2+ version
download this project into your local, run 'npm install' first, then 'ng serve', then you can see the demo

## Usage
1. number only directive source code is in src/app/shared/directives/number-only-directive.ts

2. import shared module in your feature module, in Demo is app.module
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';

        import { SharedModule } from './shared/shared.module';

        import { AppComponent } from './app.component';

        @NgModule({
          declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule,
            SharedModule
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule { }

3. add numberOnly in input control
        <input class="input__field js-input-field" numberOnly>

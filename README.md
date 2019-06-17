# angular-number-only

 this is a directive in angular used to make sure only number in input textbox
 
 working for browser in pc and mobile device
 
 also support ctr+c ctr+v ctr+a ctr+x action from keyboard

## Description

 code based on angular6.1, should working for all angular2+ version
 
 download this project into your local, run 'npm install' first, then 'ng serve', then you can see the demo

## Usage

1. number only directive source code is in src/app/shared/directives/numeric-directive.ts

2. import shared module in your feature module, in this Demo is app.module

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

3. add numeric in input control


numericType="intNumber" means only positive integer, 0 is valid, but not allow zeros in the front( 023 is invalid )


numericType="decimal" means only positive decimal, 0 is valid, but not allow zeros in the front( 023.23 is invalid ). decimalPlace means how many deciaml places you want for the decimal numbers.


```html

<div class="input js-input input--one-half input--static-label">
    <div class="input__inner">
        <label class="input__label">
            <div class="input__label-content js-input-label-content">integer number</div>
        </label>
        <input class="input__field js-input-field" numeric numericType="intNumber">
    </div>
</div>

<div class="input js-input input--one-half input--static-label">
    <div class="input__inner">
        <label class="input__label">
            <div class="input__label-content js-input-label-content">decimal number</div>
        </label>
        <input class="input__field js-input-field" numeric numericType="decimal" decimalPlace="4">
    </div>
</div>

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberOnlyDirective } from './directives/number-only-directive';
import { NumericDirective } from './directives/numeric-directive';

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [
        NumberOnlyDirective,
        NumericDirective
    ],
    exports: [
        NumberOnlyDirective,
        NumericDirective
    ]
})
export class SharedModule {

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberOnlyDirective } from './directives/number-only-directive';

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [
        NumberOnlyDirective
    ],
    exports: [
        NumberOnlyDirective
    ]
})
export class SharedModule {

}
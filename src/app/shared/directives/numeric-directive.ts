import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[numeric]'
})

export class NumericDirective implements OnChanges {

    @Input('numericType') numericType: string; // number | decimal
    @Input('decimalPlace') decimalPlace: string = '0';

    decimalRegex = "^([1-9]\\d*|0)(\\.[0-9]{0,@decimalPlace}){0,1}$"; // only allow 0.1232 1.232, not allow zeros in the front(023.23 is invalid)

    private regex = {
        number: new RegExp(/^\d+$/),//allow zeros in the front (023 is valid)
        intNumber: new RegExp(/^([1-9]\d*|0)$/),//allow 0, not allow zeros in the front (023 becomes invalid),
        decimal: new RegExp(this.decimalRegex, "g")
        //decimal: new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g)
    };

    private specialKeys = {
        number: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
        intNumber: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
        decimal: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
    };

    constructor(private el: ElementRef) {
    }

    ngOnChanges() {
        this.decimalRegex = this.decimalRegex.replace('@decimalPlace', this.decimalPlace);
        this.regex.decimal = new RegExp(this.decimalRegex, "g");
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {

        if (this.specialKeys[this.numericType].indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        if (
            // Allow: Ctrl+A
            (event.key.toUpperCase() === 'A' && (event.ctrlKey || event.metaKey)) ||
            // Allow: Ctrl+C
            (event.key.toUpperCase() === 'C' && (event.ctrlKey || event.metaKey)) ||
            // Allow: Ctrl+V
            (event.key.toUpperCase() === 'V' && (event.ctrlKey || event.metaKey)) ||
            // Allow: Ctrl+X
            (event.key.toUpperCase() === 'X' && (event.ctrlKey || event.metaKey))
        ) {
            // let it happen, don't do anything
            return;
        }

        let current: string = this.el.nativeElement.value;
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex[this.numericType])) {
            event.preventDefault();
        }
    }
}
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[numberOnly]'
})
export class NumberOnlyDirective {
    private regex: RegExp = new RegExp(/^-?[0-9]+([0-9]*){0,1}$/g);
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'Control'];
    constructor(private el: ElementRef) {
    }
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current: string = this.el.nativeElement.value;
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex) && (next.indexOf('v') === -1)) {
            event.preventDefault();
        }
    }
    @HostListener('window:keyup', ['$event'])
    onkeyup(event: KeyboardEvent) {
        let current: string = this.el.nativeElement.value;
        if (current && String(current).match(this.regex)) {
            return;
        }
        else {
            event.preventDefault();
            this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, "");
        }

    }
}
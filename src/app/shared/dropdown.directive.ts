import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown'
})
export class DropDownDirective {
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}

import { Directive,
    HostListener,
    HostBinding,
    ElementRef,
    Renderer2
} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.show') isOpen: boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') toogleOpen() {
        this.isOpen = !this.isOpen;
        const dropDownMenu = this.elRef.nativeElement.childNodes[1];
        if (this.isOpen) {
            this.renderer.addClass(dropDownMenu, 'show');
        } else {
            this.renderer.removeClass(dropDownMenu, 'show');
        }
    }
}

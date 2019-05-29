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
        const dropDownMenu = this.elRef.nativeElement.childNodes[1];
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;

        if (this.isOpen) {
            this.renderer.addClass(dropDownMenu, 'show');
        } else {
            this.renderer.removeClass(dropDownMenu, 'show');
        }
    }
}

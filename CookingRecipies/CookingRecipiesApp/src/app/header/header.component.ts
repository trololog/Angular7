import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() menuclicked: EventEmitter<string> = new EventEmitter();

    selectOption(option: string) {
        this.menuclicked.emit(option);
    }
}

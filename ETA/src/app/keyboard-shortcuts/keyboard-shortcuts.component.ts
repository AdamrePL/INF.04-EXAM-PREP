import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'keyboard-shortcuts',
  imports: [FormsModule],
  templateUrl: './keyboard-shortcuts.component.html',
  styleUrl: './keyboard-shortcuts.component.css'
})
export class KEYBOARDSHORTCUTSComponent {
    elements: any[] = [];
    text = '';
    lastAction = '';

    add() {
        if (this.text == "") return;
        this.elements.push({text: this.text, timestamp: new Date().toLocaleTimeString()});
        this.text = '';
    }

    getLongTextCount() {
        return this.elements.filter(e => e.text.length > 10).length;
    }

    getAvgLength() {
        return Math.round(this.elements.reduce((sum, el) => sum + el.text.length, 0) / this.elements.length);
    }

    handleClick(e: Event) {
        e.preventDefault();
        (e.target as HTMLButtonElement).parentElement?.parentElement?.querySelector("input")?.focus(); // DONT ASK OKAY, I AM DONE WITH TS - THIS IS NO ElementRef CODE
        this.lastAction = "Dodano za pomocą przycisku";
        this.add()
    }

    clearAllElements() {
        this.elements = [];
        this.lastAction = "Wyczyszczono wszystkie elementy";
    }

    clear() {
        this.text = '';
    }

    handleKeyboardEvent(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            this.clear();
            this.lastAction = "Wyczyszczono za pomocą Escape";
            console.log("Clear: Escape")
        }
        if (e.key === 'Enter') {
            (e.target as HTMLInputElement).focus();
            this.lastAction = "Dodano za pomocą Enter";
            console.log("Submit: Enter");
            this.add();
        }
    }

    remove(index: number) {
        this.lastAction = "Usunięto element";
        this.elements = this.elements.filter((_,i) => i != index);
    }
}

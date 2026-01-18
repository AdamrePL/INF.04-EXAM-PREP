import { Component } from '@angular/core';

@Component({
  selector: 'searchable-list',
  imports: [],
  templateUrl: './searchable-list.component.html',
  styleUrl: './searchable-list.component.css'
})
export class SEARCHABLELISTComponent {
    names: string[] = [
        'Anna Kowalski',
        'Piotr Nowak',
        'Maria Wiśniewska',
        'Jan Kowalczyk',
        'Katarzyna Zielińska',
        'Tomasz Szymański',
        'Agnieszka Woźniak',
        'Michał Kaczmarek',
        'Magdalena Mazur',
        'Paweł Krawczyk',
        'Joanna Piotrowska',
        'Łukasz Grabowski',
        'Monika Pawłowska',
        'Marcin Michalski',
        'Ewa Król',
        'Jakub Wieczorek',
        'Aleksandra Jabłońska',
        'Bartosz Majewski',
        'Natalia Dąbrowski',
        'Krzysztof Adamczyk',
        'Sylwia Nowakowska',
        'Rafał Dudek',
        'Karolina Pawlak',
        'Dawid Włodarczyk',
        'Justyna Kwiecień',
        'Marek Sobczak',
        'Patrycja Baran',
        'Łukasz Rutkowski',
        'Weronika Michalak',
        'Przemysław Sikora'
    ];

    arg = ""
    Math = Math;

    search(e: Event) {
        this.arg = (e.target as HTMLInputElement).value;
    }

    display() {
        if (!this.arg.trim()) return this.names;
        return this.names.filter(v => v.toLocaleLowerCase().includes(this.arg.toLocaleLowerCase()))
    }
}


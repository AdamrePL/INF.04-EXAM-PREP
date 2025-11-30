import { Component } from '@angular/core';

@Component({
    selector: 'random-quote',
    imports: [],
    templateUrl: './random-quote.component.html',
    styleUrl: './random-quote.component.css',
})
export class RANDOMQUOTEComponent {
    quotes = [
        'Sukces to suma małych wysiłków powtarzanych dzień po dniu.',
        'Nie ma nic niemożliwego dla tego, kto próbuje.',
        'Przyszłość należy do tych, którzy wierzą w piękno swoich marzeń.',
        'Jedynym sposobem na zrobienie świetnej pracy jest kochanie tego, co robisz.',
        'Nie bój się porzucać dobrego, aby dążyć do lepszego.',
        'Innowacja odróżnia lidera od naśladowcy.',
        'Najlepszy czas na zasadzenie drzewa był 20 lat temu. Drugi najlepszy czas to teraz.',
        'Sukces nie jest kluczem do szczęścia. Szczęście jest kluczem do sukcesu.',
    ];
    active = 0;
    viewCounts = new Array(this.quotes.length).fill(0);

    constructor(){
        this.viewCounts[this.active]++;
    }

    roll() {
        let roll = Math.round(Math.random() * (this.quotes.length-1));
        while (roll == this.active) {
            console.log(`rolled ${roll}, retrying`);
            roll = Math.round(Math.random() * (this.quotes.length-1));
            console.log("rerolled", roll);
        }
        this.active = roll;
        this.viewCounts[this.active]++;
        console.log(`Quote ${this.active}`);
    }

    unique() {
        return this.viewCounts.filter(v => v > 0).length;
    }

    total() {
        return this.viewCounts.reduce((sum, v) => sum + v, 0);
    }

    average() {
        return this.total() / this.quotes.length;
    }

    most() {
        return Math.max(...this.viewCounts);
    }

    mostList() {
        let qts: any[] = [];
        for (let index = 0; index < this.quotes.length; index++) {
            if (this.viewCounts[index] == this.most()) {
                qts.push(this.quotes[index]);
            }
        }
        return qts;
    }
}

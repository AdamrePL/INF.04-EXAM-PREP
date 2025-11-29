import { Component } from '@angular/core';

@Component({
    selector: 'dependent-dropdowns',
    imports: [],
    templateUrl: './dependent-dropdowns.component.html',
    styleUrl: './dependent-dropdowns.component.css',
})
export class DEPENDENTDROPDOWNSComponent {
    data = [
        {
            country: 'Polska',
            cities: ['Warszawa', 'Kraków', 'Gdańsk', 'Wrocław', 'Poznań', 'Łódź', 'Katowice', 'Lublin']
        },
        {
            country: 'Niemcy',
            cities: ['Berlin', 'Monachium', 'Hamburg', 'Frankfurt', 'Kolonia', 'Stuttgart', 'Düsseldorf', 'Dortmund']
        },
        {
            country: 'Francja',
            cities: ['Paryż','Marsylia','Lyon','Tuluza','Nicea','Nantes','Strasburg','Montpellier']
        },
        {
            country: 'Włochy',
            cities: ['Rzym', 'Mediolan', 'Neapol', 'Turyn', 'Palermo', 'Genua', 'Bologna', 'Florencja']
        },
        {
            country: 'Hiszpania',
            cities: ['Madryt', 'Barcelona', 'Sewilla', 'Walencja', 'Bilbao', 'Malaga', 'Murcja', 'Palma']
        },
        {
            country: 'Wielka Brytania',
            cities: ['Londyn', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Edynburg', 'Bristol']
        },
        {
            country: 'Holandia',
            cities: ['Amsterdam', 'Rotterdam', 'Haga', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere']
        },
        {
            country: 'Belgia',
            cities: ['Bruksela', 'Antwerpia', 'Gandawa', 'Charleroi', 'Liège', 'Brugia', 'Namur', 'Leuven']
        },
        {
            country: 'Ukraina',
            cities: []
        }
    ];
    totalCities = this.data.reduce((sum, item) => sum + item.cities.length, 0);
    selectedCountry = '';
    selectedCountryCities: string[] = [];
    selectedCity = '';
    sent = false;

    selectCountry(e: Event) {
        this.sent = false;
        this.selectedCity = "";
        this.selectedCountry = (e.target as HTMLSelectElement).value;
        this.selectedCountryCities = this.data.find(item => item.country == this.selectedCountry)?.cities ?? [];
    }

    selectCity(e: Event) {
        this.sent = false;
        this.selectedCity = (e.target as HTMLSelectElement).value;
    }

    sendForm(e: Event) {
        e.preventDefault();
        this.sent = true;
        console.log({ country: this.selectedCountry, city: this.selectedCity })
    }
}

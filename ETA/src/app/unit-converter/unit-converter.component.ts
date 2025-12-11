import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'unit-converter',
  imports: [],
  templateUrl: './unit-converter.component.html',
  styleUrl: './unit-converter.component.css'
})
export class UNITCONVERTERComponent implements AfterViewInit {
    currentCelcius?: number;
    currentFahrenheit?: number;
    cInput?: HTMLInputElement;
    fInput?: HTMLInputElement;
    lastConversion?: string;

    ngAfterViewInit(): void {
        this.cInput = document.getElementById("celsiusInput") as HTMLInputElement;
        this.fInput = document.getElementById("fahrenheitInput") as HTMLInputElement;
    }

    clear() {
        this.currentCelcius = undefined;
        this.currentFahrenheit = undefined;
        this.lastConversion = undefined;
        this.fInput!.value = "";
        this.cInput!.value = "";
    }

    handleCelcInput() {
        this.currentCelcius = this.cInput!.valueAsNumber;
        if (isNaN(this.currentCelcius)) {
            this.clear();
            return;
        }
        this.currentFahrenheit = this.CtF();
        this.fInput!.value = this.currentFahrenheit.toFixed(1);
        this.lastConversion = `C→F: ${this.currentCelcius.toFixed(1)} → ${this.currentFahrenheit!.toFixed(1)}`;

        console.log(this.lastConversion);
    }

    handleFahrInput() {
        this.currentFahrenheit = this.fInput!.valueAsNumber
        if (isNaN(this.currentFahrenheit)) {
            this.clear();
            return;
        }
        this.currentCelcius = this.FtC();
        this.cInput!.value = this.currentCelcius.toFixed(1);
        this.lastConversion = `F→C: ${this.currentFahrenheit.toFixed(1)} → ${this.currentCelcius!.toFixed(1)}`;
        console.log(this.lastConversion);
    }

    getTempRange(v: "C"|"F"): string {
        if (v == "C") {
            let temp = this.currentCelcius!;
            return temp < 0 ? "Mróz" : temp < 10 ? "Zimno" : temp < 20 ? "Chłodno" : temp < 30 ? "Ciepło" : temp >= 30 ? "Gorąco" : "";
        }
        if (v == "F") {
            let temp = this.currentFahrenheit!;
            return temp < 32 ? "Mróz" : temp < 50 ? "Zimno" : temp < 68 ? "Chłodno" : temp < 86 ? "Ciepło" : temp >= 86 ? "Gorąco" : "";
        }
        return "";
    }

    CtF() {
        return this.currentCelcius! * 1.8 + 32;
    }

    FtC() {
        return (this.currentFahrenheit! - 32) * 5/9;
    }
}

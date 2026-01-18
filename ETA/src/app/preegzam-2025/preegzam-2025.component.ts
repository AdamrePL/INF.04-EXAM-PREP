import { Component } from '@angular/core';

@Component({
  selector: 'preegzam-2025',
  imports: [],
  templateUrl: './preegzam-2025.component.html',
  styleUrl: './preegzam-2025.component.css'
})
export class PREEGZAM2025Component {
  items = [
    {name: "Laptop Dell" , price: 3499.99},
    {name: "Mysz komputerowa" , price: 89.99},
    {name: "Klawiatura mechaniczna" , price: 299.99},
    {name: "Monitor 27'" , price: 1299.99},
    {name: "Słuchawki bezprzewodowe" , price: 399.99},
    {name: "Kamera internetowa" , price: 249.99},
    {name: "Drukarka laserowa" , price: 899.99},
    {name: "Smarfon samsung" , price: 2499.99},
    {name: "Tablet iPad" , price: 1999.99},
    {name: "etui na telefon" , price: 49.99},
    {name: "Powerbank" , price: 129.99},
    {name: "kabel usb" , price: 29.99},
    {name: "Głosniki bluetooth" , price: 199.99},
    {name: "Konsola do gier" , price: 1999.99},
    {name: "Router WiFi" , price: 299.99},
  ];

  backup = [...this.items].sort((a,b) => a.name.localeCompare(b.name));

  sortByPrice(list: {name: string, price: number}[]) {
    return list.sort((a,b) => a.price - b.price);
  }

  sortByName(list: {name: string, price: number}[]) {
    return list.sort((a,b) => a.name.localeCompare(b.name));
  }

  selectedSortMethod = "name";
  searchVal = "";

  switchMode(mode: string) {
    this.selectedSortMethod = mode;
    console.log(`Sortowanie: po ${this.selectedSortMethod == "name" ? "nazwie" : "cenie"}`);
    this.sortByChosen();
  }

  sortByChosen() {
    if (this.selectedSortMethod == "name") {
      this.items = this.sortByName(this.items);
    }
    if (this.selectedSortMethod == "price") {
      this.items = this.sortByPrice(this.items);
    }
  }

  constructor () {
    this.items = this.sortByName(this.items);
  }

  clear() {
    this.items = this.backup;
  }

  search(e: Event) {
    let val = (e.target as HTMLInputElement).value;
    this.searchVal = val;
    if (val == "") {
      this.clear();
      console.log("Wyniki: " + this.items.length);
      return;
    }
    if (this.selectedSortMethod == "name") {
      this.items = this.sortByName(this.backup.filter(el => el.name.trim().toLocaleLowerCase().includes(val.toLocaleLowerCase())));
    }
    if (this.selectedSortMethod == "price") {
      this.items = this.sortByPrice(this.backup.filter(el => el.name.trim().toLocaleLowerCase().includes(val.toLocaleLowerCase())));
    }
    console.log("Wyniki: " + this.items.length);
  }
}



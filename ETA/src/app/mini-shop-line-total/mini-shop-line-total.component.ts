import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'mini-shop-line-total',
    imports: [FormsModule],
    templateUrl: './mini-shop-line-total.component.html',
    styleUrl: './mini-shop-line-total.component.css',
})
export class MINISHOPLINETOTALComponent {
    products = [
        { name: 'Laptop', price: 2500.0 },
        { name: 'Mysz komputerowa', price: 45.99 },
        { name: 'Klawiatura', price: 89.5 },
        { name: 'Monitor', price: 899.0 },
        { name: 'Słuchawki', price: 199.99 },
        { name: 'Drukarka', price: 299.5 }
    ];
    cart: any[] = [];

    quantity = 1;
    selectedItemIndex = -1;

    add() {
        this.cart.push({...this.products[this.selectedItemIndex], quantity: this.quantity});
        console.log(`Pozycja: ${this.products[this.selectedItemIndex].name}; ilość: ${this.quantity}; suma: ${(this.products[this.selectedItemIndex].price * this.quantity).toFixed(2)}`)
        this.selectedItemIndex = -1;
        this.quantity = 1;
    }

    remove(index: number) {
        this.cart = this.cart.filter((_, i) => i != index);
    }

    total() {
        return this.cart.reduce((sum, item) => sum + item.price*item.quantity, 0);
    }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'visual-bar-list',
  imports: [FormsModule],
  templateUrl: './visual-bar-list.component.html',
  styleUrl: './visual-bar-list.component.css'
})
export class VISUALBARLISTComponent {
    items: any = [
        { id: 1, label: 'Projekt A', percentage: 75 },
        { id: 2, label: 'Projekt B', percentage: 45 },
        { id: 3, label: 'Projekt C', percentage: 90 },
        { id: 4, label: 'Projekt D', percentage: 30 },
        { id: 5, label: 'Projekt E', percentage: 60 },
        { id: 6, label: 'Projekt F', percentage: 85 },
    ];

    values: number[] = [1,2,3,4,5,6,7]
    colors = ['#007bff','#28a745','#dc3545','#ffc107','#17a2b8','#6f42c1'];
    selectedId: number|null = null;
    selectedItem: any = null;
    currentInputValue = 0;

    selectBar(id: number) {
        this.selectedId = id;
        this.selectedItem = this.items.find((item: { id: number }) => id == item.id);
        this.currentInputValue = this.selectedItem.percentage;
    }

    unselectItem() {
        this.selectedId = null;
        this.selectedItem = null;
    }

    updateValue(e: Event) {
        e.preventDefault();
        this.selectedItem.percentage = this.currentInputValue;
    }

    getStatistics() {
        const sum = this.items.reduce((sum: number, current: any) => sum + current.percentage, 0);
        let min = 100;
        let max = 0;
        this.items.forEach((element: { percentage: number; }) => {
            min = element.percentage < min ? element.percentage : min;
             max = element.percentage > max ? element.percentage : max;
        });
        return { sum: sum, avg: (sum/this.items.length), min: min, max: max};
    }
}

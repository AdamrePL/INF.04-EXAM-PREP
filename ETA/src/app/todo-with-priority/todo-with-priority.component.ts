import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-with-priority',
  imports: [FormsModule],
  templateUrl: './todo-with-priority.component.html',
  styleUrl: './todo-with-priority.component.css'
})
export class TODOWITHPRIORITYComponent {
    tasks: any[] = [];
    priorities: string[] = ["Niski", "Średni", "Wysoki"];
    priorityColors: any = {"Niski": "bg-success", "Średni": "bg-warning", "Wysoki": "bg-danger"}
    task = {
        text: "",
        priority: "Niski"
    };
    priorityDisplays: any = {"Niski": true, "Średni": true, "Wysoki": true};

    add(e: Event) {
        e.preventDefault();
        if (this.task.text.trim() == "" || this.task.priority.trim() == "") return;
        console.log(this.task)
        this.tasks.push({...this.task});
        this.task.text = "";
        this.task.priority = "Niski";
    }

    filterOut(e: Event) {
        this.priorityDisplays[(e.target as HTMLInputElement).value] = (e.target as HTMLInputElement).checked;
    }

    getPriorCount(priority: string) {
        return this.tasks.filter(t => t.priority == priority).length;
    }

    getDisplayedCount() {
        return this.tasks.filter(t => this.priorityDisplays[t.priority]).length;
    }
}

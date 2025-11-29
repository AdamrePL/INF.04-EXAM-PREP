import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'two-step-form',
  imports: [FormsModule],
  templateUrl: './two-step-form.component.html',
  styleUrl: './two-step-form.component.css'
})
export class TWOSTEPFORMComponent {
    step: number = 1;
    colors = ["Czerwony", "Niebieski", "Zielony", "Żółty"];
    displaySummary = false;
    formDetails = {
        personalData: {
            name: '',
            surname: '',
            email: ''
        },
        preferences: {
            color: -1,
            level: ''
        }
    }
    default = structuredClone(this.formDetails);

    isValidEmail() {
        let email = this.formDetails.personalData.email;
        return email.includes('@') // czy email zawiera @
                && email.lastIndexOf('@') == email.indexOf('@') // Czy jest tylko 1 @
                && email[email.indexOf('@')+1] != '.' // czy po @ jest domena a nie .
                && email.split('@')[1].includes('.') // czy po @ jest kropka
                && email.split('@')[1].substring(email.split('@')[1].lastIndexOf('.')).length > 1; // czy po kropce są przynajmniej 2 znaki
    }

    isInputTooShort(length: number) {
        return this.formDetails.personalData.name.length < length || this.formDetails.personalData.surname.length < length;
    }

    isSet(obj: object) {
        return Object.values(obj).some(v => v == '' || v == -1 || v == null || v == undefined);
    }

    finish() {
        console.log(this.formDetails)
        this.displaySummary = true;
    }

    restart() {
        this.displaySummary = false;
        this.formDetails = structuredClone(this.default);
        this.step=1
    }
}

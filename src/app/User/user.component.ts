import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector:   'app-user',
    standalone:  true,
    imports:     [FormsModule],
    templateUrl: './user.component.html',
    styleUrl:    './user.component.css'
})

export class UserComponent{
    @Output() calculate = new EventEmitter<{
        InitialInvestment:  number;
        AnualInvestment:    number;
        ExpectedReturn:     number;
        Duration:           number;
    }>();

    enteredInitialInvestment=   0;
    enteredAnualInvestment=     0;
    enteredExpectedReturn=      0;
    enteredDuration=            0;
    
    onSubmit(){
        this.calculate.emit({
            InitialInvestment: this.enteredInitialInvestment,
            AnualInvestment:   this.enteredAnualInvestment,
            ExpectedReturn:    this.enteredExpectedReturn,
            Duration:          this.enteredDuration
        })
    }
}
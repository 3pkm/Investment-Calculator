import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { UserComponent } from "./User/user.component";
import { ResultComponent } from './Results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserComponent,ResultComponent]
})


export class AppComponent {
  resultData?:{
    year:                number,
    interest:            number,
    valueEndOfYear:      number,
    annualInvestment:    number,
    totalInterest:       number,
    totalAmountInvested: number
}[];


  OncalculateInvestmentResults(data: {
    InitialInvestment:  number;
    AnualInvestment:    number;
    ExpectedReturn:     number;
    Duration:           number;
  }) {
      const {InitialInvestment, AnualInvestment, ExpectedReturn, Duration} = data;

      const annualData = [];
      let investmentValue = InitialInvestment;

      for (let i = 0; i < Duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (ExpectedReturn / 100);

        investmentValue += interestEarnedInYear + AnualInvestment;

        const totalInterest =
          investmentValue - AnualInvestment * year - InitialInvestment;
          
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: AnualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: InitialInvestment + AnualInvestment * year,
        });
      }
    
      this.resultData = annualData;
    }
}

import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { CurrencyConverterPipe } from '../pipe/currency-converter-pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css',
})
export class CustomPipe {
  amount=23;
}

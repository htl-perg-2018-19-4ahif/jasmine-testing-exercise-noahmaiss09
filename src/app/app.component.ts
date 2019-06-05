import { Component } from '@angular/core';
import { InvoiceLine, InvoiceCalculatorService, Invoice } from './invoice-calculator.service';
import { VatCategory } from './vat-categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invoiceLines: InvoiceLine[] = [];
  invoice: Invoice;

  product = '';
  priceInclusiveVat = 0;
  vatCategoryString = 'Food';

  vatCategories = VatCategory;

  constructor(private invoiceCalculator: InvoiceCalculatorService) { }

  addInvoice() {
    this.invoiceLines.push({
      product: this.product,
      priceInclusiveVat: this.priceInclusiveVat,
      vatCategory: this.vatCategories[this.vatCategoryString]
    });

    this.invoice = this.invoiceCalculator.CalculateInvoice(this.invoiceLines);
  }
}

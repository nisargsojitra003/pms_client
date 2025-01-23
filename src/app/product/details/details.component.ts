import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RadioButtonItem } from '../../core/interfaces/radioButtonItem.interface';
import { REGEX_PATTERN } from '../../core/constants/regex';
import { Product } from '../../interfaces/product.interface';

@Component({
  providers: [],
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class ProductDetailsComponent {
  fileError: string | null = null;

  isValidCategory: boolean = true;

  textOnly: string = REGEX_PATTERN.textOnly;
  textAndNumberWithoutSpace = REGEX_PATTERN.textAndNumberWithoutSpace;
  cancelButtonRoute: string = '/product/list';

  allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/jpg'];

  product: Product = {
    id: 0,
    name: '',
    description: '',
    tag: 'small',
    category: null,
    otherCategory: '',
    price: null,
    image: null,
    quantity: null,
    createdAt: '',
    registerTime: null,
    isPrimary: null
  };

  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Grocery' },
    { id: 3, name: 'Clothes' },
  ];

  radioGroupOptions: Array<RadioButtonItem> = [
    { value: 'small', name: 'Small' },
    { value: 'medium', name: 'Medium' },
    { value: 'large', name: 'Large' },
  ];

  filteredCategories = [...this.categories];

  validateSelection(): void {
    const isValid = this.categories.some(
      (category) =>
        category.name.toLowerCase() ===
        this.product.otherCategory?.toLowerCase()
    );
    console.log('category is valid or not?', isValid);
    //this.isValidCategory = isValid ? true : false;

    if (isValid) {
      this.isValidCategory = true;
    } else {
      this.isValidCategory = false;
      this.product.otherCategory = '';
    }
  }

  onOptionSelected(event: any): void {
    console.log('Selected option:', event.option.value);
  }

  filterCategories(): void {
    const searchTerm = this.product.otherCategory?.toLowerCase() || '';

    // Filter categories dynamically based on the search term
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(searchTerm)
    );
  }

  openAutocomplete(auto: any): void {
    auto.open();
  }

  customSearchFn(term: string, item: { name: string }) {
    item.name = item.name.replace(',', '');
    term = term.toLocaleLowerCase();
    return item.name.toLocaleLowerCase().indexOf(term) > -1;
  }

  onSubmit(form: NgForm) {
    // if (form.invalid) {
    //   Object.keys(form.controls).forEach((key) => {
    //     const control = form.controls[key];
    //     control.markAsTouched();
    //     console.log('marked all touched');
    //     control.updateValueAndValidity();
    //     console.log('marked all validity');
    //   });
    //   return;
    // }

    if (form.invalid) {
      console.log('form is invalid');
      form.control.markAllAsTouched();
      console.log('all controls as touched');
      form.control.updateValueAndValidity({ onlySelf: false });
      return;
    }

    if (form.valid) {
      console.log('Form submitted successfully', this.product);
    } else {
      if (!this.product.image) {
        this.fileError = 'File is required.';
      }
      console.log('Form is invalid');
    }
  }

}

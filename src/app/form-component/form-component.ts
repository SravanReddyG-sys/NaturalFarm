import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-component',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './form-component.html',
  styleUrls: ['./form-component.css']
})
export class FormComponent {
  shopForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shopForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      address: ['', Validators.required],
      product: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  get f() {
    return this.shopForm.controls;
  }

  SubmitButton() {
    if (this.shopForm.valid) {
      alert('Order placed successfully!');
      console.log(this.shopForm.value);
      this.shopForm.reset();
    }
  }
}

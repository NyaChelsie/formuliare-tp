import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact-reactive',
  styleUrl: './contact-reactive.css',
  templateUrl: './contact-reactive.html',
})
export class ContactReactiveComponent {
  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    console.log('message envoyé :', this.contactForm.value);
  }
}



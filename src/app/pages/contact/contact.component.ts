import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  queryForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private formBuilder: FormBuilder // private formService: FormService
  ) {
    this.queryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      propertyType: ['', Validators.required],
      location: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = false;

    if (this.queryForm.valid) {
      const formData: any = this.queryForm.value;

      // this.formService.submitQuery(formData).subscribe({
      //   next: (response: any) => {
      //     this.submitSuccess = true;
      //     this.queryForm.reset();
      //     this.submitted = false;
      //   },
      //   error: (error: any) => {
      //     this.submitError = true;
      //     console.error('Error submitting form:', error);
      //   },
      // });
    }
  }
}

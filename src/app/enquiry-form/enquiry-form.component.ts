import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; // Ensure correct path

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css'],
})
export class EnquiryFormComponent {
  name: string = '';
  email: string = '';
  serviceType: string = '';
  message: string = '';
  errors: string[] = [];

  serviceTypes: string[] = [
    'Web Development',
    'Mobile App Development',
    'Cybersecurity',
    'Cloud Services',
    'AI & ML Solutions',
    'IT Consultancy',
  ];

  constructor(private api: ApiService) {}

  submitForm() {
    this.errors = [];

    let emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if (!this.name || this.name.length < 3) {
      this.errors.push('Name should be at least three characters long');
    }
    if (!this.email || !emailPattern.test(this.email)) {
      this.errors.push('Invalid Email');
    }
    if (!this.serviceType) {
      this.errors.push('Please select a service type');
    }
    if (!this.message || this.message.length < 10) {
      this.errors.push('Message should be at least 10 characters long');
    }

    if (this.errors.length === 0) {
      this.api
        .addEnquiry({
          name: this.name,
          email: this.email,
          serviceType: this.serviceType,
          message: this.message,
        })
        .subscribe({
          next: (response: any) => {
            // ✅ Ensure response type is `any`
            console.log('Enquiry Form Response:', response);
            this.name = '';
            this.email = '';
            this.serviceType = '';
            this.message = '';
            alert('Enquiry Submitted Successfully');
          },
          error: (error: any) => {
            alert('Something went wrong. Please try again');
          },
        });
    }
  }
}

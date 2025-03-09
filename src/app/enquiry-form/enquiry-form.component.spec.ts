import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnquiryFormComponent } from './enquiry-form.component';
import { ApiService } from '../services/api.service';

describe('EnquiryFormComponent', () => {
  let component: EnquiryFormComponent;
  let fixture: ComponentFixture<EnquiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule], // ✅ Ensure required modules are added
      declarations: [EnquiryFormComponent],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(EnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form fields', () => {
    expect(component.name).toBe('');
    expect(component.email).toBe('');
    expect(component.serviceType).toBe('');
    expect(component.message).toBe('');
  });

  it('should validate email format', () => {
    component.email = 'invalid-email';
    component.submitForm();
    expect(component.errors).toContain('Invalid Email');
  });

  it('should call API on form submission if valid', () => {
    const apiService = TestBed.inject(ApiService);
    spyOn(apiService, 'addEnquiry').and.returnValue({
      subscribe: () => {},
    } as any);

    component.name = 'John Doe';
    component.email = 'john@example.com';
    component.serviceType = 'Web Development';
    component.message = 'This is a test message.';
    component.submitForm();

    expect(apiService.addEnquiry).toHaveBeenCalled();
  });
});

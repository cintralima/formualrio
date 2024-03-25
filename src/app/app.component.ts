import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step1Component } from './componetes/step1/step1.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step2Component } from './componetes/step2/step2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Step1Component, Step2Component, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentStep = 1;
  totalSteps = 2;
  value : any


  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      step1: this.formBuilder.group({
        name: '',
        age: '',
      }),
      step2: this.formBuilder.group({
        email: '',
        cep: '',
      }),
    });
  }

  getStep1Form(): FormGroup {
    return this.form.get('step1') as FormGroup;
  }

  getStep2Form(): FormGroup {
    return this.form.get('step2') as FormGroup;
  }



  goBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goForward() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    } else {
      const formualrio = this.form.value

      console.log('aqui',formualrio)
    }


  }
}


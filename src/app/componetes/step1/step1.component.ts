import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  public form!: FormGroup;

  constructor(private formContainer: AppComponent) {}

  ngOnInit() {
      this.form = this.formContainer.getStep1Form()
  }



}

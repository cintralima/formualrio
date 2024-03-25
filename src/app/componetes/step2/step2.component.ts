import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-step2',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  public form!: FormGroup;
  constructor(private FormContainer: AppComponent ) { }

  ngOnInit() {
    this.form = this.FormContainer.getStep2Form()
  }

}

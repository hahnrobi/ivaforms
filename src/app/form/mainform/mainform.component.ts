import { FormService } from './../form-service.service';
import { Component, OnInit } from '@angular/core';
import { IvaFormschema } from 'src/app/classes/iva-forms-schema';
import { IvaFormGroup } from 'src/app/classes/iva-forms-group';
import { FormGroup } from '@angular/forms';
import { animate, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.scss'],
})
export class MainformComponent implements OnInit {

  form:IvaFormschema;
  formGroups: IvaFormGroup[] = [];

  currentFormGroupIndex = 0;

  constructor(private formService: FormService) {
    this.form = formService.getForm();
  }

  ngOnInit(): void {
    this.form.groups.forEach(group =>{
      this.formGroups.push(this.formService.parseFormGroup(group));
    });
    
    console.log(this.formGroups);
  }

  submitClicked() {
    if(this.currentFormGroupIndex + 1 < this.formGroups.length) {
      this.currentFormGroupIndex++;
    }else {
      alert("Done");
    }
  }

}
function query(arg0: string, arg1: any[], arg2: { optional: boolean; }): any {
  throw new Error('Function not implemented.');
}


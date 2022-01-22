import { IvaFormsGroupchema } from './../classes/iva-forms-schema';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IvaFormsControl } from '../classes/iva-forms-control';
import { IvaFormsFieldSchema } from '../classes/iva-forms-schema';
import { IvaFormGroup } from '../classes/iva-forms-group';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  getForm() {
    return JSON.parse('{ "version": 1, "id": "203dfcf9-3fcc-4c0e-b11a-dee91ff5291e", "form_title": "My First IVA Form", "form_description": "Welcome to my very first form.", "submit_text": "Submit my entry", "user_can_modify": false, "user_can_delete": false, "user_can_delete_after_approved": false, "requires_approve": false, "send_email": false, "groups": [ { "id": "jiogjf389wafuj89ewarufew", "form_group_title": "Ló adatai", "fields": [ { "type": "text", "name": "test", "label": "Ez egy próba", "validation": [ { "type": "required" } ] }, { "type": "email", "name": "email", "label": "Email", "repeat": true, "sendmail": true, "unique": true, "validation": [ { "type": "required" } ] }, { "type": "text", "name": "name", "label": "Name", "required": true, "validation": [ { "type": "required" }, { "type": "minLength", "value": 5, "error_msg": "This should be at least {limit} chars long." }, { "type": "maxLength", "value": 50 } ] }, { "type": "text", "name": "address", "label": "Lakcím", "required": true, "validation": [ { "type": "required" }, { "type": "minLength", "value": 5, "error_msg": "This should be at least {limit} chars long." }, { "type": "maxLength", "value": 50 } ] }, { "type": "text", "name": "phone", "label": "Telefonszám", "required": true, "validation": [ { "type": "required" }, { "type": "minLength", "value": 5, "error_msg": "This should be at least {limit} chars long." }, { "type": "maxLength", "value": 50 } ] }, { "type": "text", "name": "hobby", "label": "Hobbik", "required": true, "validation": [ { "type": "required" }, { "type": "minLength", "value": 5, "error_msg": "This should be at least {limit} chars long." }, { "type": "maxLength", "value": 50 } ] } ] }, { "id": "jiogjf389wafuj89ewarufew", "form_group_title": "Ember adatai", "fields": [ { "type": "text", "name": "test", "label": "Ez egy próba", "validation": [ { "type": "required" } ] }, { "type": "email", "name": "email", "label": "Email", "repeat": true, "sendmail": true, "unique": true, "validation": [ { "type": "required" } ] }, { "type": "text", "name": "name", "label": "Name", "required": true, "validation": [ { "type": "required" }, { "type": "minLength", "value": 5, "error_msg": "This should be at least {limit} chars long." }, { "type": "maxLength", "value": 50 } ] } ] } ] }')
  }

  parseFormGroup(groupSchema: IvaFormsGroupchema) {
    let group = new IvaFormGroup();
    let controls:{ [key: string]: IvaFormsControl } = {};
    groupSchema.fields.forEach((element: IvaFormsFieldSchema) => {
      let control = new IvaFormsControl(element);
      console.log(control.id);
      controls[control.name] = control;
      console.log(controls);
      group.addControl(control.name, control);
    });

    
    group.form_group_title = groupSchema.form_group_title!;
    group.form_group_description = groupSchema.form_group_description!;
    return group;
  }
}

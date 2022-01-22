import { FormGroup } from '@angular/forms';
export class IvaFormGroup extends FormGroup {
	form_group_title: string;
	form_group_description: string;
	
	constructor(...params:any) {
		super(params);
	}
}
import { IvaFormsFieldSchema, IvaFormsValidationSchema } from './iva-forms-schema';
import { AsyncValidator, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { IvaFormsValidation } from './iva-forms-validation';
export class IvaFormsControl extends FormControl {
	id: string;
	name: string;
	type: string;
	label?: string;
	repeat?: boolean;
	unique?: boolean;
	control?: FormControl
	validation:IvaFormsValidation[];

	constructor(input: IvaFormsFieldSchema, ...other:any) {
		super(other);
		this.id = input.id;
		this.type = input.type;
		this.name = input.name;
		this.label = input.label;
		this.unique = input.unique;
		this.control = new FormControl();
		this.validation = [];

		if(this.type === "email") {
			const emailValidationSchema = {type: "email", error_msg: "Email cím megadása kötelező."};
			this.validation.push(new IvaFormsValidation(emailValidationSchema));
		}
		if(input.validation) {
			input.validation.forEach((validation: IvaFormsValidationSchema) => {
				if(validation) {
					this.validation.push(new IvaFormsValidation(validation));
				}
			})
		}

		this.validation.forEach(validation => {
			this.addValidators(validation.validate);
		})
		//this.valiation = new IvaFormsBaseValidation();
	}
}

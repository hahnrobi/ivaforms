import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { IvaFormsValidationSchema } from "./iva-forms-schema";

export class IvaFormsValidation {
	type: string;
	value?: any;
	error_msg?: string;
	validate:ValidatorFn|AsyncValidatorFn;

	constructor(input:IvaFormsValidationSchema) {
		this.type = input.type;
		this.value = input.value;
		this.error_msg = input.error_msg;
		if(input.type === "required") {
			this.validate = 
			(control: AbstractControl): ValidationErrors | null => {
				console.log("required check");
				return !(control.value === undefined || control.value === null || control.value == "") ? null : {required: {error_msg: this.error_msg}};
			};
		}
		if(input.type === "min") {
			this.validate = 
			(control: AbstractControl): ValidationErrors | null => {
				return control.value <= this.value ? null : {minLength: {value: control.value, min: this.value, error_msg: this.error_msg}};
			};
		}
		if(input.type === "max") {
			this.validate =
			(control: AbstractControl): ValidationErrors | null => {
				return control.value >= this.value ? null : {maxLength: {value: control.value, max: this.value, error_msg: this.error_msg}};
			};
		}
		if(input.type === "minLength") {
			this.validate =
			(control: AbstractControl): ValidationErrors | null => {
				return control.value.length >= this.value ? null : {minLength: {value: control.value, minLength: this.value, error_msg: this.error_msg}};
			};
		}
		if(input.type === "maxLength") {
			this.validate =
			(control: AbstractControl): ValidationErrors | null => {
				return control.value.length <= this.value ? null : {maxLength: {value: control.value, maxLength: this.value, error_msg: this.error_msg}};
			};
		}
		if(input.type === "regex") {
			this.validate =
			(control: AbstractControl): ValidationErrors | null => {
				const regex = RegExp(this.value);
				const isPattern = regex.test(control.value);
				return isPattern ? null : {regex: {value: control.value, pattern: this.value, error_msg: this.error_msg}};
			};
		}
		if(input.type === "email") {
			this.validate =
				(control: AbstractControl): ValidationErrors | null => {
				const regex = RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
				const isEmail = regex.test(control.value);
				return isEmail ? null : {emailAddress: {value: control.value, error_msg: this.error_msg}};
			  };;
		}

	}
}


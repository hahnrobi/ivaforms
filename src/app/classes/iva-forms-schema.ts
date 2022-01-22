export type IvaFormschema = {
	version: string,
	id: string,
	form_title?: string,
	form_description?: string,
	submit_text?: string,
	user_can_modify?: boolean,
	user_can_delete?: boolean,
	user_can_delete_after_approved?: boolean,
	requires_approve?: boolean,
	send_email?: boolean,
	groups: IvaFormsGroupchema[]
}
export type IvaFormsGroupchema = {
	id: string,
	form_group_title?: string,
	form_group_description?: string,
	fields: IvaFormsFieldSchema[]
}


export type IvaFormsFieldSchema = {
	id: string,
	type: string,
	name: string,
	placeholder?: string,
	label?: string,
	required?: boolean,
	repeat?: boolean,
	sendmail?: boolean,
	unique?: boolean,
	validation: [IvaFormsValidationSchema]
}

export type IvaFormsValidationSchema = {
	type: string,
	value?: string,
	error_msg?: string
}
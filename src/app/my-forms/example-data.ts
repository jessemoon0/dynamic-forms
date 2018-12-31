export const myFormData = {
  name1: {
    type: 'text',
    label: 'Name',
    placeholder: 'Add a name',
    name: 'name',
    value: 'Jessie',
    validators: [
      {
        type: 'required',
        message: 'Name is Required'
      }
    ],
    options: [],
    disabled: false
  },
  email1: {
    type: 'email',
    label: 'Email',
    placeholder: 'Add a valid email',
    name: 'email',
    value: 'shajessie@hotmail.com',
    validators: [
      {
        type: 'required',
        message: 'Email is Required'
      }
    ],
    options: [],
    disabled: false
  },
  button: {
    type: 'button',
    label: 'Save'
  }
};

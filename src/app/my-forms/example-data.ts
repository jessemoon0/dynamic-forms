export const myFormData = {
  name1: {
    label: 'Name',
    placeholder: 'Add a name',
    name: 'name',
    value: 'Jessie',
    type: 'text',
    validators: [
      {
        type: 'required',
        message: 'Name is Required'
      }
    ],
    options: [],
    disabled: false
  }
};

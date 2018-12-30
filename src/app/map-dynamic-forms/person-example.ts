export const personData = {
  name1: {
    label: 'Name',
    value: 'Juri',
    type: 'text',
    validation: {
      required: true
    }
  },
  age1: {
    label: 'Age',
    value: 32,
    type: 'text'
  },
  gender1: {
    label: 'Gender',
    value: 'M',
    type: 'radio',
    options: [
      { label: 'Male', value: 'M'},
      { label: 'Female', value: 'F'}
    ]
  },
  city1: {
    label: 'City',
    value: '39010',
    type: 'select',
    options: [
      { label: '(choose one)', value: ''},
      { label: 'Bolzano', value: '39100'},
      { label: 'Meltina', value: '39010'},
      { label: 'Appiano', value: '39057'}
    ],
    validation: {
      required: true
    }
  }
};

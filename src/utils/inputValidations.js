/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'username',
  label: 'User Name',
  type: 'text',
  id: 'username',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const firstname_validation = {
  name: 'firstname',
  label: 'First Name',
  type: 'text',
  id: 'firstname',
  placeholder: 'write your first name ...',
  validation: {
    required: {
      value: true,
      message: 'firstname required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const lastname_validation = {
  name: 'lastname',
  label: 'Last Name',
  type: 'text',
  id: 'lasttname',
  placeholder: 'write your last name ...',
  validation: {
    required: {
      value: true,
      message: 'lastname required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const organization_validation = {
  name: 'organization',
  label: 'Rrganization',
  type: 'text',
  id: 'organization',
  placeholder: 'write your organization ...',
  validation: {
    required: {
      value: true,
      message: 'organization required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}


export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: "You must specify a password",
    minLength: {
      value: 6,
      message: "Password must have at least 6 characters"
    }
  },
}

export const comfirmpassword_validation = {
  name: 'password_repeat',
  label: 'Password Repeat',
  type: 'password',
  id: 'password_repeat',
  placeholder: 'type comfirm password ...',
  validation: {
    validate: value =>
    value === getValues("password") || "The passwords do not match"
  },
}

export const slide_validation = {
  name: 'thickness',
  label: 'Slide thickness',
  type: 'number',
  id: 'thickness',
  placeholder: 'write slide thickness',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const pixel_validation = {
  name: 'pixel',
  label: 'Pixel resolution of the slides',
  type: 'number',
  id: 'pixel',
  placeholder: 'write pixel resolution of the slides',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'write email address',
  validation: {
    required: {
      value: true,
      message: 'email required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

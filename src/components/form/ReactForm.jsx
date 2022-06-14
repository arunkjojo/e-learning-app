import React from "react";
import { useForm } from "react-hook-form";
import { Divider } from "antd";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// https://react-hook-form.com/

function BasicHookForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(watch("example"));
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="default">Default (watch): </label>
      <input defaultValue="test" {...register("example")} />
      <br/>
      <label htmlFor="required">Required: </label>
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input type="submit" />
    </form>
  );
}

function RegisterHookForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="firstName">First Name: </label>
      <input {...register("firstName")} />
      <br/>
      <label htmlFor="gender">Gender: </label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <br/>
      <input type="submit" />
    </form>
  );
}

function ValidationHookForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name: </label>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <br/>
      <label htmlFor="lastName">Last Name: </label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <br/>
      <label htmlFor="age">Age: </label>
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <br/>
      <input type="submit" />
    </form>
  );
};


const InputFeild = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);
const SelectFeild = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));
function IntegratingExistingHookForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFeild label="First Name" register={register} required />
      <br/>
      <SelectFeild label="Age" {...register("Age")} />
      <br/>
      <input type="submit" />
    </form>
  );
};

function ErroHandleHookForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="firstName">First Name: </label>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      <br/>
      <label htmlFor="lastName">Last Name: </label>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      <br/>
      <input type="submit" />
    </form>
  );
}

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();
function SchemaValidationHookForm() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name: </label><input {...register("firstName")} />
      {errors.firstName?.message}
      <br/>
      <label>Age: </label><input {...register("age")} />
      {errors.age?.message}
      <br/>
      <input type="submit" />
    </form>
  );
}

const ReactForm = () => {
  return (
    <div>
      <Divider>Basic</Divider>
      <BasicHookForm />

      <Divider>Register fields</Divider>
      <RegisterHookForm />

      <Divider>Apply validation</Divider>
      <ValidationHookForm />

      <Divider>Integrating an existing form</Divider>
      <IntegratingExistingHookForm />

      <Divider>Handle errors</Divider>
      <ErroHandleHookForm />

      <Divider>Schema Validation</Divider>
      <SchemaValidationHookForm />

      {/* <Divider>Antd Form & React Hook Form</Divider>
      <AntdFormWithHookForm /> */}

    </div>
  );
};

export default ReactForm;

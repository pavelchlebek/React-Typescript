import * as React from 'react';

import {
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type TProps = NoChildren

interface IFormInputs {
  email: string
  password: string
}

export const ReactHookForm: React.FC<TProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>()

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log("form data is: ", data)
  }

  // console.log("errors.password: ", errors.password)
  console.log("watch variable email: ", watch("email"))

  return (
    <div style={{ margin: "100px" }}>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <input defaultValue="example@test.com" {...register("email")} />
        <input {...register("password", { required: true })} />
        {errors.password && <div>password is required</div>}
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

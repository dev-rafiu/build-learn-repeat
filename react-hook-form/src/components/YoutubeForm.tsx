import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

function YouTubeForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "kulkan",
      email: "",
      channel: "web dev simplified",
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data);
    console.log("form submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          <p className="error">{errors?.username?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Email is not valid",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return fieldValue !== "admin@gmail.com"
                    ? true
                    : "admin@gmail.com is for admins only";
                },
              },
            })}
          />
          <p className="error">{errors?.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", { required: "Channel is required" })}
          />
          <p className="error">{errors?.channel?.message}</p>
        </div>

        <button>submit</button>
      </form>
      <DevTool control={control} placement="bottom-right" />
    </>
  );
}

export default YouTubeForm;

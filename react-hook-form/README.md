# React Hook Form

React hook form provides a performant, extensible and flexible forms with easy-to-use validation.

## Basic Usage

import `useForm` from `react-hook-form`

The `useForm` hook accepts an optional object, and also returns an object with very usefull properties and methods.

To submit a form we use the `handleSubmit` method from `useForm`, assigned to the `onSubmit` form event and passed in our `onSubmit` function.

```js
const onSubmit = (data: FormValues) => {
  console.log(data);
};
```

```html
<form onSubmit="{handleSubmit(onSubmit)}" novalidate></form>
```

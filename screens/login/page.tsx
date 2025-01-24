import React, { useState } from "react";
import { YStack, Input, Label, Button, XStack, Text } from "tamagui";
import { useForm, Controller } from "react-hook-form";

const TamaguiForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <YStack space="$4" padding="$4" width="100%" maxWidth={400}>
      <YStack space="$2">
        <Label htmlFor="name">Name</Label>
        <Controller
          control={control}
          name="name"
          rules={{ required: "Name is required" }}
          render={({ field: { onChange, value } }) => (
            <Input
              id="name"
              placeholder="Enter your name"
              value={value}
              onChangeText={onChange}
              borderColor={errors.name ? "$red10" : "$borderColor"}
            />
          )}
        />
        {errors.name && <Text color="$red10">{errors.name.message}</Text>}
      </YStack>

      <YStack space="$2">
        <Label htmlFor="email">Email</Label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              id="email"
              placeholder="Enter your email"
              value={value}
              onChangeText={onChange}
              borderColor={errors.email ? "$red10" : "$borderColor"}
            />
          )}
        />
        {errors.email && <Text color="$red10">{errors.email.message}</Text>}
      </YStack>

      <YStack space="$2">
        <Label htmlFor="age">Age</Label>
        <Controller
          control={control}
          name="age"
          rules={{
            required: "Age is required",
            min: {
              value: 18,
              message: "Must be at least 18",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              id="age"
              placeholder="Enter your age"
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
              borderColor={errors.age ? "$red10" : "$borderColor"}
            />
          )}
        />
        {errors.age && <Text color="$red10">{errors.age.message}</Text>}
      </YStack>

      <Button onPress={handleSubmit(onSubmit)} backgroundColor="$blue10">
        Submit
      </Button>
    </YStack>
  );
};

export default TamaguiForm;

"use client";

import { Box, Button, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FloatingField } from "../chakraui/floating-field";
import { FloatingFieldArea } from "../chakraui/floating-field-area";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box width="80%" display="flex">
      <form onSubmit={onSubmit}>
        <HStack gap="5" width="full" alignItems="flex-start">
          <FloatingField
            name="firstName"
            label="First Name"
            errorText="First name is required"
            register={register}
            invalid={!!errors.firstName}
          />
          <FloatingField
            name="lastName"
            label="Last Name"
            errorText="First name is required"
            register={register}
            invalid={!!errors.lastName}
          />
        </HStack>
        <FloatingField
          name="email"
          label="Email"
          errorText="Email is required"
          register={register}
          invalid={!!errors.email}
        />
        <FloatingField
          name="subject"
          label="Subject"
          errorText="Subject is required"
          register={register}
          invalid={!!errors.subject}
        />
        <FloatingFieldArea
          name="message"
          label="Message"
          errorText="Message is required"
          register={register}
          invalid={!!errors.subject}
        />
        <HStack gap="5" width="full" justifyContent="flex-end">
          <Button visual="ghost" px={4} mt={4} alignContent="flex-end">
            Submit
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default ContactForm;

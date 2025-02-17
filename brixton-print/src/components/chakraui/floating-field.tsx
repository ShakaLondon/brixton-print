import { Box, Field as ChakraField, Input } from "@chakra-ui/react";
import { FocusEvent, ChangeEvent, useState, forwardRef } from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { FormValues } from "../contactForm/contactForm";

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  invalid: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  helperText?: React.ReactNode;
  errorText?: string;
  optionalText?: React.ReactNode;
}

export const FloatingField = forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const {
      name,
      label,
      helperText,
      errorText,
      optionalText,
      placeholder,
      register,
      invalid,
      ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (props.onFocus) props.onFocus(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasContent(e.target.value.trim().length > 0);
      if (props.onBlur) props.onBlur(e);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setHasContent(e.target.value.trim().length > 0);
      if (props.onChange) props.onChange(e);
    };

    return (
      <ChakraField.Root
        ref={ref}
        {...rest}
        invalid={invalid}
        height={helperText ? "5rem" : "4rem"}
      >
        <Box position="relative" minHeight="3rem" width="100%">
          <Input
            placeholder=" "
            height="100%"
            pt={4}
            px={4}
            bg="brand.0"
            {...register(name, {
              required: errorText,
              onBlur: handleBlur,
              onChange: handleChange,
            })}
            onFocus={handleFocus}
          />
          {label && (
            <ChakraField.Label
              position="absolute"
              left="0.75rem"
              top={isFocused || hasContent ? "0.4rem" : "50%"}
              transform={
                isFocused || hasContent
                  ? "translateY(0) scale(0.85)"
                  : "translateY(-50%) scale(1)"
              }
              transformOrigin="top left"
              transition="all 0.2s ease-out"
              pointerEvents="none"
              background="white"
              paddingInline="0.4rem"
            >
              {label}
              <ChakraField.RequiredIndicator fallback={optionalText} />
            </ChakraField.Label>
          )}
        </Box>
        {helperText && (
          <ChakraField.HelperText mb={1}>{helperText}</ChakraField.HelperText>
        )}
      </ChakraField.Root>
    );
  },
);

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "preact/hooks";

const TAX_DOCUMENT_REGEXP = /^[VE]\d{7,8}$/;

export function TaxDocument() {
  const [value, setValue] = useState("");

  const handleOnChange = (value: string) => {
    const upperValue = value.toUpperCase();
    if (upperValue.length <= 10) {
      setValue(upperValue);
      if (TAX_DOCUMENT_REGEXP.test(upperValue)) {
        console.log("Válido:", upperValue);
      } else {
        console.log("Inválido:", upperValue);
      }
    }
  };

  return (
    <InputOTP
      maxLength={10}
      name="taxDocument"
      value={value}
      onChange={handleOnChange}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
        <InputOTPSlot index={6} />
        <InputOTPSlot index={7} />
        <InputOTPSlot index={8} />
        <InputOTPSlot index={9} />
      </InputOTPGroup>
    </InputOTP>
  );
}

import { FC, ChangeEvent } from "react";
import { Label, TextInput } from "flowbite-react";

interface AppInputProps {
  label: string;
  type: "text" | "date" | "email";
  value?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  additionalProps?: object;
}

export const AppInput: FC<AppInputProps> = ({
  label,
  type,
  value,
  onChange,
  name,
  disabled,
  additionalProps,
}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <TextInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...additionalProps}
      />
    </div>
  );
};

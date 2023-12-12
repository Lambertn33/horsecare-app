import { FC, ChangeEvent } from "react";
import { Label, Select } from "flowbite-react";

interface AppSelectProps {
  label: string;
  options?: {
    id: number;
    name: string;
  }[];
  name: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const AppSelect: FC<AppSelectProps> = ({
  label,
  options,
  name,
  onChange,
}) => {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="select" value={label} />
      </div>
      <Select id="select" name={name} onChange={onChange}>
        {options?.map((op) => (
          <option key={op.id} value={op.id}>
            {op.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

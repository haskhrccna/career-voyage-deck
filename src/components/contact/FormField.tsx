import { Input } from "@/components/ui/input";

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const FormField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className={`bg-slate-700 border-slate-600 text-white ${className}`}
        disabled={disabled}
      />
    </div>
  );
};

export default FormField;
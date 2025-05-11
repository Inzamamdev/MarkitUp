import {
  FieldError,
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  id: Path<T>;
  type?: string; // For input type (e.g., text, email) or textarea
  label?: string; // Optional for accessibility
  placeholder?: string;
  className?: string;
  options?: string[]; // For select dropdowns
  rows?: number; // For textarea
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions<T>;
  error?: FieldError;
}

export default function Input<T extends FieldValues>({
  id,
  type = "text",
  label,
  placeholder,
  className = "",
  options,
  rows,
  register,
  registerOptions,
  error,
}: InputProps<T>) {
  const baseStyles =
    "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition duration-200";
  const errorStyles = error ? "border-red-500 focus:ring-red-500" : "";
  const inputStyles = `${baseStyles} ${errorStyles} ${className}`;

  if (type === "textarea") {
    return (
      <textarea
        id={id}
        rows={rows || 4}
        className={inputStyles}
        placeholder={placeholder}
        aria-label={label}
        {...register(id, registerOptions)}
      />
    );
  }

  if (type === "select") {
    return (
      <select
        id={id}
        className={inputStyles}
        aria-label={label}
        {...register(id, registerOptions)}
      >
        <option value="">Select {label}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      id={id}
      className={inputStyles}
      placeholder={placeholder}
      aria-label={label}
      {...register(id, registerOptions)}
    />
  );
}

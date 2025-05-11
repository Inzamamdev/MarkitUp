import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  error?: FieldError;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;
  return <p className="mt-1 text-sm text-red-500">{error.message}</p>;
}

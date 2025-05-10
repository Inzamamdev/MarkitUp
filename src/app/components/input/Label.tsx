interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

export default function Label({
  htmlFor,
  children,
  className = "",
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${className}`}
    >
      {children}
    </label>
  );
}

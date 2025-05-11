// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
}

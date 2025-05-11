import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Input from "./input/Input";
import Label from "./input/Label";
import ErrorMessage from "./input/Error";
import toast from "react-hot-toast";
import Link from "next/link";
type AuthForm = {
  email: string;
  password: string;
};

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { signIn, signUp, loading, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  console.log(error);
  const onSubmit = async (data: AuthForm) => {
    if (isLogin) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);

      if (!error) {
        toast.success("Check your mail for SignIn", {
          duration: 4000,
          position: "top-center",
        });
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl overflow-hidden"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isLogin ? "Sign In" : "Create Account"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {isLogin ? "Welcome back!" : "Join SoftSell today"}
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="mb-4">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    register={register}
                    registerOptions={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    error={errors.email}
                  />
                  <ErrorMessage error={errors.email} />
                </div>

                <div className="mb-4">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    register={register}
                    registerOptions={{
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    }}
                    error={errors.password}
                  />
                  <ErrorMessage error={errors.password} />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading
                    ? "Loading..."
                    : isLogin
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <Link
                    href={isLogin ? "/" : ""}
                    className="ml-1 text-blue-600 dark:text-blue-400 hover:underline"
                    onClick={toggleAuthMode}
                  >
                    {isLogin ? "Sign Up" : "Sign In"}
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;

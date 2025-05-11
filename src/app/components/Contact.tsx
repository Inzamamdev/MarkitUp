import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import Input from "./input/Input";
import Label from "./input/Label";
import ErrorMessage from "./input/Error";
type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

const licenseTypes = ["Personal", "Business", "Enterprise"];

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = () => {
    setTimeout(() => {
      setIsSubmitted(true);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fill out the form below and our team will get back to you within 24
            hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500"
                >
                  <CheckCircle size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thanks for reaching out. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      register={register}
                      registerOptions={{ required: "Name is required" }}
                      error={errors.name}
                    />
                    <ErrorMessage error={errors.name} />
                  </div>

                  <div>
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

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      type="text"
                      register={register}
                      registerOptions={{ required: "Company is required" }}
                      error={errors.company}
                    />
                    <ErrorMessage error={errors.company} />
                  </div>

                  <div>
                    <Label htmlFor="licenseType">License Type *</Label>
                    <Input
                      id="licenseType"
                      type="select"
                      options={licenseTypes}
                      register={register}
                      registerOptions={{
                        required: "Please select a license type",
                      }}
                      error={errors.licenseType}
                    />
                    <ErrorMessage error={errors.licenseType} />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Input
                      id="message"
                      type="textarea"
                      placeholder="Tell us about your licenses or any questions you have"
                      register={register}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 w-full md:w-auto flex "
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

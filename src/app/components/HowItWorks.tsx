import { motion } from "framer-motion";
import { Upload, Scaling, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-blue-500" />,
      title: "Upload License",
      description:
        "Securely upload your unused software license details to our platform.",
    },
    {
      icon: <Scaling className="h-12 w-12 text-blue-500" />,
      title: "Get Valuation",
      description:
        "Our AI-powered system determines the fair market value of your license.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-blue-500" />,
      title: "Get Paid",
      description:
        "Once a buyer is matched, receive payment directly to your account.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className=" mx-auto px-4 max-w-7xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How It
            <span className="text-blue-600 dark:text-blue-400"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SoftSell makes it easy to monetize your unused software licenses in
            three simple steps
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pt-8"
            >
              <div className="flex flex-col items-center text-center ">
                <div className="mb-6 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>

                {/* Step number */}
                <div className="absolute -translate-y-8 -translate-x-8  w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>

                {/* Connector line between steps */}
                {/* {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 right-0 w-1/2 h-0.5 bg-blue-200 dark:bg-blue-800 transform translate-x-full" />
                )} */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center sm:text-left bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500"
          >
            Start Selling Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

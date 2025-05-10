import { motion } from "framer-motion";
import { ShieldCheck, Clock, DollarSign, Users } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: "Secure Transactions",
      description:
        "All transactions are secured with enterprise-grade encryption and escrow protection.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Fast Process",
      description:
        "Get valuations in minutes and complete transactions within 24-48 hours.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-500" />,
      title: "Maximum Value",
      description:
        "Our matching algorithm ensures you get the best possible price for your licenses.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Verified Network",
      description:
        "All buyers and sellers are verified to ensure legitimate and trustworthy transactions.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
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
            Why Choose{" "}
            <span className="text-blue-600 dark:text-blue-400">SoftSell</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've built the most trusted platform for software license reselling
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 p-6 hover:shadow-lg dark:hover:shadow-blue-900/10 hover:border-blue-200 dark:hover:border-blue-800 border border-transparent"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-blue-600 dark:bg-blue-700 text-white rounded-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to maximize your software ROI?
              </h3>
              <p className="text-blue-100">
                Join thousands of businesses already selling their unused
                licenses
              </p>
            </div>
            <a
              href="#contact"
              className="text-center items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
              Turn Unused Software Licenses into{" "}
              <span className="text-blue-600 dark:text-blue-400">Revenue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              SoftSell helps businesses buy and sell unused software licenses,
              reducing IT costs and maximizing ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-accent text-center sm:text-left"
              >
                Sell My Licenses
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary text-center sm:text-left"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  Verified Buyers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="text-green-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  Get Paid Fast
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-green-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  Best Market Value
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-blue-600 dark:bg-blue-700 p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-white text-sm">
                      SoftSell Dashboard
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                      Available Licenses
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          name: "Adobe Creative Cloud",
                          price: "$240/yr",
                          discount: "60% off",
                        },
                        {
                          name: "Microsoft 365",
                          price: "$99/yr",
                          discount: "45% off",
                        },
                        {
                          name: "Salesforce",
                          price: "$588/yr",
                          discount: "30% off",
                        },
                        {
                          name: "Slack Enterprise",
                          price: "$120/yr",
                          discount: "35% off",
                        },
                      ].map((license, i) => (
                        <motion.div
                          key={license.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                          className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                        >
                          <div className="text-blue-600 dark:text-blue-400 font-medium">
                            {license.name}
                          </div>
                          <div className="text-gray-800 dark:text-gray-200 font-bold">
                            {license.price}
                          </div>
                          <div className="text-green-600 dark:text-green-400 text-sm">
                            {license.discount}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm">
                      235+ more licenses available
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

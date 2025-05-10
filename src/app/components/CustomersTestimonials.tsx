import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from unused software licenses. The process was incredibly smooth and the team was responsive throughout.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      quote:
        "We were skeptical at first, but SoftSell delivered on their promises. We've now made it a standard practice to resell licenses through their platform whenever we downsize.",
      name: "Michael Chen",
      role: "CFO",
      company: "Innovate Inc.",
      avatar:
        "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  const companies = ["Microsoft", "Adobe", "Salesforce", "Oracle", "IBM"];

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ));
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto px-4 max-w-7xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses of all sizes to maximize the value of their
            software investments
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 p-8 hover:shadow-lg "
            >
              <div className="flex items-center mb-4">{renderStars()}</div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 inline-block">
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              TRUSTED BY INDUSTRY LEADERS
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {companies.map((company) => (
                <div
                  key={company}
                  className="text-xl font-bold text-gray-500 dark:text-gray-400"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

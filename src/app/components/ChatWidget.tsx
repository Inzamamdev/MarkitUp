import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Maximize2, Minimize2 } from "lucide-react";

// Mock data for demo purposes
const presetQuestions = [
  "How do I sell my license?",
  "What types of licenses can I sell?",
  "How long does the process take?",
  "How do payments work?",
];

const faqAnswers: Record<string, string> = {
  "How do I sell my license?":
    "To sell your license, simply fill out the contact form with details about your software. Our team will review it and provide a valuation within 24 hours.",
  "What types of licenses can I sell?":
    "We accept a wide range of enterprise software licenses including Microsoft, Adobe, Oracle, SAP, Salesforce, Autodesk and many more.",
  "How long does the process take?":
    "The entire process typically takes 2-5 business days from submission to payment, depending on the license type and market demand.",
  "How do payments work?":
    "Once a buyer is matched, we facilitate secure payment through our escrow system. You'll receive funds via bank transfer, PayPal, or other preferred methods.",
};

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi there! How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = (text: string = inputMessage) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      let response =
        "I'm not sure about that. Could you try one of the suggested questions?";

      // Check if it matches any preset questions
      if (faqAnswers[text]) {
        response = faqAnswers[text];
      }

      const aiMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg z-20 transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "72px" : "480px",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <MessageCircle size={20} className="mr-2" />
                <h3 className="font-semibold">SoftSell Assistant</h3>
              </div>
              <button
                onClick={toggleMinimize}
                className="text-white hover:text-blue-100"
              >
                {isMinimized ? (
                  <Maximize2 size={18} />
                ) : (
                  <Minimize2 size={18} />
                )}
              </button>
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-grow flex flex-col"
                >
                  {/* Messages container */}
                  <div className="flex-grow p-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`mb-3 ${
                          msg.isUser
                            ? "ml-auto max-w-[80%]"
                            : "mr-auto max-w-[80%]"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-lg ${
                            msg.isUser
                              ? "bg-blue-600 text-white rounded-br-none"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"
                          }`}
                        >
                          {msg.text}
                        </div>
                        <div
                          className={`text-xs mt-1 text-gray-500 ${
                            msg.isUser ? "text-right" : "text-left"
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested questions */}
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 mb-2">
                      Common questions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {presetQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(question)}
                          className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSendMessage();
                        }}
                        placeholder="Type your message..."
                        className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                      <button
                        onClick={() => handleSendMessage()}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 transition-colors"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;

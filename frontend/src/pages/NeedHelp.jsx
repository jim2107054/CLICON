import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const NeedHelp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="px-4 md:px-10 lg:px-36 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Need Help?</h1>
        <p className="text-gray-600 text-lg">
          We're here to assist you. Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="flex items-start gap-4">
            <div className="bg-btnColor text-white p-3 rounded-full">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+880 123 456 789</p>
              <p className="text-gray-600">+880 987 654 321</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-btnColor text-white p-3 rounded-full">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">support@clicon.com</p>
              <p className="text-gray-600">info@clicon.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-btnColor text-white p-3 rounded-full">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">4517 Washington Ave.</p>
              <p className="text-gray-600">Manchester, Kentucky 39495</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-btnColor text-white p-3 rounded-full">
              <FaClock className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-btnColor"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-btnColor"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-btnColor"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-btnColor"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-btnColor text-white py-3 rounded-md hover:scale-105 transition-all duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Common Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">How can I track my order?</h3>
            <p className="text-gray-600">Visit our Track Order page and enter your order number.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">What is your return policy?</h3>
            <p className="text-gray-600">We offer 30-day returns on most items in original condition.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Do you offer warranty?</h3>
            <p className="text-gray-600">Yes, all products come with a 1-year manufacturer warranty.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">How long does shipping take?</h3>
            <p className="text-gray-600">Standard shipping takes 2-4 business days within the country.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;

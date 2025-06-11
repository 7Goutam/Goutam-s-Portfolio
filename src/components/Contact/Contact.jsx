import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uncszzm',    // Replace with your actual service ID
        'template_uy5brv2',   // Replace with your actual template ID
        e.target,
        '2UaoAVIe6JMUkSmnu'     // Replace with your actual public key
      )
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-cyan-400">Me!</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-4 bg-gray-800 border border-gray-700 rounded-lg min-h-[200px]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

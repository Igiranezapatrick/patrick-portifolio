"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // You can integrate with a backend service or email service here
      // For now, this is a placeholder that shows success
      await new Promise((resolve) => setTimeout(resolve, 500));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-reveal section-delay-5">
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px] md:text-[72px]">
          Let's <span className="text-[#914bf1]">Connect</span>
          <br />
          and Work Together
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white/80">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#914bf1] focus:outline-none focus:ring-1 focus:ring-[#914bf1]/50 transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#914bf1] focus:outline-none focus:ring-1 focus:ring-[#914bf1]/50 transition-all"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-white/80">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Inquiry"
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#914bf1] focus:outline-none focus:ring-1 focus:ring-[#914bf1]/50 transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={6}
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#914bf1] focus:outline-none focus:ring-1 focus:ring-[#914bf1]/50 transition-all resize-none"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="rounded-lg bg-green-500/10 border border-green-500/30 px-4 py-3 text-green-400 text-sm font-medium">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-400 text-sm font-medium">
              ✕ Something went wrong. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-lg bg-gradient-to-br from-[#914bf1] to-[#ad63ff] px-8 py-4 font-semibold text-white shadow-md shadow-[#914bf1]/20 transition-all hover:shadow-lg hover:shadow-[#914bf1]/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

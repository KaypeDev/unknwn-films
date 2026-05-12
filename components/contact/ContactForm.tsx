"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading || success) return;

        setLoading(true);
        setError("");

        try {
            await emailjs.send(
                "service_kkzxpxo",
                "template_t408f2n",
                {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    message,
                },
                "GCuLqAsvjhkRXxosP"
            );

            setSuccess(true);

            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setError("Failed to send message. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <h2 className="sr-only">Contact Form</h2>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="max-w-lg mx-auto flex flex-col gap-6"
            >
                {/* Name */}
                <div className="flex flex-col items-start">
                    <label className="text-white font-extrabold">
                        Name <span className="text-white">(required)</span>
                    </label>

                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full border-b border-white bg-transparent pt-2 pb-1 text-white focus:outline-none"
                            required
                        />

                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-full border-b border-white bg-transparent pt-2 pb-1 text-white focus:outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-start w-full">
                    <label className="text-white font-extrabold">
                        Email <span className="text-white">(required)</span>
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full border-b border-white bg-transparent pt-2 pb-1 text-white focus:outline-none"
                        required
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col items-start w-full">
                    <label className="text-white font-extrabold">Message</label>

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message..."
                        className="w-full border-b border-white bg-transparent pt-2 pb-1 text-white focus:outline-none resize-none h-32"
                    />
                </div>

                {/* Button + States */}
                {/* Button + Messages */}
                <div className="flex flex-col gap-2">
                    <button
                        type="submit"
                        disabled={loading || success}
                        className="self-start w-fit bg-white text-black font-extrabold h-10 px-6 rounded-3xl hover:text-white transition text-lg sm:text-xl hover:bg-[#1d1d1d] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sending..." : success ? "Sent" : "Submit"}
                    </button>

                    {/* Success message */}
                    {success && (
                        <p className="text-green-700 text-sm">
                            Message sent successfully.
                        </p>
                    )}

                    {/* Error message */}
                    {error && (
                        <p className="text-red-900 text-sm">
                            {error}
                        </p>
                    )}
                </div>
            </motion.form>
        </section>
    );
}
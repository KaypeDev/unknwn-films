"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                "service_kkzxpxo",
                "template_t408f2n",
                {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    message,
                },
                "GCuLqAsvjhkRXxosP"
            )
            .then(() => {
                alert("Message sent!");

                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error(error);
                alert("Something went wrong.");
            });
    };

    return (
        <section>
            {/* Accessibility / SEO label */}
            <h2 className="sr-only">Contact Form</h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto flex flex-col gap-6"
            >
                {/* Name */}
                <div className="flex flex-col items-start">
                    <label className="text-white font-extrabold">
                        Name <span className="text-white">(required)</span>
                    </label>

                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full border-b border-white bg-transparent pt-2 pb-1 text-white focus:outline-none"
                            required
                        />

                        <input
                            type="text"
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

                <button
                    type="submit"
                    className="self-start w-fit bg-white text-black font-extrabold h-10 px-6 rounded-3xl hover:text-white transition text-lg sm:text-xl hover:bg-[#1d1d1d]"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
'use client'
import { useState, useEffect } from "react";
import dynamic from "next/dynamic"
import { Mail } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';


const Boxes = dynamic(() => import("@/components/ui/background-boxes").then((m) => ({ default: m.Boxes })))

export default function Contact() {
    const [formData, setFormData] = useState({
        "name": "",
        "subject": "",
        "email": "",
        "message": "",
    })

    const notify = (
        msg: string,
        method: typeof toast.success | typeof toast.error
    ) => {
        method(msg, {
            position: "bottom-right",
            autoClose: 3000,
            className:
                "rounded-xl border border-zinc-700 bg-zinc-900 text-sm font-medium text-white shadow-xl",
        });
    };

    const [sending, setSending] = useState(false)

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            const response = await fetch("/api/contact", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(formData),
            });

            if (!response.ok){
                const data = await response.json();
                notify(data.error, toast.error);
            } 
        } catch (err) {
            const message = err instanceof Error ? err.message : "Unexpected Error"
            notify(message, toast.error);
        } finally {
            notify("Email Sent Successfully", toast.success)
            setSending(false);
            setFormData({ "name": "", "subject": "", "email": "", "message": ""})
        }
    } 

  return (
    <div className="flex min-h-screen pt-20 w-full items-start justify-center bg-zinc-950 px-6 py-12 md:px-12 md:py-20 lg:px-16">
        <div className="w-full max-w-2xl">
            <div className="relative w-full overflow-hidden bg-zinc-950 flex flex-col items-center justify-center rounded-lg">
                <Boxes className="mx-20 absolute top-100"/>
                <div className="relative z-20 flex flex-col gap-3 ">
                <h1 className="text-7xl max-sm:text-4xl font-bold text-zinc-300">
                    Get in Touch
                </h1>
                <p className="text-xl max-sm:text-md font-semibold text-zinc-600">
                    Have a project in mind or just want to say hi? I&rsquo;d love to hear from you.
                </p>

                <div className="flex justify-center mt-4 mb-10">
                    <div className="px-6 py-4 border     border-zinc-500 rounded-lg">
                        <div className="flex gap-3 items-center">
                            <Mail />
                            <div>
                                <div className="text-zinc-600 text-xs">Email</div>
                                <div className="text-zinc-300 text-sm">astergoldonline@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mx-8">
                    <form className="flex flex-col gap-4 p-7 border border-zinc-500 rounded-lg w-full" onSubmit={handleSubmit}>
                    <div className="flex gap-4 max-sm:flex-col">
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Name"
                        className="w-full border border-zinc-500 px-4 py-2 rounded-lg bg-transparent text-zinc-300 placeholder:text-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-300/50"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-zinc-500 px-4 py-2 rounded-lg bg-transparent text-zinc-300 placeholder:text-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-300/50"
                        />
                    </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full border border-zinc-500 px-4 py-2 rounded-lg bg-transparent text-zinc-300 placeholder:text-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-300/50"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full border border-zinc-500 px-4 py-2 rounded-lg bg-transparent text-zinc-300 placeholder:text-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-300/50"
                        ></textarea>
                    <button
                        type="submit"
                        className="self-start px-6 py-3 bg-white text-black rounded-lg text-sm font-semibold duration-300 hover:scale-105 cursor-pointer"
                        >
                        {sending ? "Sending..." : "Send Message"}
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  );
}
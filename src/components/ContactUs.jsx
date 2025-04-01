/* eslint-disable no-undef */
import TextArea from "antd/es/input/TextArea";
import { Button, Input } from "antd";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [remark, setRemark] = useState("");
    const [button, setButton] = useState("Send");
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(form.current);
        const requiredFields = ['username', 'email', 'remark'];

        if (requiredFields.some(field => !formData.get(field))) {
            setError("All fields are required.");
            setLoading(false);
            return;
        }

        try {

            // Send admin notification

            // await emailjs.sendForm(
            //     import.meta.env.VITE_SERVICE_ID,
            //     import.meta.env.VITE_TEMPLATE_ID,
            //     form.current,
            //     {
            //         publicKey: import.meta.env.VITE_PUBLIC_KEY,
            //     }
            // );

            await emailjs.sendForm(
                "service_6o76805",
                "template_zawzkx5",
                form.current,
                {
                    publicKey: "f5CIAOozH3wFDf_cJ",
                }
            );

            // form.current.reset();
            setName("");
            setEmail("");
            setRemark("");
            setButton("Sent ✔️");
            setTimeout(() => setButton("Send"), 3000);
            setError("");
        } catch (error) {
            console.error("Email sending failed:", error);
            setError("Message failed to send. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:flex justify-center gap-4" id="contact-us">
            <section className="flex flex-col bg-white/50 md:p-12 p-6 md:rounded-2xl flex-1">
                <div className="w-full mb-2 font-medium text-xl">Contact Us</div>
                <p>Get in touch with us for premium business service. We will promptly respond to all your enquiries.</p>

                <form ref={form} className="mt-10 w-full flex flex-col gap-4">
                    <div className="w-full">
                        <p className="text-sm opacity-40">Your name</p>
                        <Input name="username" placeholder="Enter your full name" className="w-full" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div className="w-full">
                        <p className="text-sm opacity-40">Email</p>
                        <Input name="email" placeholder="example@gmail.com" className="w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="w-full">
                        <p className="text-sm opacity-40">Remark</p>
                        <TextArea
                            name="remark"
                            placeholder="Type your message here..."
                            className="w-full"
                            value={remark} onChange={(e) => setRemark(e.target.value)}
                            autoSize={{ minRows: 6, maxRows: 8 }}
                        />
                    </div>

                    {error && <div className="text-red-500 text-sm">{error}</div>}

                    <Button type="primary" onClick={sendEmail} loading={loading} className="mt-4 bg-blue-400 border-2 border-blue-400">
                        {button}
                    </Button>
                </form>
            </section>

            <section className="bg-white md:p-12 p-6 md:rounded-2xl flex-1">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-start">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <PhoneOutlined />
                                <span className="text-lg">Phone</span>
                            </div>
                            <span className="text-lg">+251911258385</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <PhoneOutlined />
                                <span className="text-lg">Phone</span>
                            </div>
                            <span className="text-lg">+251911058957</span>
                        </div>
                        <div className="flex flex-col items-start col-span-2 md:col-span-1">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <MailOutlined />
                                <span className="text-lg">Email</span>
                            </div>
                            <span className="text-lg">tadesse.tilaye@
                                hemispherebridgegroup.com</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <MailOutlined />
                                <span className="text-lg">Email</span>
                            </div>
                            <span className="text-lg">bethelhem.demisse@
                                hemispherebridgegroup.com</span>
                        </div>

                        <div className="flex flex-col items-start col-span-2">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <HomeOutlined className="" />
                                <span className="text-lg">Our Office</span>
                            </div>
                            <span className="text-lg">Addis Ababa, Bole, Shegere
                                House, 5th floor #508</span>
                        </div>
                    </div>

                    <div className="mt-12 rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed/v1/place?q=Addis+Ababa,+Bole,+Shegere+House&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: 10 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;
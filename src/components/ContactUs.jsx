import TextArea from "antd/es/input/TextArea";
import hemiPattern from "/assets/images/hemiPattern.png";
import { Button, Input } from "antd";
import { HomeOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

function ContactUs() {
    return (
        <div className="flex justify-center gap-4">
            <section className="flex flex-col bg-gray-300 p-12 rounded-2xl flex-1">
                <div className="w-full mb-2 font-medium text-xl">Contact Us</div>
                <p className="">Get in touch with us for premium business service, we will promptly respond to all you enquiries.</p>
                <form action="" className="mt-10 w-full flex flex-col gap-4">
                    <div className="w-full">
                        <p className="text-sm opacity-40">Name</p>
                        <Input placeholder="Enter name" className="w-full" />
                    </div>
                    <div className="w-full">
                        <p className="text-sm opacity-40">Email</p>
                        <Input placeholder="example@gmail.com" className="w-full" />
                    </div>
                    <div className="w-full">
                        <p className="text-sm opacity-40">Remark</p>
                        <TextArea placeholder="Type here ..." className="w-full" autoSize={{ minRows: 6, maxRows: 8 }} />
                    </div>
                    <Button type="primary">Send</Button>
                </form>
            </section>
            <section className="bg-white p-12 rounded-2xl flex-1">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-start">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <PhoneOutlined />
                                <span className="text-lg">Phone</span>
                            </div>
                            <span className="text-lg">+123 456 7890</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <MailOutlined />
                                <span className="text-lg">Email</span>
                            </div>
                            <span className="text-lg">info@example.com</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <WhatsAppOutlined />
                                <span className="text-lg">WhatsApp</span>
                            </div>
                            <span className="text-lg">+123 456 7890</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex gap-2 items-center justify-center opacity-50
                            ">
                                <HomeOutlined className="" />
                                <span className="text-lg">Our Office</span>
                            </div>
                            <span className="text-lg">123 Main Street, City, Country</span>
                        </div>
                    </div>

                    <div className="mt-12 rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.54567890123!2d-73.98570801234567!3d40.74881798765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b4a3b4a3%3A0x48f48f48f48f48f4!2s123%20Main%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1631872800000!5m2!1sen!2sus"
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

export default ContactUs
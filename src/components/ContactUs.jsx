import TextArea from "antd/es/input/TextArea";
import { Button, Input } from "antd";
import { HomeOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

function ContactUs() {
    return (
        <div className="flex justify-center gap-4" id="contact-us">
            <section className="flex flex-col bg-white/50 p-12 rounded-2xl flex-1">
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
                        <div className="flex flex-col items-start">
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

export default ContactUs
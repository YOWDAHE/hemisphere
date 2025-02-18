import TextArea from "antd/es/input/TextArea";
import hemiPattern from "/assets/images/hemiPattern.png";
import { Input } from "antd";

function ContactUs() {
    return (
        <div className="flex justify-between">
            <div
                className="bg-black rounded-r-lg flex flex-col items-center justify-center relative overflow-hidden px-40 py-32"
            >
                <div
                    className="absolute text-white inset-0 opacity-[15%] bg-cover shadow-[inset_0px_0px_150px_rgba(0,0,0,1)]"
                    style={{ backgroundImage: `url(${hemiPattern})` }}
                ></div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-full text-center mb-16 font-medium text-lg">Contact Us</div>
                <p className="text-center">Get in touch with us for premium business service, we will promptly respond to all you enquiries.</p>
                <form action="" className="mt-10 w-full px-40 flex flex-col gap-6">
                    <div></div>
                    <Input placeholder="Enter name" className="w-full"/>
                    <Input placeholder="Email" className="w-full"/>
                    <TextArea placeholder="Remark" className="w-full" autoSize={{ minRows: 6, maxRows: 8 }} />
                </form>
            </div>
            <div
                className="bg-black rounded-l-lg flex flex-col items-center justify-center relative overflow-hidden px-40 py-32"
            >
                <div
                    className="absolute text-white inset-0  opacity-[15%] bg-cover shadow-[inset_0px_0px_150px_rgba(0,0,0,1)]"
                    style={{ backgroundImage: `url(${hemiPattern})` }}
                ></div>
            </div>
        </div>
    )
}

export default ContactUs
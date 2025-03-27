import React from "react";

function ServiceList({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
    return <div className="w-full flex flex-col gap-2">
        <div className="text-3xl font-black">{ title }</div>
        <div className="text-lg leading-6 text-pretty">{ description }</div>
    </div>;
}

export default ServiceList;

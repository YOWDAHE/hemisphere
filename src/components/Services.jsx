import { services } from "../data/services"


function Services() {
  return (
      <div className="">
          <div className="text-xl font-medium text-center mb-10">Services We Provide</div>
          <div className="grid grid-cols-3 gap-3">
              {services.map((service) => {
                  return (
                      <div key={service.title} className="flex flex-col items-start gap-y-3 w-full p-10 rounded-md border-[0.25px] border-gray-400">
                          {service.icon}
                          <p>{service.title}</p>
                          <p>{service.description}</p>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default Services
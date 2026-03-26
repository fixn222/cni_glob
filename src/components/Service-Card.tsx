// import React from 'react'
// import React from 'react'
import type { LucideIcon } from "lucide-react";
interface ServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

const ServiceCard = ({ title,
  description,
  icon: Icon,

}: ServiceProps) => {
  return (


    <div className="flex  flex-col p-10 border-2 backdrop-blur-2xl shadow-2xl items-center justify-center ">
      <div className="flex flex-col justify-center items-center">

        <span className="font-bold text-sm mb-5">
          <Icon size={24} />
        </span>
        <p className="font-poppins font-bold text-sm">
          {title}
        </p>
        <p className="font-poppins  text-center text-sm">
          {description}
        </p>

      </div>
    </div>


  )
}

export default ServiceCard
import { services } from "../constants";
import {ServiceCard} from "../components/ServiceCard";

export const Services = () => {
  return (
    <section id="Services" className="max-container w-full flex flex-wrap gap-10 justify-center">
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
      
    </section>
  );
};

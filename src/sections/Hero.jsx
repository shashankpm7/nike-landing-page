import {useState} from "react";

import { Button } from "../components/Button";
import {arrowRight} from "../assets/icons";
import {shoes, statistics} from "../constants";
import {bigShoe1} from "../assets/images";
import {ShoeCard} from "../components/ShoeCard"

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-2xl ">Our summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[78px] max-sm:leading-[84px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The new Arrival</span><br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-sm:max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dicta.</p>
          <Button label="shop now" iconURL={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20  gap-16 ">
            {statistics.map((stat)=>(<div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>))}
          </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cove  bg-center">
        <img 
        src={bigShoeImg} alt="shoe collection" width={610} height={500} 
        className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe,index)=>(
            
            <div key={index}>
              <ShoeCard 
              imgURL = {shoe}
              changeBigShoeImage ={(shoe)=>{setBigShoeImg(shoe)}}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>

    

    </section>
  )
}

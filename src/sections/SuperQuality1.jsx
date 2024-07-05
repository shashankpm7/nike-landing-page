import { shoe8 } from "../assets/images";
import { Button } from "../components/Button";

export const SuperQuality1 = () => {
  return (
    <section id="about-us" className="flex gap-8 w-full max-container max-lg:flex-col max-lg:gap-10">
        <div className="flex flex-col gap-8 justify-center items-start flex-1 max-lg:w-full">
            <h1 className="text-4xl font-bold font-montserrat">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h1>
            <p className="text-xl leading-8 text-slate-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime eaque fugit! Sunt praesentium nemo sint ab repudiandae, officia nam explicabo nihil eaque inventore odio quod saepe est quasi placeat consequatur aut culpa itaque iusto. Inventore, quas veniam. Facilis commodi tempore fuga doloribus omnis, quis blanditiis beatae praesentium! Enim, consectetur.</p>
            <p className="text-xl leading-8 text-slate-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum recusandae, ipsam saepe fugit aliquid.</p>
            <Button label="View details"/>
        </div>
        <div className="flex flex-1 justify-center items-center">
            <img src={shoe8} alt="shoe" 
            width={570} height={522}/>
        </div>
    </section>
  )
}

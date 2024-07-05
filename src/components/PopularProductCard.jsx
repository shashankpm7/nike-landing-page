import { star } from "../assets/icons";

export const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL} alt={name} width={270} height={270}
        className="object-contain"
        />
        <div className="mt-8 flex gap-2 justify-start">
            <img src={star} alt="rating" 
            width={22} height={22}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="text-xl mt-2 leading-normal font-semibold text-coral-red font-montserrat">{price}</p>
    </div>
  )
}

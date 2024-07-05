import { star } from "../assets/icons"

export const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
   <div className="flex-1 flex justify-center items-center flex-col">
    <img src={imgURL} alt="customer-image" 
    className="rounded-full object-cover w-[120px] h-[120px]"
    />
    <p className="text-center info-text max-w-sm mt-6">{feedback}</p>
    <div className="flex mt-5 justify-center items-center gap-2">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
        <p className="text-xl text-slate-gray font-palanquin ">{rating}</p>
    </div>

    <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">{customerName}</h3>

   </div>
  )
}

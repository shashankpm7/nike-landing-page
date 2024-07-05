export const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2
     px-7 py-4 font-montserrat text-lg border leading-none
      ${backgroundColor? `${backgroundColor} ${borderColor} ${textColor}
      `:`text-white border-coral-red border
      bg-coral-red `}
      rounded-full ${fullwidth && 'w-full'}
      `}>
        {label}
        {iconURL && <img src={iconURL} className="ml-4 rounded-full w-5 h-5" alt="right arrow icon" />}
        
    </button>
  )
}

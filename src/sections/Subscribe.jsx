import {Button} from "../components/Button";


export const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl lg:max-w-md font-palanquin  font-bold leading-[68px] text-center">Sign up for 
          <span className="text-coral-red"> Updates </span>
         & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full  flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray sm:border rounded-full ">
        <input type="text" placeholder="Subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end max-sm:w-full items-center">
        <Button label="Sign Up" fullwidth/>
      </div>
      </div>
      
        
        

    </section>
  )
}

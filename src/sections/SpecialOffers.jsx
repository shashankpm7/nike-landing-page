import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components/Button"

export const SpecialOffers = () => {
  return (
    <section className="max-container flex items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img src={offer} alt="offer" 
        width={773} height={687} className="object-contain w-full"/>
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, ab
          minus earum quibusdam aspernatur, distinctio vitae fugit nihil odit,
          exercitationem aut veritatis perspiciatis similique consectetur et?
          Voluptate, quisquam! Facere, culpa blanditiis unde impedit eius
          dolorem vel voluptatum ab nisi consequuntur, deleniti doloribus
          architecto ducimus voluptas voluptatem, cum excepturi iusto vero.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim
          non praesentium obcaecati modi laborum!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-black" 
          textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

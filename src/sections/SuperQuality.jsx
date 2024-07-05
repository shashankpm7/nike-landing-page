import { Button } from "../components/Button";
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";

export const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between gap-10 max-lg:flex-col w-full max-container"
    >
      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
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
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe 8" width={570} height={522} />
      </div>
    </section>
  );
};

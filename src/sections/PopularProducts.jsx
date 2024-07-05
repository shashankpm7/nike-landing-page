import { products } from "../constants";
import { PopularProductCard } from "../components/PopularProductCard";

export const PopularProducts = () => {
  return (
    <section id="products" className="max-sm:mt-12 max-container p-2">
      <div className="flex flex-col justify-start gap-5 max-sm:items-center">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          praesentium excepturi assumenda.
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
         grid-cols-1 sm:gap-6 gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product}/>
            
          ))}
        </div>
      </div>
    </section>
  );
};

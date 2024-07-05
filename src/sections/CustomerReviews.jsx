import { reviews } from "../constants";
import {ReviewCard} from '../components/ReviewCard'

export const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">What Our 
      <span className="text-coral-red">Customer </span>
      Says
      </h3>
      <p className="info-text max-w-lg m-auto mt-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Labore ad mollitia, necessitatibus dolorem voluptatibus laborum.
      </p>
      <div className="flex flex-1 mt-24 justify-evenly max-lg:flex-col gap-14 items-center">
        {reviews.map((review)=>(
          <ReviewCard
            key = {review.customerName}
            imgURL = {review.imgURL}
            customerName = {review.customerName}
            rating = {review.rating}
            feedback = {review.feedback}

          
          />

        ))}
      </div>

    </section>
  )
}

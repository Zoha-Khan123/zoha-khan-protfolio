import React from "react";
import { CardContent, Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-react";
import { reviewsData } from "../components/customer-reviews-data/reviews";
import Review from "../components/customer-reviews-props/reviews";

const CustomerReviews = () => {
  return (
    <section>
      {/* Heading */}
      <div className="flex justify-center">
        <h1 className="mb-4 mt-14 text-xl sm:text-3xl md:text-4xl font-bold border border-[#1788ae] text-[#1788ae] p-2 rounded-lg">
          What my clients are saying?
        </h1>
      </div>

      {/* Carousel */}
      <div className="flex justify-center">
        <Carousel className="w-4/5 md:bg-red-500 lg:bg-blue-500 xl:w-3/5 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]">
          <CarouselContent>
            {reviewsData.map((reviews, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card>
                    <CardContent className="bg-black">
                      <Review reviews={reviews} index={index} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-20 w-20 text-[#1788ae]"/>
          <CarouselNext className="h-20 w-20  text-[#1788ae]"/>
        </Carousel>
      </div>
    </section>
  );
};



export default CustomerReviews;




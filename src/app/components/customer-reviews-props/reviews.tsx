import Image from "next/image"
interface ReviewsType {
    imageUrl :string;
    review:string;
    customerName:string;
    customerWebsite:string;
}

const Review = ({ reviews , index }: { reviews: ReviewsType; index: number  }) => {
return(
    <>
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center w-full pt-8 md:pt-4 rounded-xl text-white">
        {/* Customer Images  */}
        <div className="w-full md:w-[30%] flex justify-center items-center drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]">
        <Image src={reviews.imageUrl} width={180} height={180} alt="image" className="w-36 h-36 lg:h-40 lg:w-40"></Image>
        </div>

        {/* Customer Reviews  */}
        <div className="w-full md:w-[70%] flex flex-col justify-center items-center">
        <p>{reviews.review}</p>
        
        </div>

        </div>

        <div className="text-end">
        <h1 className="text-[#459bd5] md:text-3xl lg:text-4xl font-bold">{reviews.customerName}</h1>
        <h2 className="text-[#459bd5] md:text-xl lg:text-2xl">{reviews.customerWebsite}</h2>
        </div>
    </>
)
};



export default Review;
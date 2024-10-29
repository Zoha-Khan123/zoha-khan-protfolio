import ContactUs from "./contact-us/page";
import CustomerReviews from "./cutomer-reviews/page";
import Footer from "./footer/page";
import LatestWork from "./latest-work/page";
import Main from "./main-page/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <Main></Main>
   <LatestWork></LatestWork>
   <CustomerReviews></CustomerReviews>
   <ContactUs></ContactUs>
   <Footer></Footer>

  </>
  );
}





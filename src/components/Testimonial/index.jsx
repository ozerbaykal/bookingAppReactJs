import Header from "./Header";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <Header />

          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

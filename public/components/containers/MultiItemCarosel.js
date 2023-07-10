import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
;

export const MultiItemCarosel = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} />;
      };


    return (
        <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="px-5 border-black m-auto"
        >
        <div><br/><br/><p>Item 1</p><br/><br/></div>
        <div><br/><br/><p>Item 2</p><br/><br/></div>
        <div><br/><br/><p>Item 3</p><br/><br/></div>
        <div><br/><br/><p>Item 4</p><br/><br/></div>
        <div><br/><br/><p>Item 5</p><br/><br/></div>
        <div><br/><br/><p>Item 6</p><br/><br/></div>
        <div><br/><br/><p>Item 7</p><br/><br/></div>

        </Carousel>

)}
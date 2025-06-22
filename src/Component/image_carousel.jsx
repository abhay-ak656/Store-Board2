import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './image_carousel.css'

export default function Image_Carousel({CoverImage,additionalImage}){
    
    const setting={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
       arrows: true, 
       autoplay: true,            // ✅ enable autoplay
  autoplaySpeed: 2000,       
    }

    return <div className="image-conatiner   w-[40%] mx-auto mt-4 rounded">
   
        <Slider {...setting}>
           <div className='flex' style={{justifyContent:'center'}}><img src={CoverImage?.ImageUrl} className='rounded-lg ' style={{objectFit:'cover', height:'400px', width:'800px',padding:'0.5rem',borderRadius:'20px'}}/></div>
           {additionalImage?.map((image,index) =>(
             <div key={index} className=' h-auto w-full flex justify-center'><img src={image.ImageUrl} alt={`Image ${index+1}`} style={{height:'400px',objectFit:'cover', placeItems:'center', width:'800px',borderRadius:'20px' ,padding:'0.5rem'}} className=''/></div>
           ))}
        </Slider>
    </div>
}
import Button from "../components/Button"
import {shoe8} from '../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container  ">
      <div className="flex  flex-1 flex-col">
      
    <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
     We Provide You
      <span className="text-coral-red i">   Super</span>
      <span className="text-coral-red i"> Quality</span> Outfits
    </h2>
    <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted Outfit is designed to elevate your experience. providing you with the unmatched quality,innovation,and a touch of elegance.

    </p>
    <p className="mt-6 lg:max-w-lg info-text">
      Our dedication to detail and excellence ensures your satisfaction.
    </p>
    <div className="mt-11 ">
     <Button label="View Details" />
     </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8}
         alt="" 
         width={565}
         height={525}
         className="object-contain"/>

      </div>
    </section>
  )
}

export default SuperQuality

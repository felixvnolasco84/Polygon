// "use client";

// import React, { useState } from "react";
// import { neueLight, neueThin } from "@/styles/fonts";
// import Image from "next/image";

// interface Feature {
//   title?: string;
//   description: string;
// }

// interface VideoFeature extends Feature {
//   img: string;
// }

// interface SliderProps {
//   features: VideoFeature[];
//   type?: string;
// }

// const SliderVideoComponent: React.FC<SliderProps> = ({ features }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState<null | string>(null);

//   const handleDotClick = (index: number) => {
//     setActiveIndex(index);
//   };

//     // const handleNext = () => {
//     //   setDirection("right");
//     //   setCurrentIndex((prevIndex) =>
//     //     prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     //   );
//     // };

//     // const handlePrevious = () => {
//     //   setDirection("left");

//     //   setCurrentIndex((prevIndex) =>
//     //     prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     //   );
//     // };


//   return (
//     <div className="flex flex-col gap-4 px-4 py-0 text-black-500 lg:hidden lg:px-24">
//       {/* <Carousel autoplay={true} speed={1000}>         */}
//       {/* <div className="relative min-h-[480px] w-full overflow-hidden rounded-md bg-cover bg-center bg-no-repeat">

//         {features.map((feature, index) => (
//           <>
//             <Image
//               key={index}
//               src={feature.img}
//               alt=""
//               width={380}
//               height={0}
//               layout="responsive"
//               objectFit="cover"
//               objectPosition="center"
//             />
//             <div className="w-full opacity-100 transition-opacity duration-500">
//               {feature.title && (
//                 <p
//                   className={`${neueLight.className} text-xl lg:text-4xl leading-none`}
//                 >
//                   {feature.title}
//                 </p>
//               )}
//               <p
//                 className={`${neueThin.className} mt-2 lg:text-4xl lg:leading-[60px]`}
//               >
//                 {feature.description}
//               </p>
//             </div>
//           </>
//         ))}
//       </div> */}
//       {/* <Image
//             src={features[0].img}
//             alt=""
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//           /> */}
//       {/* </div> */}
//       {/* </Carousel> */}
//       <div className="relative max-h-[480px] min-h-[480px] w-full overflow-hidden rounded-md bg-cover bg-center bg-no-repeat">    
//           <Image
//             className="absolute h-full w-full bg-center object-cover object-center"
//             key={activeIndex}
//             src={features[activeIndex].img}            
//             loading="eager"
//             sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"                        
//             alt=""
//           />        
//         {/* <Image
//           src={features[activeIndex].img}
//           alt=""
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center"
//         /> */}
//         <div className="absolute left-0 top-0 z-10 flex w-full justify-center space-x-2 px-4 py-4">
//           {features.map((_, index) => (
//             <span
//               key={index}
//               className={`w-full h-1 rounded-full cursor-pointer ${
//                 index === activeIndex ? "bg-white" : "bg-white/50"
//               }`}
//               onClick={() => handleDotClick(index)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="w-full opacity-100 transition-opacity duration-500">
//         {features[activeIndex]?.title && (
//           <p
//             className={`${neueLight.className} text-xl lg:text-4xl leading-none`}
//           >
//             {features[activeIndex].title}
//           </p>
//         )}
//         <p
//           className={`${neueThin.className} mt-2 lg:text-4xl lg:leading-[60px]`}
//         >
//           {features[activeIndex].description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SliderVideoComponent;


import React from 'react'

export default function SliderVideoComponen() {
  return (
    <div>SliderVideoComponen</div>
  )
}

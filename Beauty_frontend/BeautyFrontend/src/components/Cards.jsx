
import React from "react";
const Cards = () => {
  
  return (
    
     <div className="p-4">
      {/* Centered Section Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-6 text-[#D6597C]">
        Discover Your Beauty Moments
      </h1>
      
    <div className="grid grid-cols-5 gap-4 p-4">
      {/* Card 1: 60% width (3 out of 5 columns) */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-3 transform hover:scale-95 hover:brightness-110 transition-all duration-300"
        style={{ backgroundImage: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fbackground%2F20230414%2Foriginal%2Fpngtree-makeup-skin-care-products-cosmetics-beauty-photography-advertising-background-picture-image_2424108.jpg&f=1&nofb=1&ipt=81e79242185069e4bcfeaff77beb5c594f8823a270f38c49b63c400dd2919e4f)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Bella Rosse</p> */}
          <h2 className="text-xl font-bold mb-1">Unbox Your Beauty.</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
          Where every shade tells your story.
          </a>
        </div>
      </div>

      {/* Card 2: 40% width (2 out of 5 columns) */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-2 transform hover:scale-95 hover:brightness-110 transition-all duration-300"
        style={{ backgroundImage: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhomeservicebeautyparlour.com%2Fassets%2Fimages%2F06%2Fskin-care-slider.jpg&f=1&nofb=1&ipt=89d10efa2a0ae3c1fc64eebef62f757cc0cbfcd338f7d1bee8104be1fb9e0cb7)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Kellen Starlight</p> */}
          <h2 className="text-xl font-bold mb-1">Glow Starts Here</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
           Nurture your skin, nourish your confidence.
          </a>
        </div>
      </div>

      {/* Card 3: 40% width */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-2 transform hover:scale-95 hover:brightness-110 transition-all duration-300"
        style={{ backgroundImage: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.slidesdocs.com%2Fresponsive-images%2Fbackground%2Fcosmetics-makeup-beauty-tools-cartoon-gradient-advertising-powerpoint-background_6ee5a38183__960_540.jpg&f=1&nofb=1&ipt=f9f70ee242e3cae069febd573493e277e28b7de11082e7e230e7aae74e855984)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Mr. Sacobeat</p> */}
          <h2 className="text-xl font-bold mb-1">Elegance After Dark.</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
            For nights that deserve a little extra magic
          </a>
        </div>
      </div>

      {/* Card 4: 60% width */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-3 transform hover:scale-95 hover:brightness-110 transition-all duration-300"
        style={{ backgroundImage: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fbackground%2F20230414%2Foriginal%2Fpngtree-natural-scenery-plant-cosmetics-makeup-set-advertising-background-picture-image_2424150.jpg&f=1&nofb=1&ipt=633b4f997e38239d7ee7d569d547d00e5ca423d7ef9838d09e3b195f85c359d8)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Jenny Jane</p> */}
          <h2 className="text-xl font-bold mb-1">Golden Hour Glow</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
            Indulge in rituals that love you back.
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;

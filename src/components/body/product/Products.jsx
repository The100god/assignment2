import React, { useState } from "react";

const Products = () => {
    const [proimg, setProimg]=useState(true);
    const [ingimg, setIngimg]=useState(false);
    const [nutimg, setnutimg]=useState(false);

    const handleMouseEnter = (val)=>{
        if (val === 1){
            setProimg(true)
        }
        if (val === 2){
            setIngimg(true)
            setProimg(false)
        }
        if (val === 3){
            setnutimg(true)
            setProimg(false)
        }
    }
    const handleMouseLeave = (val)=>{
        if (val === 1){
            setProimg(true)
        }
        if (val === 2){
            setProimg(true)
            setIngimg(false)
        }
        if (val === 3){
            setProimg(true)
            setnutimg(false)
        }
    }
  return (
    <div className="flex flex-col flex-wrap justify-center items-start w-full md:w-[90%] h-[90%] overflow-hidden m-auto mt-[80px] md:mt-[100px] p-2 pb-8 mb-5">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full h-full p-2 bg-transparent">
        <div className="flex flex-col justify-start items-center w-full lg:w-[40%] h-fit lg:h-full bg-transparent gap-2">
          <div className="flex justify-center items-center w-[80%] h-[300px] lg:h-[430px] border-white border-2 rounded-md bg-transparent cursor-pointer p-2">
            {proimg && <img className=" rounded-md h-full hover:scale-110 transition duration-300 ease-in-out" src="https://images.openfoodfacts.net/images/products/301/762/401/0701/front_en.54.400.jpg" alt="1" />}
            {ingimg && <img className=" rounded-md h-full hover:scale-110 transition duration-300 ease-in-out" src="https://images.openfoodfacts.net/images/products/301/762/401/0701/ingredients_en.60.400.jpg" alt="2" />}
             {nutimg && <img className=" rounded-md h-full hover:scale-110 transition duration-300 ease-in-out" src="https://images.openfoodfacts.net/images/products/301/762/401/0701/nutrition_en.63.400.jpg" alt="3" />}
          </div>
          <div className="flex flex-row justify-center items-center w-full h-fit p-2 gap-1 bg-transparent">
            <div className="flex justify-center items-center w-[40px] md:w-[60px] h-[40px] md:h-[60px] border-white border-2 rounded-md bg-transparent cursor-pointer p-[2px]" onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}
            ><img className="w-full h-full rounded-md hover:opacity-50" src="https://images.openfoodfacts.net/images/products/301/762/401/0701/front_en.54.400.jpg" alt="1" /></div>
            <div className="flex justify-center items-center w-[40px] md:w-[60px] h-[40px] md:h-[60px] border-white border-2 rounded-md bg-transparent cursor-pointer p-[2px]" onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={()=>handleMouseLeave(2)}><img className="w-full h-full rounded-md hover:opacity-50" src="https://images.openfoodfacts.net/images/products/301/762/401/0701/ingredients_en.60.400.jpg" alt="2" /></div>
            <div className="flex justify-center items-center w-[40px] md:w-[60px] h-[40px] md:h-[60px] border-white border-2 rounded-md bg-transparent cursor-pointer p-[2px]" onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={()=>handleMouseLeave(3)}><img className="w-full h-full rounded-md hover:opacity-50" src="https://images.openfoodfacts.net/images/products/301/762/401/0701/nutrition_en.63.400.jpg" alt="3" /></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start w-full lg:w-[60%] h-full gap-2 bg-transparent">
          <div className="flex justify-center items-center font-bold text-2xl md:text-3xl w-full text-center mb-5 bg-transparent"><span className="border-b-2 border-lime-100 p-2 bg-transparent">
          Nutella - Ferrero - 1 kg
          </span></div>
          <div className="flex flex-row w-full gap-3 bg-transparent">
            <div className="flex flex-col bg-transparent">
              <span className="text-[1.1rem] font-semibold bg-transparent">Barcode:</span>
              <span className="bg-transparent text-[1rem]">3017620425035(EAN / EAN-13)</span>
            </div>
            <div className="flex bg-transparent">barcode bar</div>
          </div>
          <div className="flex flex-row w-full gap-2 bg-transparent">
            <span className="text-[1.1rem] font-semibold bg-transparent">label:</span>
            <span className="bg-transparent text-wrap text-[1rem]">No gluten</span>
          </div>
          <div className="flex flex-row w-full gap-2 bg-transparent">
            <span className="text-[1.1rem] font-semibold bg-transparent">Brands:</span>
            <span className="bg-transparent text-wrap text-[1rem]">Ferrero</span>
          </div>
          <div className="flex flex-row w-full gap-2 bg-transparent">
            <span className="text-[1.1rem] font-semibold bg-transparent">Quantity:</span>
            <span className="bg-transparent text-[1rem]">1 kg</span>
          </div>
          <div className="flex flex-row w-full gap-2 bg-transparent">
            <span className="text-[1.1rem] font-semibold bg-transparent">Categories:</span>
            <span className="bg-transparent text-wrap text-[1rem]">
              Breakfasts, Fats, Spreads, Sweet spreads, fr:Pâtes à tartiner,
              Hazelnut spreads, Chocolate spreads, Cocoa and hazelnuts spreads
            </span>
          </div>
          <div className="flex flex-row w-full gap-2 bg-transparent">
            <span className="text-[1.1rem] font-semibold bg-transparent">Ingredients:</span>
            <span className="bg-transparent text-wrap text-[1rem]">
              Palm oil, Skimmed milk powder, Zucker, Palmöl, Haselnüsse 13%,
              Magermilchpulver 8.7%, fettarmer Kakao 7.4%, Emulgator
              (Lecithine), Vanillin
            </span>
          </div>

          <div className="flex flex-row w-full gap-2 bg-transparent">
            <span className="text-[1.1rem] font-semibold bg-transparent">Packaging:</span>
            <span className="bg-transparent text-wrap text-[1rem]">
              Composite material, Plastic, Cardboard, Glass, PP 5 -
              Polypropylene, Clear Glass, Non-corrugated cardboard, Paper and
              fibreboard/aluminium, 82 C/PAP, Bocal
            </span>
          </div>

          <div className="flex flex-col justify-start items-start bg-transparent w-full h-fit gap-2">
            <div className="text-[1.1rem] font-semibold bg-transparent">Nutritions:</div>
            <div className="flex flex-col justify-center items-center w-full bg-transparent">
              <table className="border-2 border-white p-2 bg-transparent">
              <tbody className=" border-2 border-white bg-transparent">
                  <tr className=" border-2 border-white bg-transparent">
                    <th className="border-2 border-white text-start p-2 bg-transparent text-[1rem]">Nutrients</th>
                    <th className="border-2 border-white text-start p-2 bg-transparent text-[1rem]">Value</th>
                  </tr>
                  <tr className=" bg-transparent">
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">Energie</td>
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">2252 kJ | 539 kcal</td>
                  </tr>
                  <tr className="bg-transparent">
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">Matières grasses</td>
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">30,9 g</td>
                  </tr>
                  <tr className="bg-transparent">
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">(dont acides gras saturés)</td>
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">10,6 g</td>
                  </tr>
                  <tr className="bg-transparent">
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">Glucides</td>
                    <td className="border-2 border-white bg-transparent p-2 text-[1rem]">57,5 g</td>
                  </tr>
                  </tbody>
              </table>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Products;

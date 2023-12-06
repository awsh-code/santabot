import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useLetter } from "@/lib/store/letter";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

function Pricing() {
  const increaseStep = useLetter((state) => state.increaseStep);
  const updateLetterPackage = useLetter((state) => state.updateLetterPackage);

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const getProducts = async () => {
    setLoadingProducts(true);
    const response = await fetch("/api/products");
    const prods = await response.json();
    setProducts(prods);
    setLoadingProducts(false);
  };

  const handleProductSelection = (product) => {
    updateLetterPackage(product);
    increaseStep();
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className=" container px-0 sm:px-6  mx-auto max-w-xl lg:max-w-3xl">
      <h1 className=" text-2xl text-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Santa Bot is coming to town!
      </h1>

      <p className="text-center mt-4 mb-4 leading-relaxed text-gray-500">
        Choose a package
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-1 gap-1 sm:gap-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {loadingProducts ? (
          <>
            <Skeleton className=" min-h-[250px] rounded-lg" />
            <Skeleton className=" min-h-[250px] rounded-lg" />
            <Skeleton className=" min-h-[250px] rounded-lg" />
          </>
        ) : (
          <>
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  handleProductSelection={handleProductSelection}
                />
              ))
            ) : (
              <p>No products found</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Pricing;

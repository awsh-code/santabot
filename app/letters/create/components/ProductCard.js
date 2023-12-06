import { Button } from "@/components/ui/button";
import React from "react";

function ProductCard({ handleProductSelection, product }) {
  if (product.featured) {
    return (
      <div className="min-h-[250px] flex flex-col gap-3 justify-center w-full p-1 sm:p-8 sm:space-y-8 text-center bg-primary rounded-lg">
        <p className="font-medium text-gray-200 uppercase"> {product.title}</p>

        <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
          $40
        </h2>

        <p className="font-medium text-gray-200"> {product.description}</p>

        <Button
          variant="outline"
          onClick={() => handleProductSelection(product.id)}
        >
          Start Noww
        </Button>
      </div>
    );
  }
  return (
    <div className="min-h-[250px] flex flex-col gap-3 justify-center w-full p-1 sm:p-8 sm:space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
      <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
        {product.title}
      </p>
      <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
        $100
      </h2>
      <p className="font-medium text-gray-500 dark:text-gray-300">
        {product.description}
      </p>
      <Button onClick={() => handleProductSelection(product.id)}>
        Start Now
      </Button>
    </div>
  );
}

export default ProductCard;

//TODO: add types of products to be featured

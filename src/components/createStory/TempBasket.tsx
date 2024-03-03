// basket.tsx
function TempBasket() {

const products = [

   { "id": "sugar-white-1kg" },
   { "name": "Sukker, hvidt, 1000g" },
   { "price": 30},
   { "currency": "DKK"},
   { "rebateQuantity": 4},
   { "rebatePercent": 25},
   {"upsellProductId": "sugar-cane-1kg"}
  
];



return (
    <>
    {products.map((product) => (
        <div>
            {product.name}
        </div>
    ))
    }
    </>
);
};

export default TempBasket;

<script src="http://localhost:8097"></script>
// basket.tsx

import { useState, useEffect } from 'react';

const Basket = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/ProductlList.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);


return (
    <div>
        <h2>Basket</h2>
        {Products.map((product: {value: never, id: number, name: string, price: number }) => (
            <div>
                {product.name}
            </div>
        ))}
    </div>
);
};

export default Basket;

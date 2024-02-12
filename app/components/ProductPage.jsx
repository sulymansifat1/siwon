'use client'
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    description: 'Description for Product 1.',
    image: '/APPLE.png',
    rating: 4.9,
    price: 599,
    buyLink: '#',
  },
  {
    id: 2,
    name: 'VelocityStride Pro: Unleash Your Fastest Moves with Nike ',
    description: 'Description for Product 1.',
    image: '/Nike.png',
    rating: 4.5,
    price: 299,
    buyLink: '#',
  },
  {
    id: 3,
    name: 'VelocityStride Pro: Unleash Your Fastest Moves with Nike ',
    description: 'Description for Product 1.',
    image: '/Nike.png',
    rating: 4.5,
    price: 299,
    buyLink: '#',
  },
  {
    id: 1,
    name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    description: 'Description for Product 1.',
    image: '/APPLE.png',
    rating: 4.9,
    price: 599,
    buyLink: '#',
  },
  {
    id: 3,
    name: 'VelocityStride Pro: Unleash Your Fastest Moves with Nike ',
    description: 'Description for Product 1.',
    image: '/Nike.png',
    rating: 4.5,
    price: 299,
    buyLink: '#',
  },
  {
    id: 1,
    name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    description: 'Description for Product 1.',
    image: '/APPLE.png',
    rating: 4.9,
    price: 599,
    buyLink: '#',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm  border  rounded-lg shadow bg-slate-100 border-slate-300 ">
      <a href={product.buyLink}>
        <img
          className="rounded-t-lg"
          src={product.image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href={product.buyLink}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= product.rating ? 'text-yellow-300' : 'text-gray-200 '
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-white text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-500  ms-3">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">
            ${product.price}
          </span>
          <a
            href={product.buyLink}
            className="text-white bg-yellow-500 hover:bg-orange-300 duration-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

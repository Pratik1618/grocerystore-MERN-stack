import React, { useState ,Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  
  increment,
  incrementAsync,
  selectCount,
} from './cartSlice';

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'ladyFinger',
    href: '#',
    color: '',
    price: '$90.00',
    quantity: 10,
    imageSrc: 'https://th.bing.com/th/id/OIP.Q0Rg9Bpbb9Bxlwg8Pci0NQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Cabbage',
    href: '#',
    color: '',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://th.bing.com/th/id/OIG.7zEF3qauMhBytVFKBBPz?pid=ImgGn',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Cart() {
  const [open, setOpen] = useState(true)

  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    
      <>
      <div>
       <div className="mx-auto mt-12 bg-white max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Cart</h1>
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-gray-500"> 
                                    <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900">
              Qty
            </label>
                                    <select>

                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>



                                    </select>
                                    
                                  </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link
                          to ='/checkout'
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link to='/'>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                    </div>
                    </div>
    </>
  );
}

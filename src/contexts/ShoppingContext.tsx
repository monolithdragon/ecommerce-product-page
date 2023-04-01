import React, { createContext, useState } from 'react';
import { ICart } from 'shared/interfaces/ICart';

export type CartProduct = {
  cartItems: ICart[];
  addToCart: (item: ICart) => void;
  removeFromCart: (id: number) => void;
};

export const ShoppingContext = createContext<CartProduct | null>(null);

type Props = {
  children: React.ReactNode;
};

function ShoppingContextProvider({ children }: Props) {
  const [cartItems, setCartItem] = useState<ICart[]>([]);

  const addToCart = (item: ICart) => {
    const cartItem: ICart = {
      id: item.id,
      product: item.product,
      amount: item.amount,
    };
    setCartItem([...cartItems, cartItem]);
  };

  const removeFromCart = (id: number) => {
    const newItems = cartItems?.filter((item) => item.id !== id);
    setCartItem([...newItems]);
  };
  return (
    <ShoppingContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingContextProvider;

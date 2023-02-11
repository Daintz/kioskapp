import { useState, useEffect } from "react";
import Image from "next/image";
import useKiosk from "../hooks/useKiosk";
import { formatMoney } from "../helpers";

const ModalProduct = () => {

  const {product, handleChangeModal, order, handleAddOrder} = useKiosk();
  const [amount, setAmount] = useState(1);
  const [edition, setEdition] = useState(false);

  useEffect(() => {
    if (order.some(orderState => orderState.id === product.id)) {
      const productEdition = order.find(orderState => orderState.id === product.id);
      setEdition(true);
      setAmount(productEdition.amount);
    }
  }, [product, order])


  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Image product ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>

      <div className="md:w-2/3">
        <div
          className="flex justify-end"
          onClick={handleChangeModal}
        >
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatMoney(product.price)}
        </p>

        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if(amount <= 1) return;
              setAmount(amount - 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <p className="text-3xl">{amount}</p>

          <button
            type="button"
            onClick={() => {
              if(amount >= 5) return;
              setAmount(amount + 1);
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAddOrder({...product, amount})}
        >
          {edition ? 'Save changes' : 'Add to order'}
        </button>
      </div>
    </div>
  )
}

export default ModalProduct;
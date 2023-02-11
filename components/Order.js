import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { formatMoney } from "../helpers";

const Order = ({order}) => {
  const {id, name, total, request} = order;

  const completeOrder = async() => {
    try {
      await axios.post(`/api/orders/${id}`);
      toast.success('Order ready');
    } catch (err) {
      toast.error('There was an error')
    }
  }

  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Order: {id}</h3>
      <p className="text-lg font-bold">Client: {name}</p>

      <div>
        {request.map(plate => (
          <div
            key={plate.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={300}
                src={`/assets/img/${plate.image}.jpg`}
                alt={`Image plate ${plate.name}`}
              />
            </div>

            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">{plate.name}</h4>
              <p className="text-lg font-bold ">Amount: {plate.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          total payable: {formatMoney(total)}
        </p>

        <button
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
          type="button"
          onClick={completeOrder}
        >
          Complete order
        </button>
      </div>
    </div>
  )
}

export default Order;
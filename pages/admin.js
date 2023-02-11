import useSWR from 'swr';
import axios from 'axios';
import AdminLayout from '../layout/AdminLayout';
import Order from '../components/Order';

export default function Admin() {

  const fetcher = () => axios('/api/orders').then(data => data.data);
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 100});

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return(
    <AdminLayout
      page={'Admin'}
    >
      <h1 className="text-4xl font-black">Administration panel</h1>
      <p className="text-2xl my-10">Manage your orders</p>

      {data && data.length ? data.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      )) : <p>No pending orders</p>}
    </AdminLayout>
  )
};
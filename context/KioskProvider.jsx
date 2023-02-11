import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const KioskContext = createContext();

const KioskProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const getCategories = async() => {
    const {data} = await axios('/api/categories');
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, [])

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories])

  useEffect(()=> {
    const newTotal = order.reduce((total, product) => (product.price * product.amount) + total, 0)
    setTotal(newTotal);
  }, [order])

  const handleClickCategory = id => {
    const category = categories.filter(cat => cat.id === id);
    setCurrentCategory(category[0]);
    router.push('/');
  }

  const handleSetProduct = product => {
    setProduct(product);
  }

  const handleChangeModal = () => {
    setModal(!modal);
  }

  const handleAddOrder = ({categoryId, ...product}) => {
    if (order.some(productState => productState.id === product.id)) {
      const orderUpdated = order.map(productState => productState.id === product.id ? product : productState);
      setOrder(orderUpdated);

      toast.success('Saved correctly');
    } else {
      setOrder([...order, product]);
      toast.success('Added to order');
    }
    setModal(false);
  }

  const handleEditAmounts = id => {
    const productUpdated = order.filter( product => product.id === id );
    setProduct(productUpdated[0]);
    setModal(!modal);
  }

  const handleDeleteProduct = (id) => {
    const productUpdated = order.filter( product => product.id !== id );
    setOrder(productUpdated);
  }

  const placeOrder = async(e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post('/api/orders', {request: order, name, total, date: Date.now().toString()});

      setCurrentCategory(categories[0]);
      setOrder([]);
      setName('');
      setTotal(0);

      toast.success('Order placed successfully');
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err) {
      console.log(err);
    }

    console.log(order);
    console.log(name);
    console.log(total);
  }

  return(
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        order,
        handleAddOrder,
        handleEditAmounts,
        handleDeleteProduct,
        name,
        setName,
        placeOrder,
        total
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}

export {
  KioskProvider
}

export default KioskContext;

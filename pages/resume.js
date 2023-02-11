import ResumeProduct from "../components/ResumeProduct";
import useKiosk from "@/hooks/useKiosk";
import Layout from "../layout/Layout";

export default function Resume() {

  const { order } = useKiosk();

  return (
    <Layout
      page="Resume"
    >
      <h1 className="text-4xl font-black">Resume</h1>
      <p className="text-2xl my-10">Check your order</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl">There is nothing in your order</p>
      ) : (
        order.map(product => (
          <ResumeProduct
            key={product.id}
            product={product}
          />
        ))
      )}
    </Layout>
  )
}
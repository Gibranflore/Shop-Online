
import { CustomPagination } from "@/components/ui/custom/CustomPagination"
import { products } from "@/mocks/Producst.mocks"
import { CustomJumbotron } from "@/Shop/Components/CustomJumbotron"
import { ProductGrid } from "@/Shop/Components/ProductGrid"


export const HomePage = () => {
  return (
    <div>
      <CustomJumbotron title='Moda para todos'/>
      <ProductGrid products={products}/>
      <CustomPagination totalPages={5}/>
    </div>
  )
}

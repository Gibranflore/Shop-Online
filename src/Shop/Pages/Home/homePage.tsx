
import { CustomPagination } from "@/components/ui/custom/CustomPagination"

import { CustomJumbotron } from "@/Shop/Components/CustomJumbotron"
import { ProductGrid } from "@/Shop/Components/ProductGrid"
import { useProducts } from "@/Shop/hooks/useProducts"

export const HomePage = () => {
  const {data} = useProducts();

  return (
    <div>
      <CustomJumbotron title='Moda para todos'/>
      <ProductGrid products={data?.products || []}/>
      <CustomPagination totalPages={data?.pages || 0}/>
    </div>
  )
}

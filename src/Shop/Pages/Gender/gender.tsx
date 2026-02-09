import { CustomPagination } from "@/components/ui/custom/CustomPagination"
import { CustomJumbotron } from "@/Shop/Components/CustomJumbotron"
import { ProductGrid } from "@/Shop/Components/ProductGrid"
import { useProducts } from "@/Shop/hooks/useProducts"
import { useParams } from "react-router"

//Todo es to es para el tittulo de las paginas de los generos

export const GenderPage = () => {
  const { gender } = useParams();
  const { data } = useProducts();

  const genderLabel = gender === 'men' ? 'Caballero' : gender === 'women' ? 'Dama' : 'Infantiles'
  return (

       <>
         <CustomJumbotron title={`Productos para ${genderLabel}`}/>
         <ProductGrid products={data?.products || []}/>
         <CustomPagination totalPages={data?.pages || 1}/>
       </>
     )
   }


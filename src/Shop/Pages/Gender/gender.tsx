import { CustomPagination } from "@/components/ui/custom/CustomPagination"
import { products } from "@/mocks/Producst.mocks"
import { CustomJumbotron } from "@/Shop/Components/CustomJumbotron"
import { ProductGrid } from "@/Shop/Components/ProductGrid"
import { useParams } from "react-router"

export const GenderPage = () => {
  const {gender} = useParams();

  const genderLabel = gender === 'men' ? 'Caballero' : gender === 'women' ? 'Dama' : 'Infantiles'
  return (

       <>
         <CustomJumbotron title={`Productos para ${genderLabel}`}/>
         <ProductGrid products={products}/>
         <CustomPagination totalPages={5}/>
       </>
     )
   }


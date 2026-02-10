import { AdminTitle } from "@/Admin/components/AdminTitle"
import { Button } from "@/components/ui/button"
import { CustomPagination } from "@/components/ui/custom/CustomPagination"
import { CustomScreenLoading } from "@/components/ui/custom/CustomScreenLoading"
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { currencyFormatter } from "@/lib/currency.formatter"

import { useProducts } from "@/Shop/hooks/useProducts"
import { PencilIcon, PlusIcon } from "lucide-react"

import { Link, } from "react-router"



export const AdminProductsPage = () => {

  const {data, isLoading} = useProducts();
 
  if (isLoading) {
    return <CustomScreenLoading/>
  }


  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subtitle="Aquí puedes ver y administrar tus productos"
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data?.products.map((products) => (
          <TableRow>
            <TableCell>
              <img
                src={products.images[0]}
                alt={products.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>
              <Link to={`/admin/products/${products.id}`}
              className=" hover:text-blue-700">
                {products.title}

              </Link>
              </TableCell>
            <TableCell>{currencyFormatter(products.price)}</TableCell>
            <TableCell>{products.gender}</TableCell>
            <TableCell>{products.stock}</TableCell>
            <TableCell>{products.sizes}</TableCell>
            <TableCell className="text-right">
              {/* <Link to={`t-shirt-teslo`}>Editar</Link> */}
              <Link to={`/admin/products/${products.id}`}>
                <PencilIcon className="w-4 text-blue-500"/>
              </Link>
            </TableCell>
          </TableRow>

            ))
          }
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  )
}

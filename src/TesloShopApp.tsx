import { RouterProvider } from "react-router"
import { appRouter } from "./routerApp"


export const TesloShopApp = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}

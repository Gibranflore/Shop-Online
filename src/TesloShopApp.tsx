import { RouterProvider } from "react-router"
import { appRouter } from "./routerApp"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { Toaster } from "sonner"

import { type PropsWithChildren } from "react"
import { CustomScreenLoading } from "./components/ui/custom/CustomScreenLoading"
import { useAuthStore } from "./Auth/store/auth.store"

const queryClient = new QueryClient()

const CheckAuthProvider = ({children}: PropsWithChildren) =>{

  const {checkAuthStatus} = useAuthStore();

    const { isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <CustomScreenLoading/>
  
  
  return children
}

export const TesloShopApp = () => {

  return (

     <QueryClientProvider client={queryClient}>
      <Toaster/>

      <CheckAuthProvider>
        <RouterProvider router={appRouter}/>
      </CheckAuthProvider>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}

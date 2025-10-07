import { Outlet } from "react-router"


const LayouthAuth = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-slate-300">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Outlet/>
      </div>
    </div>
  )
}
export default LayouthAuth
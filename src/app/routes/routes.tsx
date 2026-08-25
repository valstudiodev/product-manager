import ProductPage from "@/pages/productsPage/ui/ProductPage"
import MainLayout from "@/widgets/mainLayout/ui/MainLayout"
import { createBrowserRouter } from "react-router"


export const routes = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        id: 'product-page',
        Component: ProductPage,
      },
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { UsersPage } from "../../pages/UsersPage";
import { UserDetails } from "../../pages/UserDetails";
import { Layout } from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/users/:slug",
        element: <UserDetails />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

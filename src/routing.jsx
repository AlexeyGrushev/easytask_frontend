import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main
import MainPage from "./components/MainLayout/MainLayout";
import AuthPage from "./components/AuthPage/Auth";

// Children
import TasksPage from "./components/TaskPage/TasksPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/tasks",
        element: <TasksPage />,
      },
      {
        path: "/schedule",
        element: <h1>Расписание</h1>,
      },
      {
        path: "/timer",
        element: <h1>Тайм-трекер</h1>,
      },
      {
        path: "/calendar",
        element: <h1>Календарь</h1>,
      },
      {
        path: "/profile",
        element: <h1>Профиль</h1>,
      },

    ],
  },
  {
    path: "/auth",
    element: <AuthPage/>
  }
]);

export default router;

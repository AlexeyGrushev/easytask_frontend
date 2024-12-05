import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main
import { MainPage } from "./components/MainLayout/MainLayout";
import AuthPage from "./components/AuthPage/Auth";

// Children
import TasksPage from "./components/Tasks/TasksPage";
import {loadTasks} from "./components/Tasks/loader"
import TasksMain from "./components/Tasks/components/taskComponent"
import { TestComponent } from "./components/testComponent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/tasks",
        element: <TasksPage />,
        children: [
          {
            path: "/tasks/:list_id",
            loader: loadTasks,
            element: <TasksMain/>
          }
        ]
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
        element: <TestComponent/>,
      },

    ],
  },
  {
    path: "/auth",
    element: <AuthPage/>
  }
]);

export default router;

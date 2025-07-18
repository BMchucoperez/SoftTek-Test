import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Plans from '../pages/Plans/Plans';
import Summary from '../pages/Summary/Summary';
import PersonalData from '../pages/PersonalData/PersonalData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PersonalData />,
  },
  {
    path: '/plans',
    element: <Plans />,
  },
  {
    path: '/summary',
    element: <Summary />,
  },
]);

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
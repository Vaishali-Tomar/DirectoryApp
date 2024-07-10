import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Form from './components/Form';
import Retrieve from './components/Retrieve'
import { DirectoryProvider } from './DirectoryContext';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Form /></> 
    },
    {
      path: "/retrieve",
      element: <> <Navbar /> <Retrieve /> </>
    }
  ]);

  return (
    <DirectoryProvider>
      <RouterProvider router={router} />
    </DirectoryProvider>
  );
}

export default App;
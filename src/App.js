import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Banner from './Components/Pages/Banner/Banner';
import Cart from './Components/Pages/Cart/Cart';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Banner />
        },
        {
          path: "cart",
          element: <Cart />
        },
      ]
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

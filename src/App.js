import logo from './logo.svg';
import './App.css';
import scroll from 'react-scroll'
import { Link, Button, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import toast, { Toaster } from 'react-hot-toast';
import AnimatedCursor from 'react-animated-cursor';
// color='193, 11, 111'
function App() {
  return (
    <div className="grad scroll-smooth">

      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      <AnimatedCursor innerSize={8}
        outerSize={20}
        color='253, 22, 111'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        pointer={'arrow'}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}></AnimatedCursor>
    </div>
  );
}

export default App;

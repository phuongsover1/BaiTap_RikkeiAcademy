import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';

// const styleLinks = [
//   '~/css/bootstrap.min.css',
//   '~/css/style.css',
//   '~/css/responsive.css',
//   // '~/css/jquery.mCustomScrollbar.min.css',
//   'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
//   '~/css/owl.carousel.min.css',
//   'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css',
// ];

// const styleLinks = [
//   'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
//   'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css',
// ];
function App() {
  // useEffect(() => {
  //   styleLinks.forEach(linkSrc => {
  //     const linkElement = document.createElement('link');
  //     linkElement.type = 'text/css';
  //     linkElement.rel = 'stylesheet';
  //     linkElement.href = linkSrc;
  //     document.head.appendChild(linkElement);
  //   });
  // }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

import { useState } from 'react';

import reactLogo from 'src/assets/react.svg';
import Header from 'src/components/Header';

import 'src/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="text-text-color-1 text-[22px]">
        A messenger that is ahead of its time
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

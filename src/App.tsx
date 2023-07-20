import { RouterProvider } from 'react-router-dom';

import routerConfig from 'src/router.config';

function App() {
  return (
    <RouterProvider
      router={routerConfig}
      fallbackElement={<div>...LOADING SCRIPTS</div>}
    />
  );
}

export default App;

import React from 'react';

import './App.css';

import { Button } from 'src/components/common';

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-4 gap-6">
        <div className="w-20 h-20 bg-primary-1"></div>
        <div className="w-20 h-20 bg-primary-2"></div>
        <div className="w-20 h-20 bg-primary-3"></div>
        <div className="w-20 h-20 bg-primary-4"></div>
      </div>
      <div className="text-text-color-1 text-[22px]">
        A messenger that is ahead of its time
      </div>
      <Button variant="primary">Small</Button>
      <Button variant="secondary">Small</Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="default" size="medium">
        Medium
      </Button>
    </React.Fragment>
  );
}

export default App;

import React from 'react';

import './App.css';

import { Button, Input } from 'src/components/common';

const Play = () => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.385 35.7131L32.681 24.1131C32.8946 23.9257 33.0171 23.6553 33.0171 23.3711C33.0171 23.0869 32.8946 22.8165 32.681 22.6291L19.381 10.9591C19.0893 10.7076 18.6779 10.6488 18.3276 10.8088C17.9772 10.9687 17.752 11.318 17.751 11.7031L17.751 34.9701C17.7511 35.3568 17.9771 35.7076 18.329 35.8676C18.6809 36.0275 19.0938 35.9671 19.3851 35.713L19.385 35.7131Z"
        fill="var(--primary-2)"
      />
    </svg>
  );
};

function App() {
  return (
    <React.Fragment>
      <Play />
      <div className="grid grid-cols-4 phone:grid-cols-1 gap-6">
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

      <div className="text-primary-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        delectus fuga itaque modi numquam perspiciatis porro repellendus
        temporibus tenetur voluptatibus!
      </div>

      <Input label="Name" placeholder={'adfadsf'} />
    </React.Fragment>
  );
}

export default App;

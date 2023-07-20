import React from 'react';
import { useRouteError } from 'react-router-dom';

export type Props = {
  className?: string;
};

const ErrorReport: React.FC<Props> = () => {
  const error = useRouteError() as any;

  console.log(error.status);

  return (
    <React.Fragment>{error.status === 404 ? '404' : '500'}</React.Fragment>
  );
};

export default ErrorReport;

import React from 'react';
import { useRouteError } from 'react-router-dom';

export type Props = {
  className?: string;
};

const ErrorReport: React.FC<Props> = () => {
  const error = useRouteError() as any;

  return <>{error.status === 404 ? '404' : '500'}</>;
};

export default ErrorReport;

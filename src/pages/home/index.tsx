import React from 'react';
import { Link, LoaderFunctionArgs } from 'react-router-dom';

export type Props = {
  className?: string;
};

const Index: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <header>fasfas</header>
      <Link to={'/about'}>about</Link>
    </React.Fragment>
  );
};

export const Component = Index;

export function loader(args: LoaderFunctionArgs) {
  const { params, context, request } = args;

  const searchParams = new URL(request.url).searchParams;

  console.log(searchParams.get('page'), searchParams.get('per'));

  return fetch('https://jsonplaceholder.typicode.com/todos/1');
}

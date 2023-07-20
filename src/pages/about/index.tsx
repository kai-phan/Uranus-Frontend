import React from 'react';
import { useLoaderData } from 'react-router-dom';

export type Props = {
  className?: string;
};

const Index: React.FC<Props> = () => {
  const data = useLoaderData();

  return <React.Fragment>{JSON.stringify(data)}</React.Fragment>;
};

export const Component = Index;

export function loader() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
    if (res.ok) return res.json();

    throw new Response(res.statusText, { status: res.status });
  });
}

import React from 'react';
import { LoaderFunctionArgs, useSearchParams } from 'react-router-dom';

import { queryClient } from 'src/App';
import { useTodos } from 'src/queries/todos';

export type Props = {
  className?: string;
};

const Todos: React.FC<Props> = () => {
  const [search, setSearch] = useSearchParams();
  const _limit = Number(search.get('_limit') || 10);
  const _page = Number(search.get('_page') || 1);

  const { data } = useTodos({
    variables: {
      _limit,
      _page,
    },
  });

  return (
    <React.Fragment>
      <div>
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
      <br />
      <ul>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <li
              key={item}
              className="p-2 bg-primary-1"
              onClick={() => {
                setSearch(
                  new URLSearchParams({
                    _page: String(item),
                    _limit: String(_limit),
                  }),
                );
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const search = url.searchParams;

  return await queryClient.fetchQuery(
    useTodos.getKey({
      _limit: search.get('_limit') ? Number(search.get('_limit')) : 10,
      _page: search.get('_page') ? Number(search.get('_page')) : 1,
    }),
    useTodos.queryFn,
  );
};

export const Component = Todos;

export const shouldRevalidate = () => false;

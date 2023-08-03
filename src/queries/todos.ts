import { createQuery } from 'react-query-kit';

import todos, { Todo, TodoSearch } from 'src/api/todos';

const endpoint = '/todos';

export const useTodos = createQuery<Todo[], TodoSearch>({
  primaryKey: endpoint,
  queryFn: async ({ queryKey }) => {
    const [url, params] = queryKey;

    const { data } = await todos.getList(url, params);

    return data;
  },
  refetchOnMount: false,
  retry: 0,
});

export const useTodoDetail = createQuery<Todo, string | number>({
  primaryKey: endpoint,
  queryFn: async ({ queryKey }) => {
    const [url, id] = queryKey;

    const { data } = await todos.getDetail(`${url}/${id}`);

    return data;
  },
});

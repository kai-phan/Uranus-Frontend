import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type Props = {
  className?: string;
};

const useTodo = ({ page }: { page: string }) => {
  return useQuery({
    queryKey: ['todos', { _page: page }],
    queryFn: async ({ queryKey }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?${new URLSearchParams(
          queryKey[1],
        ).toString()}`,
      );

      return await res.json();
    },
    staleTime: 0,
  });
};

const useUpdateTodo = ({ onSuccess }: { onSuccess: (data: any) => any }) => {
  return useMutation<unknown, unknown, Todo>({
    mutationFn: async (todo) => {
      const res = await fetch(
        // @ts-ignore
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(todo),
        },
      );

      return await res.json();
    },
    onSuccess: async (data) => {
      await onSuccess(data);
    },
  });
};

type Todo = {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
};

const Index: React.FC<Props> = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState<string>('1');

  const { data: todoList, isLoading: isLoadingList } = useTodo({ page });

  const { mutate, isLoading: isUpdatingTodo } = useUpdateTodo({
    onSuccess: () => {
      queryClient.setQueryData(['todos', { _page: page }], (data) => {});
    },
  });

  const [id, setId] = useState<string>();

  const { data: todo } = useQuery<Todo>({
    queryKey: ['todos', id],
    queryFn: async ({ queryKey }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${queryKey[1]}`,
      );

      return await res.json();
    },
    enabled: !!id,
  });

  return (
    <React.Fragment>
      <section className="grid grid-cols-2">
        <div>
          {isLoadingList ? (
            <div>loading...</div>
          ) : (
            todoList?.map((d) => {
              return (
                <div key={d.id} onClick={() => setId(d.id)}>
                  {d.id} - {d.title}
                </div>
              );
            })
          )}
        </div>
        {todo && (
          <div>
            <div>Todo id: {todo.userId}</div>
            <div>Todo title: {todo.title}</div>
            <div>Todo completed: {todo.completed}</div>

            <br />
            <button onClick={() => mutate({ ...todo, title: 'adfads' })}>
              {isUpdatingTodo ? 'Updating' : ''} Update
            </button>
          </div>
        )}
      </section>
      <br />
      {[1, 2, 3, 4, 5].map((page) => {
        return (
          <button
            className="bg-primary-1 p-4"
            key={page}
            onClick={() => setPage(page.toString())}
          >
            {page}
          </button>
        );
      })}

      <br />
    </React.Fragment>
  );
};

export const Component = Index;

import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { Select } from 'src/components/form';

export type Props = {
  className?: string;
};

const Index: React.FC<Props> = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      input: 'adf',
      select: [1],
      select2: 2,
    },
  });

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input type="text" {...register('input')} />
        <Select {...register('select')} />
        <select {...register('select2')}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <button type="submit">Search</button>
      </form>

      <br />
      <hr />
    </React.Fragment>
  );
};

export const Component = Index;

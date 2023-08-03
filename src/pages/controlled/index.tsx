import React from 'react';

export type Props = {
  className?: string;
};

const days = [
  {
    id: 1,
    text: 'monday',
  },
  {
    id: 2,
    text: 'tuesday',
  },
  {
    id: 3,
    text: 'wednesday',
  },
  {
    id: 4,
    text: 'thursday',
  },
  {
    id: 5,
    text: 'friday',
  },
  {
    id: 6,
    text: 'saturday',
  },
];

const list = {
  location: [
    {
      id: 1,
      name: 'chatswood',
      days,
    },
    {
      id: 2,
      name: 'blurswood',
      days,
    },
    {
      id: 3,
      name: 'parramatta',
      days,
    },
  ],
};

const Index: React.FC<Props> = () => {
  const [data, setData] = React.useState<Data[]>([]);

  const handleAdd = (d: Data) => {
    setData((prev) => [...prev, d]);
  };

  console.log(data);

  return (
    <React.Fragment>
      {list.location.map((l) => {
        return (
          <div key={l.id}>
            <div className="text-red-500">{l.name}</div>

            {l.days.map((d) => {
              return (
                <div className="text-primary-1 ml-4">
                  {d.text}{' '}
                  <button
                    onClick={() =>
                      handleAdd({
                        location: l.id as Data['location'],
                        day: d.text as Data['day'],
                        start_time: '',
                        end_time: '',
                      })
                    }
                  >
                    +
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

type Data = {
  location: 1 | 2 | 3 | 4;
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
  start_time: string;
  end_time: string;
};

export const Component = Index;

export default Index;

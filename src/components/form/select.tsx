import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

export type Props = any;

const useSelect = () => {
  const [value, setValue] = React.useState<any[]>([]);

  const select = useCallback((item) => {
    setValue((prev) => {
      return [...prev, item];
    });
  }, []);

  const toggle = useCallback((item, cb) => {
    setValue((prev) => {
      let newValue = [] as any[];

      if (prev.includes(item)) {
        newValue = prev.filter((i) => i !== item);
      } else {
        newValue = [...prev, item];
      }

      if (cb) {
        cb(newValue);
      }

      return newValue;
    });
  }, []);

  const selectValue = useCallback((item) => {
    setValue((prev) => {
      return [...prev, ...item];
    });
  }, []);

  return {
    value,
    select,
    toggle,
    selectValue,
  };
};

export default React.forwardRef<any, Props>(function Select(props, ref) {
  const { value, toggle, selectValue } = useSelect();

  const selectRef = useRef({
    name: props.name,
    type: 'select',
    value: [],
  });

  const onClick = (value) => {
    props.onChange({
      target: {
        value,
        name: props.name,
      },
      type: 'change',
    });
  };

  useImperativeHandle(ref, () => {
    return selectRef.current;
  });

  useEffect(() => {
    selectValue(selectRef.current.value);
  }, [selectRef.current]);

  // useEffect(() => {
  //   ref && typeof ref === 'function' && ref(selectRef.current);
  //
  //   console.log(selectRef.current);
  // }, []);

  return (
    <ul>
      {[1, 2, 3, 4].map((item) => {
        return (
          <li
            className={value.includes(item) ? 'text-red-500' : ''}
            key={item}
            onClick={() => {
              toggle(item, onClick);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
});

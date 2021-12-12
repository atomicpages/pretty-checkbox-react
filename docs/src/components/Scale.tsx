import { useCallback } from 'react';

export const useScaleState = () => {
  const [size, setSize] = React.useState(14);

  return {
    size,
    setSize,
  };
};

export const Scale = ({ size, setSize }) => {
  return (
    <>
      <input
        type="range"
        min="8"
        max="120"
        step="1"
        value={size}
        onChange={useCallback(
          (e) => {
            setSize(parseInt(e.currentTarget.value));
          },
          [setSize]
        )}
      />
      <input
        type="reset"
        onClick={useCallback(() => {
          setSize(14);
        }, [setSize])}
      />
    </>
  );
};

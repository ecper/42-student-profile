import React from "react";

type Props = {
  onTrue: () => void;
  onFalse: () => void;
  value: boolean;
};

const useBoolean = (): Props => {
  const [value, setValue] = React.useState(false);

  const onTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  return React.useMemo(
    () => ({
      onTrue,
      onFalse,
      value,
    }),
    [onTrue, onFalse, value]
  );
};

export default useBoolean;

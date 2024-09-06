import React from "react";

type Props = {
  onToggle: (value: any) => void;
  onClose: () => void;
  value: any;
};

const useToggle = (): Props => {
  const [value, setValue] = React.useState(null);

  const onToggle = React.useCallback((value: any) => {
    setValue(value);
  }, []);

  const onClose = React.useCallback(() => {
    setValue(null);
  }, []);

  return React.useMemo(
    () => ({
      onToggle,
      onClose,
      value,
    }),
    [onToggle, onClose, value]
  );
};

export default useToggle;

import { Dispatch, SetStateAction, useCallback, useState } from "react";

function useToggle(defaultValue: boolean): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [isToggle, setIsToggle] = useState(defaultValue);

  const onToggle = useCallback(() => setIsToggle((prev) => !prev), []);

  return [isToggle, onToggle, setIsToggle]
}

export default useToggle
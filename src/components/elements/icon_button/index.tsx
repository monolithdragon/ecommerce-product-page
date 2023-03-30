import { IconButtonProps } from './types';

function IconButton({ className, children }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex outline-none hover:scale-110 focus:scale-110 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;

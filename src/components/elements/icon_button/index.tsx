import { IconButtonProps } from './types';

function IconButton({ className, children, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`flex place-items-center outline-none transition-all hover:scale-105 active:scale-95 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;

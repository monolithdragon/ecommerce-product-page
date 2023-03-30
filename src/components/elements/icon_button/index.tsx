import { IconButtonProps } from './types';

function IconButton({ className, children, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex outline-none hover:scale-110 focus:scale-110 active:scale-95 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;

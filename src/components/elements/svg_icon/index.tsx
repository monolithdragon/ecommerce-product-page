import { SvgIconProps } from './types';

function SvgIcon({ Icon, ...rest }: SvgIconProps) {
  return <Icon viewBox="0 0 24 24" width={24} height={24} {...rest} />;
}

export default SvgIcon;

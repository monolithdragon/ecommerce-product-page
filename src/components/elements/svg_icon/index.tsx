import { SvgIconProps } from './types';

function SvgIcon({ Icon, ...rest }: SvgIconProps) {
  return <Icon {...rest} />;
}

export default SvgIcon;

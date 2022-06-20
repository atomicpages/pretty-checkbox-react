import clsx from 'clsx';
import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';

type StateProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: PCRCheckboxRadioProps['color'];
  icon?: React.ReactNode;
};

/**
 * A tiny component to abstract away pretty-checkbox "state" div.
 * Shared by all components.
 */
export const State: React.FC<StateProps> = ({
  color,
  icon,
  id,
  children,
  ...rest
}) => {
  return (
    <div className={clsx('state', color && `p-${color}`)} {...rest}>
      {icon}
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

State.displayName = 'State';

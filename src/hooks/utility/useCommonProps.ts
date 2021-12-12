import { useUUID } from '../useUUID';
import { CommonProps } from '../../typings/PCRCommonProps';

/**
 * Filters out the noise of prop mayhem with PCR. This separates
 * all props from the native HTML props that will eventually get passed
 * to the input element. Generated PCR UUIDs are created here, unless
 * user has specified one of their own.
 */
export const useCommonProps = <S>(props: CommonProps<S>) => {
  const defaultId = useUUID();

  const {
    locked,
    color,
    variant,
    animation,
    children,
    style,
    id = defaultId,
    className,
    bigger,
    hasFocus,
    ...rest
  } = props;

  return {
    locked,
    color,
    variant,
    animation,
    children,
    id,
    className,
    bigger,
    style,
    hasFocus,
    htmlProps: rest,
  };
};

import { useRef, createElement } from 'react';
import ReactDOM from 'react-dom';

import { useOpenInNewWindow } from '../hooks/useOpenInNewWindow';
import styles from './section.module.scss';

type SectionProps = React.HTMLAttributes<HTMLElement> & { as?: string };

export const Section = ({ as = 'section', children, ...rest }) => {
  const container = useRef(document.createElement('div'));
  const { open } = useOpenInNewWindow({ container: container.current });

  return createElement(
    as,
    rest,
    <>
      <button className={styles.link} onClick={open}>
        <i className="mdi mdi-open-in-new" />
      </button>
      {children}
      {ReactDOM.createPortal(children, container.current)}
    </>
  );
};

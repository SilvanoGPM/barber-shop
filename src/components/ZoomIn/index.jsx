import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import useIntersectionObserver from 'hooks/useIntersectionObserver';

const ZoomIn = ({ children, duration = 500, freezeOnceVisible = true }) => {
  const [elementRef, dataRef] = useIntersectionObserver({
    freezeOnceVisible,
  });

  const style = useSpring({
    config: { duration },
    from: { scale: 0.5, opacity: 0 },
    to: {
      scale: dataRef?.isIntersecting ? 1 : 0.5,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  return (
    <>
      <animated.div style={style}>
        <div ref={elementRef} />
        {children}
      </animated.div>
    </>
  );
};

ZoomIn.defaultProps = {
  duration: 500,
  freezeOnceVisible: true,
};

ZoomIn.propTypes = {
  children: PropTypes.element.isRequired,
  duration: PropTypes.number,
  freezeOnceVisible: PropTypes.bool,
};

export default ZoomIn;

import PropTypes from 'prop-types';

import { useSpring, animated } from 'react-spring';

import useIntersectionObserver from 'hooks/useIntersectionObserver';

const SlideIn = ({ children, x, duration = 500, freezeOnceVisible = true }) => {
  const [elementRef, dataRef] = useIntersectionObserver({
    freezeOnceVisible,
  });

  const style = useSpring({
    config: { duration },
    from: { opacity: 0, x },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      x: dataRef?.isIntersecting ? 0 : x,
    },
  });

  return (
    <>
      <div ref={elementRef} />
      <animated.div style={style}>{children}</animated.div>
    </>
  );
};

SlideIn.defaultProps = {
  duration: 500,
  freezeOnceVisible: true,
};

SlideIn.propTypes = {
  children: PropTypes.element.isRequired,
  x: PropTypes.number.isRequired,
  duration: PropTypes.number,
  freezeOnceVisible: PropTypes.bool,
};

export default SlideIn;

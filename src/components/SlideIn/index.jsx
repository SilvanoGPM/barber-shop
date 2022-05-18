import PropTypes from 'prop-types';

import { useSpring, animated } from 'react-spring';

import useIntersectionObserver from 'hooks/useIntersectionObserver';

const SlideIn = ({
  children,
  className = '',
  x = 0,
  y = 0,
  style = {},
  opacity = 0,
  delay = 0,
  duration = 500,
  freezeOnceVisible = true,
}) => {
  const [elementRef, dataRef] = useIntersectionObserver({
    freezeOnceVisible,
  });

  const animatedStyle = useSpring({
    delay,
    config: { duration },
    from: { opacity, x, y },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : opacity,
      x: dataRef?.isIntersecting ? 0 : x,
      y: dataRef?.isIntersecting ? 0 : y,
    },
  });

  return (
    <>
      <div ref={elementRef} />
      <animated.div
        className={className}
        style={{ ...style, ...animatedStyle }}
      >
        {children}
      </animated.div>
    </>
  );
};

SlideIn.defaultProps = {
  style: {},
  duration: 500,
  opacity: 0,
  x: 0,
  y: 0,
  delay: 0,
  freezeOnceVisible: true,
  className: '',
};

SlideIn.propTypes = {
  children: PropTypes.elementType.isRequired,
  style: PropTypes.shape(),
  className: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  opacity: PropTypes.number,
  delay: PropTypes.number,
  duration: PropTypes.number,
  freezeOnceVisible: PropTypes.bool,
};

export default SlideIn;

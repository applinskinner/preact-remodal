import { h, render, Component } from 'preact';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'preact-css-transition-group'
import Portal from 'preact-portal'

const TransitionPortal = function({ children, ...props }) {
  return (
    <Portal ref={(ref) => { this.portal = ref; }} into="body">
      <CSSTransitionGroup {...props}>
        {children}
      </CSSTransitionGroup>
    </Portal>
  );
}

TransitionPortal.propTypes = {
  children: PropTypes.node
}

export default TransitionPortal

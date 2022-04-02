import React from 'react';
import PropTypes from 'prop-types';
import { Notifier } from '@airbrake/browser';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      airbrake: { notify: () => {} }
    };
  }


  componentDidMount() {
    this.fetchConfig().then(config => this.setState({
      airbrake: new Notifier({
        ...config
      })
    })).catch(() => {
      console.error('Unable to connect to errbit');
      this.setState({ hasError: true });
    });
  }

  fetchConfig = () => fetch('/api/airbrake_config', {
    headers: {
      Accept: 'application/json'
    }
  }).then(config => config.json())

  componentDidCatch(error, info) {
    // commented out because there's no current way to set error back to false
    // this.setState({ hasError: true });

    // Send error to Airbrake
    const { airbrake } = this.state;
    airbrake.notify({
      error,
      params: { info }
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // render children no matter what; no custom error screen yet
      return children;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;

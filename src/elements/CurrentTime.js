import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

class CurrentTime extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    format: PropTypes.string
  };

  static defaultProps = {
    className: null,
    format: 'dddd MMM D YYYY hh:mm a'
  };

  constructor(props) {
    super(props);
    this.state = {
      currentTime: dayjs()
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime() {
    this.setState({
      currentTime: dayjs()
    });
  }

  render() {
    const { format, className } = this.props;
    const renderedTime = this.state.currentTime.format(format);

    return <div className={className}>{renderedTime}</div>;
  }
}

export default CurrentTime;

import React, { Component } from 'react';
import HomeBanner from './HomeBanner';

class BackgroundSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      images: [
        'https://i.ibb.co/L02pR84/home-service-banner5png.png',
        'https://i.ibb.co/6tVSM5G/mr-home-banner2.png',
        'https://i.ibb.co/86sVrBm/mr-home-banner-4.png'
      ]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentIndex: (this.state.currentIndex + 1) % this.state.images.length
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentIndex, images } = this.state;

    return (
      <div
        className="background-slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <HomeBanner />
      </div>
    );
  }
}

export default BackgroundSlider;

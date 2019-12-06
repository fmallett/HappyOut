import React from 'react'

import Carousel from './carousel.js'
import Frame from './frame.js'
import Nav from './nav.js'
import Slide from './slide.js'

import configStyles from './config-styles.js'

export default class HappyOut extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.state = {
      showIndex: 0,
      numSlides: 9
    }
  }
  handleClickPrevious() {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    })
  }
  handleClickNext() {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    })
  }
  renderNav() {
    return (
      <Nav
        onPrevious={this.handleClickPrevious}
        hasPrevious={this.state.showIndex > 0}
        onNext={this.handleClickNext}
        hasNext={this.state.showIndex < this.state.numSlides - 1}
      />
    )
  }
  render() {
    return (
      <Frame>
        <Carousel
          showIndex={this.state.showIndex}
          nav={this.renderNav()}
          width={configStyles.imageWidth}
        >
          <Slide image={require('./images/1.jpg')} title="Fact or Opinion?">
          Realising that many thoughts are opinion rather than fact makes it less likely that
          we’ll be distressed by them, and more able to make wise and calm decisions
          about the best action to take.
          </Slide>
          <Slide image={require('./images/2.jpg')} title="Thoughts">
          When we are anxious, our thoughts are usually: 
          <ul>
            <li>An over estimation or exaggeration of the actual threat </li>
            <li>An underestimation or minimisation of our ability to cope</li> 
          </ul>
          </Slide>
          <Slide
            image={require('./images/3.jpg')}
            title="Positive Self-Talk"
          >
            When we repeat thoughts in our heads, we start to believe
            that they are true. 
            The next time you find yourself saying something negative
            about yourself:
          <ul>
            <li>1. Notice this </li>
            <li>2. Come up with a positive truth that opposes the negative </li>
            <li>3. Provide yourself with evidence to support the positive </li>
          </ul>
          </Slide>
          <Slide image={require('./images/4.jpg')} title="Meditation">
          Begin with a few Deep Breaths:
          <ul>
            <li>Breathe in through the nose slowly </li>
            <li>Hold it for a few seconds </li>
            <li>Breathe out through the mouth slowly. Repeat </li>
          </ul>
          </Slide>
          <Slide
            image={require('./images/5.jpg')}
            title="The Wiles of the Forest"
          >
            After a number of nervous breakdowns, Empire personnel officers are
            investigating the possibility rotating troopers stationed on the
            forest moons of Endor after several rotations.
          </Slide>
          <Slide
            image={require('./images/6.jpg')}
            title="6"
          >
            Some text
          </Slide>
          <Slide
            image={require('./images/7.jpg')}
            title="7"
          >
            Some text
          </Slide>
          <Slide
            image={require('./images/8.jpg')}
            title="8"
          >
            Some text
          </Slide>
          <Slide
            image={require('./images/9.jpg')}
            title="9"
          >
            Some text
          </Slide>
        </Carousel>
      </Frame>
    )
  }
}

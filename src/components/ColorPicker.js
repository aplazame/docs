'use strict'
import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    value: this.props['first-color'],
    displayColorPicker: false,
    color: {
      hex: this.props['first-color'],
    /*  r: '241',
      g: '112',
      b: '19',
      a: '1',*/
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    // console.log(color)
    this.setState({ color: color.rgb })
    this.setState({ value: color.hex })

    this.props.updateColor(color.hex, this.props.name)
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          display: 'inline-block',
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          backgroundColor: this.state.value,
        },
        swatch: {
          width: '124px',
          padding: '5px',
          // background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
        textHEX: {
          lineHeight: '1.5rem',
          display: 'inline-block',
          marginLeft: '0.5rem',
          fontSize: '1rem',
          verticalAlign: 'top',
        }
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
          <span style={ styles.textHEX }>{ this.state.value }</span>
        </div>
        { this.state.displayColorPicker ?
          <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.handleClose }/>
            <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
          </div> : null
        }

      </div>
    )
  }
}

export default ColorPicker

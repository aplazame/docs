import React from 'react';
import Translate from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import ColorPicker from '@site/src/components/ColorPicker';


class Simulator extends React.Component {

  state = {
    values: {
      widgetType: this.props.children,
      country: this.props['data-country'],
      type: this.props['data-type'],
      optionTextColor: this.props['data-option-text-color'],
      optionBtnTextColor: this.props['data-option-btn-text-color'],
      optionBtnBgColor: this.props['data-option-btn-bg-color'],
      optionBranding: this.props['data-option-branding'],
      optionAlign: this.props['data-option-align'],
    }
  }

  rawHTML = () => {
    return `<div ${ this.state.values.widgetType }
      \t${ this.state.values.country ? 'data-country="' + this.state.values.country + '"' : ''}
      ${ this.state.values.type ? 'data-type="' + this.state.values.type + '"' : ''}
      ${ this.state.values.optionTextColor ? 'data-option-text-color="' + this.state.values.optionTextColor + '"' : ''}
      ${ this.state.values.optionBtnTextColor ? 'data-option-btn-text-color="' + this.state.values.optionBtnTextColor + '"' : ''}
      ${ this.state.values.optionBtnBgColor ? 'data-option-btn-bg-color="' + this.state.values.optionBtnBgColor + '"' : ''}
      ${ this.state.values.optionBranding ? 'data-option-branding="' + this.state.values.optionBranding + '"' : ''}
      ${ this.state.values.optionAlign ? 'data-option-align="' + this.state.values.optionAlign + '"' : ''}
    ></div>`
  }

  updateColor = (newValue, name) => {

    console.log(newValue, name)

    this.setState({
      values: {
        ...this.state.values,
        [name]: newValue
      }
    })
  }

  render() {

    return (
      <div>

        <CodeBlock language="html">{ this.rawHTML() }</CodeBlock>

        <main className="layout-docs container-xl header-padding footer-padding">
          <section className="md-styles content">
            <div className="docs-content">
              <form className="form-configurator" noValidate>
                <div className="text-center">
                  <div className="apz-input-choice">
                    <label>
                      <input type="radio" name="data-type" defaultValue="button"></input>
                      <span><Translate id="simulator.button">Botón</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="link" defaultChecked></input>
                      <span><Translate id="simulator.text">Texto</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="text"></input>
                      <span><Translate id="simulator.extended_text">Texto extendido</Translate></span>
                    </label>
                  </div>
                </div>
                <div className="apz-grid  u-pv2" >
                  <label className="grid-6@sm u-h8 u-ph2">
                    <div className="-label">
                      <Translate id="simulator.external_color_text">Color texto exterior</Translate>
                    </div>
                    <div>
                      <ColorPicker
                        name="optionTextColor"
                        first-color={ this.state.values.optionTextColor }
                        updateColor={ this.updateColor } />
                    </div>
                  </label>
                  <label className="grid-6@sm u-h8 u-ph2">
                    <div className="-label">
                      <Translate id="simulator.color_button_text">Color texto botón</Translate>
                    </div>
                    <div>
                    <ColorPicker
                      name="optionBtnTextColor"
                      first-color={ this.state.values.optionBtnTextColor }
                      updateColor={ this.updateColor } />
                    </div>
                  </label>
                  <label className="grid-6@sm u-h8 u-ph2">
                    <div className="-label">
                      <Translate id="simulator.color_bg_button">Color fondo botón</Translate>
                    </div>
                    <div>
                      <ColorPicker
                        name="optionBtnBgColor"
                        first-color={ this.state.values.optionBtnBgColor }
                        updateColor={ this.updateColor } />
                    </div>
                  </label>
                  <div className="grid-6@sm u-h8 u-ph2">
                    <div>Alineación del widget</div>
                    <select className="apz-select _width-color" name="data-option-align">
                      <option value="left"> Izquierda </option>
                      <option value="center" defaultValue> Centrado </option>
                      <option value="right"> Derecha </option>
                    </select>
                  </div>
                  <div className="grid-6@sm u-h8 u-ph2">
                    <div>Branding</div>
                    <label className="apz-input_switch _with-text _size-md">
                      <input type="checkbox" name="data-option-branding" />
                      <span className="-face"></span>
                      <span className="-text-yes"><Translate id="simulator.yes">Sí</Translate></span>
                      <span className="-text-no">No</span>
                    </label>
                  </div>
                </div>
              </form>
              <div className="widget-container">
                <div data-aplazame-widget-paylater
                  data-country="ES"
                  data-type="button"
                  data-amount="9900"
                  data-option-text-color={ this.state.values.optionTextColor }
                  data-option-btn-text-color={ this.state.values.optionBtnTextColor }
                  data-option-btn-bg-color={ this.state.values.optionBtnBgColor }
                  data-option-branding="true"
                  data-option-align="center"
                ></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}


export default Simulator;

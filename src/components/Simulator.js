import React from 'react';
import Translate from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import ColorPicker from '@site/src/components/ColorPicker';
import Switch from '@site/src/components/Switch';
import reactCSS from 'reactcss'

class Simulator extends React.Component {

  state = {
    values: {
      widgetType: this.props.children,
      country: this.props['data-country'],
      type: this.props['data-type'],
      optionTextColor: this.props['data-option-text-color'],
      optionBtnTextColor: this.props['data-option-btn-text-color'],
      optionBtnBgColor: this.props['data-option-btn-bg-color'],
      optionBranding: this.props['data-option-branding'] === 'true',
      optionAlign: this.props['data-option-align'],
    }
  }

  rawHTML = () => {
    const text = `<div ${this.state.values.widgetType}
      \t${this.state.values.country ? 'data-country="' + this.state.values.country + '"' : ''}
      ${this.state.values.type ? 'data-type="' + this.state.values.type + '"' : ''}
      ${this.state.values.optionTextColor ? 'data-option-text-color="' + this.state.values.optionTextColor + '"' : ''}
      ${this.state.values.optionBtnTextColor ? 'data-option-btn-text-color="' + this.state.values.optionBtnTextColor + '"' : ''}
      ${this.state.values.optionBtnBgColor ? 'data-option-btn-bg-color="' + this.state.values.optionBtnBgColor + '"' : ''}
      ${this.state.values.optionBranding ? 'data-option-branding="' + this.state.values.optionBranding + '"' : this.state.values.optionBranding === false ? 'data-option-branding="false"' : ''}
      ${this.state.values.optionAlign ? 'data-option-align="' + this.state.values.optionAlign + '"' : ''}
    ></div>`

    return text.replaceAll('\n      \n', '\n')
  }

  updateValue = (newValue, name) => {
    console.log(newValue, name)
    this.setState({
      values: {
        ...this.state.values,
        [name]: newValue
      }
    })
  }

  setBooleanValue = (newValue, name) => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: newValue
      }
    })
  }

  render() {
    const styles = reactCSS({
      'default': {
        form: {
          maxWidth: '600px',
          margin: 'auto',
        },
        label: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        container: {
          minHeight: '136px',
          backgroundColor: 'white',
        }
      }
    })

    return (
      <div>
        <main className="layout-docs container-xl header-padding footer-padding">
          <section className="md-styles content">
            <div className="docs-content">
              <form style={styles.form} className="form-configurator" noValidate>
                <div className="text-center">
                  <div className="apz-input-choice">
                    <label>
                      <input type="radio" name="data-type" defaultValue="button" onChange={(e) => this.updateValue(e.target.value, "type")}></input>
                      <span><Translate id="simulator.button">Botón</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="link" defaultChecked onChange={(e) => this.updateValue(e.target.value, "type")}></input>
                      <span><Translate id="simulator.text">Texto</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="text" onChange={(e) => this.updateValue(e.target.value, "type")}></input>
                      <span><Translate id="simulator.extended_text">Texto extendido</Translate></span>
                    </label>
                  </div>
                </div>
                <div className="apz-grid u-pv2" >
                  <label style={styles.label} className="grid-6@sm">
                    <div className="-label">
                      <Translate id="simulator.external_color_text">Color texto exterior</Translate>
                    </div>
                    <div>
                      <ColorPicker
                        name="optionTextColor"
                        first-color={this.state.values.optionTextColor}
                        updateColor={this.updateValue} />
                    </div>
                  </label>
                  <label style={styles.label} className="grid-6@sm">
                    <div className="-label">
                      <Translate id="simulator.color_button_text">Color texto botón</Translate>
                    </div>
                    <div>
                      <ColorPicker
                        name="optionBtnTextColor"
                        first-color={this.state.values.optionBtnTextColor}
                        updateColor={this.updateValue} />
                    </div>
                  </label>
                  {this.state.values.optionBtnBgColor !== undefined &&
                    <label style={styles.label} className="grid-6@sm">
                      <div className="-label">
                        <Translate id="simulator.color_bg_button">Color fondo botón</Translate>
                      </div>
                      <div>
                        <ColorPicker
                          name="optionBtnBgColor"
                          first-color={this.state.values.optionBtnBgColor}
                          updateColor={this.updateValue} />
                      </div>
                    </label>
                  }
                  <label style={styles.label} className="grid-6@sm">
                    <div className="-label">Alineación del widget</div>
                    <select
                      onChange={(e) => this.updateValue(e.target.value, "optionAlign")}
                      className="apz-select">
                      <option value="left">Izquierda</option>
                      <option value="center" defaultValue>Centrado</option>
                      <option value="right">Derecha</option>
                    </select>
                  </label>
                  <label style={styles.label} className="grid-6@sm">
                    <div className="-label">Branding</div>
                    <div>
                      <Switch
                        isOn={this.state.values.optionBranding}
                        name="optionBranding"
                        handleToggle={() => this.setBooleanValue(!this.state.values.optionBranding, "optionBranding")}
                      />
                    </div>
                  </label>
                </div>
              </form>
              <div className="widget-container" style={styles.container}>
                <div data-aplazame-widget-paylater
                  data-country="ES"
                  data-type={this.state.values.type}
                  data-amount="9900"
                  data-option-text-color={this.state.values.optionTextColor}
                  data-option-btn-text-color={this.state.values.optionBtnTextColor}
                  data-option-btn-bg-color={this.state.values.optionBtnBgColor}
                  data-option-branding={this.state.values.optionBranding}
                  data-option-align={this.state.values.optionAlign}
                ></div>
              </div>
            </div>
          </section>
        </main>

        <CodeBlock language="html">{this.rawHTML()}</CodeBlock>
      </div>
    );
  }
}


export default Simulator;

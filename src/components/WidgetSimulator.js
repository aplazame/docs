import React from 'react';

import CodeBlock from '@theme/CodeBlock';
import ColorPicker from '@site/src/components/ColorPicker';
import Switch from '@site/src/components/Switch';
import reactCSS from 'reactcss'
import Translate from '@docusaurus/Translate';
import { translate } from '@docusaurus/Translate';

class WidgetSimulator extends React.Component {

  state = {
    values: {
      widgetType: this.props.children,
      amount: this.props['data-amount'],
      country: this.props['data-country'],
      type: this.props['data-type'],

      // Colors:
      optionTextColor: this.props['data-option-text-color'],
      optionBtnTextColor: this.props['data-option-btn-text-color'],
      optionBtnBgColor: this.props['data-option-btn-bg-color'],
      optionPrimaryColor: this.props['data-option-primary-color'],

      // Enums
      optionAlign: this.props['data-option-align'],
      optionLayout: this.props['data-option-layout'],

      // Pay in 4 whitout value
      optionPayIn: this.props['data-pay-in-4'],

      // Booleans:
      optionBranding: this.props['data-option-branding'] ? this.props['data-option-branding'] === 'true' : undefined,
      optionDownpaymentInfo: this.props['data-option-downpayment-info'] ? this.props['data-option-downpayment-info'] === 'true' : undefined,
      optionTitleSmart: this.props['data-option-title-smart'] ? this.props['data-option-title-smart'] === 'true' : undefined,
      optionDisabledModal: this.props['data-option-disable-modal'] ? this.props['data-option-disable-modal'] === 'true' : undefined,
      optionLegalAdvice: this.props['data-option-legal-advice'] ? this.props['data-option-legal-advice'] === 'true' : undefined,
      optionSlider: this.props['data-option-slider'] ? this.props['data-option-slider'] === 'true' : undefined,
      optionBorderProduct: this.props['data-option-border-product'] ? this.props['data-option-border-product'] === 'true' : undefined,
      optionCustomStyles: this.props['data-option-custom-styles'] ? this.props['data-option-custom-styles'] === 'true' : undefined, // Custom styles
      optionMaxAmountDesired: this.props['data-option-max-amount-desired'] ? this.props['data-option-max-amount-desired'] === 'true' : undefined,

      // Text
      optionTitleDefault: this.props['data-option-title-default'],
      optionTitleZero: this.props['data-option-title-zero-interest'],
    }
  }

  isBooleanDefined = (key) => {
    return this.state.values[key] !== undefined
  }

  rawHTML = () => {
    const text = `<div ${this.state.values.widgetType}
      ${this.state.values.country ? 'data-country="' + this.state.values.country + '"' : ''}
      ${ 'data-amount="' + this.state.values.amount + '"' }
      ${this.state.values.type ? 'data-type="' + this.state.values.type + '"' : ''}
      ${this.state.values.optionTextColor ? 'data-option-text-color="' + this.state.values.optionTextColor + '"' : ''}
      ${this.state.values.optionBtnTextColor ? 'data-option-btn-text-color="' + this.state.values.optionBtnTextColor + '"' : ''}
      ${this.state.values.optionBtnBgColor ? 'data-option-btn-bg-color="' + this.state.values.optionBtnBgColor + '"' : ''}
      ${this.state.values.optionPrimaryColor ? 'data-option-primary-color="' + this.state.values.optionPrimaryColor + '"' : ''}
      ${this.state.values.optionAlign ? 'data-option-align="' + this.state.values.optionAlign + '"' : ''}
      ${this.isBooleanDefined('optionBranding') ? 'data-option-branding="' + this.state.values.optionBranding + '"' : ''}
      ${this.isBooleanDefined('optionDownpaymentInfo') ? 'data-downpayment-info="' + this.state.values.optionDownpaymentInfo + '"' : ''}
      ${this.isBooleanDefined('optionTitleSmart') ? 'data-option-title-smart="' + this.state.values.optionTitleSmart + '"' : ''}
      ${this.isBooleanDefined('optionDisabledModal') ? 'data-option-disable-modal="' + this.state.values.optionDisabledModal + '"' : ''}
      ${this.isBooleanDefined('optionSlider') ? 'data-option-slider="' + this.state.values.optionSlider + '"' : ''}
      ${this.isBooleanDefined('optionBorderProduct') ? 'data-option-border-product="' + this.state.values.optionBorderProduct + '"' : ''}
      ${this.state.values.optionTitleDefault ? 'data-option-title-default="' + this.state.values.optionTitleDefault + '"' : ''}
      ${this.state.values.optionTitleZero ? 'data-option-title-zero-interest="' + this.state.values.optionTitleZero + '"' : ''}
      ${this.state.values.optionLayout ? 'data-option-layout="' + this.state.values.optionLayout + '"' : ''}
      ${this.isBooleanDefined('optionCustomStyles') ? 'data-option-custom-styles="' + this.state.values.optionCustomStyles + '"' : ''}
      ${this.isBooleanDefined('optionMaxAmountDesired') ? 'data-option-max-amount-desired="' + this.state.values.optionMaxAmountDesired + '"' : ''}
    ></div>`

    return text.replace(/  +/g, '').replace(/\n+/g, '\n')
  }

  updateValueState = (newValue, name) => {
    // console.log('updateValueState --> ', newValue, name)
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
        label: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        container: {
          backgroundColor: this.state.values.optionCustomStyles ? 'inherit' : 'white'
        }
      }
    })

    const calculateWidgetType = (inputProps) => {
      if (this.state.values.widgetType === 'data-aplazame-widget-instalments="v4"') {
        inputProps['data-aplazame-widget-instalments'] = 'v4'
      } else if (this.state.values.widgetType === 'data-aplazame-widget-instalments="v5"') {
        inputProps['data-aplazame-widget-instalments'] = 'v5'
      } else {
        inputProps[this.state.values.widgetType] = ''
      }
      return inputProps
    }

    let inputProps = {
      'data-pay-in-4' : this.state.values.optionPayIn !== undefined
    }

    inputProps = calculateWidgetType(inputProps)

    return (
      <div>
        <section>
          <form style={styles.form} className="form-configurator" noValidate>
            {this.state.values.type !== undefined &&
              <div className="text--center margin-bottom--md">
                {this.state.values.widgetType === 'data-aplazame-widget-paylater' &&
                  <div className="apz-input-choice">
                    <label>
                      <input type="radio" name="data-type" defaultValue="button" onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.button">Botón</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="link" defaultChecked onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.text">Texto</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="text" onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.extended_text">Texto extendido</Translate></span>
                    </label>
                  </div>
                }
                {this.state.values.widgetType === 'data-aplazame-widget-instalments' &&
                  <div className="apz-input-choice">
                    <label>
                      <input type="radio" name="data-type" defaultValue="button" onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.button">Botón</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="text" defaultChecked onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.text">Texto</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="select" onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.extended_text">Selector</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="big-button" onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.big_button">Botón grande</Translate></span>
                    </label>
                  </div>
                }
                {this.state.values.widgetType === 'data-aplazame-widget-instalments="v4"' &&
                  <div className="apz-input-choice">
                    <label>
                      <input type="radio" name="data-type" defaultValue="product" defaultChecked onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.button">Producto</Translate></span>
                    </label>
                    <label>
                      <input type="radio" name="data-type" defaultValue="cart" onChange={(e) => this.updateValueState(e.target.value, "type")}></input>
                      <span><Translate id="simulator.text">Carrito</Translate></span>
                    </label>
                  </div>
                }
              </div>
            }
            <div className="row">
              {this.state.values.optionTextColor !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div>
                    <Translate id="simulator.external_color_text">Color texto exterior</Translate>
                  </div>
                  <div>
                    <ColorPicker
                      name="optionTextColor"
                      first-color={this.state.values.optionTextColor}
                      updateColor={this.updateValueState} />
                  </div>
                </label>
              }
              {this.state.values.optionBtnTextColor !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div>
                    <Translate id="simulator.color_button_text">Color texto botón</Translate>
                  </div>
                  <div>
                    <ColorPicker
                      name="optionBtnTextColor"
                      first-color={this.state.values.optionBtnTextColor}
                      updateColor={this.updateValueState} />
                  </div>
                </label>
              }
              {this.state.values.optionPrimaryColor !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div>
                    <Translate id="simulator.color_primary">Color primario</Translate>
                  </div>
                  <div>
                    <ColorPicker
                      name="optionPrimaryColor"
                      first-color={this.state.values.optionPrimaryColor}
                      updateColor={this.updateValueState} />
                  </div>
                </label>
              }
              {this.state.values.optionBtnBgColor !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div>
                    <Translate id="simulator.color_bg_button">Color fondo botón</Translate>
                  </div>
                  <div>
                    <ColorPicker
                      name="optionBtnBgColor"
                      first-color={this.state.values.optionBtnBgColor}
                      updateColor={this.updateValueState} />
                  </div>
                </label>
              }
              {this.state.values.optionAlign !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div>
                    <Translate id="simulator.widget_alignment">Alineación</Translate>
                  </div>
                  <select
                    onChange={(e) => this.updateValueState(e.target.value, "optionAlign")}
                    className="apz-select"
                    value={this.state.values.optionAlign}>
                    <option value="left">{translate({id: 'simulator.left', message: 'Izquierda'})}</option>
                    <option value="center">{ translate({id: 'simulator.center', message: 'Centrado'}) }</option>
                    <option value="right">{translate({id: 'simulator.right', message: 'Derecha'})}</option>
                  </select>
                </label>
              }
              {this.state.values.optionLayout !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.position">Posición</Translate>:</div>
                  <select
                    onChange={(e) => this.updateValueState(e.target.value, "optionLayout")}
                    className="apz-select"
                    value={this.state.values.optionLayout}>
                    <option value="vertical">{translate({id: 'simulator.vertical', message: 'Vertical'})}</option>
                    <option value="horizontal" defaultValue>{translate({id: 'simulator.horizontal', message: 'Horizontal'})}</option>
                  </select>
                </label>
              }
              {this.state.values.optionBranding !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div>Branding</div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionBranding}
                      name="optionBranding"
                      handleToggle={() => this.updateValueState(!this.state.values.optionBranding, "optionBranding")}
                    />
                  </div>
                </label>
              }
              {this.state.values.optionDownpaymentInfo !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div>Downpayment info</div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionDownpaymentInfo}
                      name="optionDownpaymentInfo"
                      handleToggle={() => this.updateValueState(!this.state.values.optionDownpaymentInfo, "optionDownpaymentInfo")}
                    />
                  </div>
                </label>
              }
              {this.state.values.optionTitleSmart !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.smart_title">Título inteligente</Translate></div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionTitleSmart}
                      name="optionTitleSmart"
                      handleToggle={() => this.updateValueState(!this.state.values.optionTitleSmart, "optionTitleSmart")}
                    />
                  </div>
                </label>
              }
              {this.state.values.optionDisabledModal !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.disable_modal">Desactivar modal</Translate></div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionDisabledModal}
                      name="optionDisabledModal"
                      handleToggle={() => this.updateValueState(!this.state.values.optionDisabledModal, "optionDisabledModal")}
                    />
                  </div>
                </label>
              }
            {this.state.values.optionLegalAdvice !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.legal_advertise">Aviso legal</Translate></div>                      <div>
                    <Switch
                      isOn={this.state.values.optionLegalAdvice}
                      name="optionLegalAdvice"
                      handleToggle={() => this.updateValueState(!this.state.values.optionLegalAdvice, "optionLegalAdvice" )}
                    />
                  </div>
                </label>
              }
            {this.state.values.optionSlider !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.slider">Slider</Translate></div>                      <div>
                    <Switch
                      isOn={this.state.values.optionSlider}
                      name="optionSlider"
                      handleToggle={() => this.updateValueState(!this.state.values.optionSlider, "optionSlider" )}
                    />
                  </div>
                </label>
              }
              {this.state.values.optionBorderProduct !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.show_border">Ver borde</Translate></div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionBorderProduct}
                      name="optionBorderProduct"
                      handleToggle={() => this.updateValueState(!this.state.values.optionBorderProduct, "optionBorderProduct" )}
                    />
                  </div>
                </label>
              }
              {this.state.values.optionCustomStyles !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.custom_styles">Estilos propios</Translate></div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionCustomStyles}
                      name="optionCustomStyles"
                      handleToggle={() => this.updateValueState(!this.state.values.optionCustomStyles, "optionCustomStyles" )}
                    />
                  </div>
                </label>
              }
              {this.state.values.optionMaxAmountDesired !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.max_amount_desired">Introducir cuota máxima</Translate></div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionMaxAmountDesired}
                      name="optionMaxAmountDesired"
                      handleToggle={() => this.updateValueState(!this.state.values.optionMaxAmountDesired, "optionMaxAmountDesired" )}
                    />
                  </div>
                </label>
              }
              { this.state.values.optionTitleDefault !== undefined &&
                <label style={styles.label} className="grid-12 margin-bottom--md">
                  <div>
                    <Translate id="simulator.default_title">Título por defecto</Translate>
                  </div>
                  <div>
                    <input
                      type="text"
                      class="text-box"
                      name="optionTitleDefault"
                      value={this.state.values.optionTitleDefault}
                      onChange={(e) => this.updateValueState(e.target.value, "optionTitleDefault" )}
                    />
                  </div>
                </label>
              }
              { this.state.values.optionTitleZero !== undefined &&
                <label style={styles.label} className="grid-12 margin-bottom--md">
                  <div><Translate id="simulator.campaign_title">Título de campaña</Translate></div>
                  <div>
                    <input
                      type="text"
                      class="text-box"
                      name="optionTitleZero"
                      value={this.state.values.optionTitleZero}
                      onChange={(e) => this.updateValueState(e.target.value, "optionTitleZero" )}
                    />
                  </div>
                </label>
              }
              {this.state.values.optionPayIn !== undefined &&
                <label style={styles.label} className="col col--6 margin-bottom--md">
                  <div><Translate id="simulator.pay_in_4">Paga en 4</Translate></div>
                  <div>
                    <Switch
                      isOn={this.state.values.optionPayIn}
                      name="optionPayIn"
                      handleToggle={() => this.updateValueState(!this.state.values.optionPayIn, "optionPayIn")}
                    />
                  </div>
                </label>
              }
            </div>
          </form>
          <div className="widget-container" style={ styles.container }>
            <div { ...inputProps }
              data-country="ES"
              data-type={this.state.values.type}
              data-amount={this.state.values.amount}
              // Colors
              data-option-text-color={this.state.values.optionTextColor}
              data-option-btn-text-color={this.state.values.optionBtnTextColor}
              data-option-primary-color={this.state.values.optionPrimaryColor}
              data-option-btn-bg-color={this.state.values.optionBtnBgColor}
              data-option-align={this.state.values.optionAlign}
              // Booleans
              data-option-branding={this.state.values.optionBranding}
              data-option-downpayment-info={this.state.values.optionDownpaymentInfo}
              data-option-title-smart={this.state.values.optionTitleSmart}
              data-option-disable-modal={this.state.values.optionDisabledModal}
              data-option-legal-advice={this.state.values.optionLegalAdvice}
              data-option-slider={this.state.values.optionSlider}
              data-option-border-product={this.state.values.optionBorderProduct}
              data-option-custom-styles={this.state.values.optionCustomStyles}
              data-option-max-amount-desired={this.state.values.optionMaxAmountDesired}
              // Text
              data-option-title-default={this.state.values.optionTitleDefault}
              data-option-title-zero-interest={this.state.values.optionTitleZero}

              // V4
              data-option-layout={this.state.values.optionLayout}
            ></div>
          </div>
        </section>

        <CodeBlock language="html">{this.rawHTML()}</CodeBlock>
      </div>
    );
  }
}


export default WidgetSimulator;

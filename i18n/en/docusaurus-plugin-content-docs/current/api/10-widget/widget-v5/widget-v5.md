---
title: Widget v5 (New)
sidebar_position: 5
keywords: [widget V5]
---

# New widget v4
## Integration 
There is the possibility of integrating a new version of the widget, for this, you must assign the value "v5" to the HTML attribute: `data-aplazame-widget-instalments="v5"`

```html
<div 
  data-aplazame-widget-instalments="v4"
  data-amount="3900">
</div>
```

This version aims to simplify the integration for the installment payment widget. It has one design with two posible sizes.

<div className="widget-container">
  <div data-aplazame-widget-instalments="v5"
    data-amount="3900"
    data-option-legal-advice="false"
    data-option-default-instalments="6"
    data-option-align="center"
    data-option-slider="true"
    data-option-small-size="true"
    data-option-customer-id="02667776Y">
  </div>
</div>


:::note
  The default values in this case are those shown in this documentation.

  Note that when you change the values in the form it will be updated in the sample code.
:::

``` html
  <div data-aplazame-widget-instalments="v5"
    data-amount="3900"
    data-option-legal-advice="false"
    data-option-default-instalments="6"
    data-option-align="center"
    data-option-slider="true"
    data-option-small-size="true"
    data-option-customer-id="02667776Y">
  </div>
```

|<t id="table.parameter">Parámetro</t> | <t id="table.type">Tipo</t> | <t id="table.required">Requerido</t> | <t id="table.description">Descripción</t>|
|---------|---------|---------|---------|
|data-option-slider | boolean | Yes | Shows of hides the slider that lets the customer select the amount of instalments.
|data-option-small-size | boolean | No | Allows you to display the widget in the small size.
|data-price | [css selector](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors) | Yes | CSS selector that indicates the element that contains the final price. It is updated live if there are changes in the price. If used in conjunction with `data-amount`, the value of the latter and `data-price` will be shown if the price changes.
|data-amount | decimal | Yes| Quantity to be financed in cents. This field can be omitted if the [`data-price`](./#variable-price) is used.
|data-option-legal-advice | boolean | No | Indicates whether you should displaying the legal text after the widget. The default value is `false`.
|data-option-default-instalments | decimal | No | Allows you to configure the number of instalments that the widget will display by default.
|data-option-border-product |boolean | Yes | Indicates whether you should displaying the color border if the type is `product`. The default value is `true`.
|data-option-align | enum | No | Indicates widget alignment. Can be aligned at `left` or `right`. The default value is `center`.
|data-option-customer-id | dni/nie/nif | No | Indicates if the customer has a preapproved credit.


:::tip
If you want to configure the widget according to your requirements you can use the configurator and decide which values you want to apply and with what look and feel.
:::

- Configure the different parameters according to your requirements. Apply the colours you want, choose the alignment and decide whether you want your widget to show the legal text.


### Configurator

<WidgetSimulator
  data-amount="14900"
  data-country="ES"
  data-currency="EUR"
  data-option-align="center"
  data-option-legal-advice="true"
  data-option-slider="true"
  data-option-small-size="true"
  data-aplazame-widget-instalments="v5"></WidgetSimulator>
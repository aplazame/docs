---
title: CSS customization of the Widget
sidebar_position: 4
keywords: [custom CSS, styles reset, design,own styles]
---
# CSS customization of the Widget

## Integration
To customize the styles of the widget via CSS you must include the `data-option-custom-styles="true"`

``` html
<div data-aplazame-simulator
     data-amount="5900"
     data-currency="EUR"
     data-country="ES"
     data-type="button"
     data-option-branding="true"
     data-option-title-smart="true"
     data-option-title-default="Págalo a plazos"
     data-option-title-zero-interest="Consíguelo sin intereses"
     data-option-custom-styles="true"
     data-option-disable-modal="false"></div>
```

:::info

  When activating the option `data-option-custom-styles="true"`  the HTML will be inserted on line, instead of in an `iframe`, so that the styles that the page includes will be applied.
  
  So the `data-option-text-color`, `data-option-btn-text-color` and `data-option-btn-bg-color` fields of the [advanced integration](./#integracion-avanzada) do not apply.
 
:::

### Configurator

<WidgetSimulator
  data-amount="22900"
  data-country="ES"
  data-currency="EUR"
  data-type="button"
  data-option-custom-styles="true"  
  data-option-branding="true"
  data-option-downpayment-info="true"
  data-option-title-smart="true"  
  data-option-legal-advice="true"
  data-aplazame-widget-instalments></WidgetSimulator>

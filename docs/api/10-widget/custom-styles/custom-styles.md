---
title: Personalización CSS del Widget
sidebar_position: 4
keywords: [custom CSS, styles, reset design, own styles]
---
# Personalización CSS del Widget

## Integración
Para personalizar los estilos del widget vía CSS hay que incluir la opción `data-option-custom-styles="true"`

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

  Al activar la opción `data-option-custom-styles="true"` el HTML se insertará en línea, en lugar de en un `iframe`, de modo que aplicarán los estilos que incluya la página.  
  
  Por lo que los campos `data-option-text-color`, `data-option-btn-text-color` y `data-option-btn-bg-color` de la [integración avanzada](./#integracion-avanzada) no aplican.  
:::

### Configurador

<WidgetSimulator
  data-aplazame-widget-instalments=""
  data-amount="22900"
  data-country="ES"
  data-currency="EUR"
  data-type="button"
  data-option-custom-styles="true"  
  data-option-branding="true"
  data-option-downpayment-info="true"
  data-option-title-smart="true"  
  data-option-legal-advice="true"
/>

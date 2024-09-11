---
title: Widget v5 (Nuevo)
sidebar_position: 5
keywords: [widget V5]
---

# Nuevo widget v5

## Integración 
Existe la posibilidad de integrar una nueva versión del widget, para ello, hay que asignar el valor "v5" al atributo HTML: `data-aplazame-widget-instalments="v5"`

```html
<div 
  data-aplazame-widget-instalments="v5"
  data-amount="3900">
</div>
```

Esta versión pretende simplificar la integración para el widget de pago a plazos. Tiene un único diseño con 2 tamaños.

<div className="widget-container">
  <div data-aplazame-widget-instalments="v5"
    data-amount="3900"
    data-option-legal-advice="false"
    data-option-default-instalments="6"
    data-option-align="center"
    data-option-slider="true"
    data-option-customer-id="02667776Y">
  </div>
</div>

:::note
Los valores por defecto en ese caso, son los que se muestran en esta documentación.
:::

``` html
  <div data-aplazame-widget-instalments="v5"
    data-amount="3900"
    data-option-legal-advice="false"
    data-option-default-instalments="6"
    data-option-align="center"
    data-option-slider="true"
    data-option-customer-id="02667776Y">
  </div>
```

|<t id="table.parameter">Parámetro</t> | <t id="table.type">Tipo</t> | <t id="table.required">Requerido</t> | <t id="table.description">Descripción</t>|
|---------|---------|---------|---------|
|data-option-slider | boolean | Sí | Muestra o esconde el slider para deslizar con el ratón la cantidad de cuotas deseadas.
|data-amount | decimal | <t id="docs.yes">Sí</t> | Cantidad a financiar **en céntimos**. Este campo se puede omitir si se usa [`data-price`](#precio-variable).
|data-option-legal-advice | boolean | No | Indica si debe mostrarse el texto legal justo después del widget. El valor por omisión es `false`.
|data-option-default-instalments | decimal | No | Permite configurar el número de cuotas seleccionadas que mostrará el widget por defecto.
|data-option-align | enum | No | Indica la alineación del widget. Se puede alinear a la izquierda `left` o a la derecha `right`. El valor por omisión es `center`.
|data-option-customer-id | dni/nie/nif | No | Indica si hay un crédito preaprobado para el cliente.


:::tip
Si deseas configurar el widget de acuerdo a tus necesidades, puedes usar el configurador y decidir qué valores quieres aplicar y con qué apariencia.
:::

- Configura los distintos parámetros de acuerdo a tus necesidades. Aplica los colores que desees, elige la alineación y decide si quieres que tu widget muestre el texto legal.


### Configurador

<WidgetSimulator
  data-amount="14900"
  data-country="ES"
  data-currency="EUR"
  data-option-align="center"
  data-option-legal-advice="true"
  data-option-slider="true"
>
  data-aplazame-widget-instalments="v5"</WidgetSimulator>

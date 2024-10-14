---
title: Widget v4
sidebar_position: 5
keywords: [widget V4]
---

## Integración 
Existe la posibilidad de integrar una nueva versión del widget, para ello, hay que asignar el valor "v4" al atributo HTML: `data-aplazame-widget-instalments="v4"`

```html
<div 
  data-aplazame-widget-instalments="v4"
  data-amount="3900">
</div>
```

Esta versión pretende simplificar la integración para el widget de pago a plazos. Tiene dos diseños: `product` y `cart` y dos posiciones `horizontal` y `vertical`.

<div className="widget-container">
  <div data-aplazame-widget-instalments="v4"
    data-amount="3900"
    data-type="product"
    data-option-legal-advice="false"
    data-option-primary-color="#334bff"
    data-option-layout="vertical"
    data-option-default-instalments="6"
    data-option-border-product="true"
    data-option-align="center">
  </div>
</div>

:::note
Los valores por defecto en ese caso, son los que se muestran en esta documentación.
:::

``` html
<div data-aplazame-widget-instalments="v4"
    data-amount="3900"
    data-type="product"
    data-option-legal-advice="false"
    data-option-primary-color="#334bff"
    data-option-layout="vertical"
    data-option-default-instalments="6"
    data-option-border-product="true"
    data-option-align="center"
    data-option-customer-id="02667776Y"
    data-option-max-amount-desired="false"></div>
```

|<t id="table.parameter">Parámetro</t> | <t id="table.type">Tipo</t> | <t id="table.required">Requerido</t> | <t id="table.description">Descripción</t>|
|---------|---------|---------|---------|
|data-price | [css selector](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors) | <t id="docs.yes">Sí</t> | Selector CSS que indique el elemento que contiene el precio final. Se actualiza en vivo si hay cambios en el precio. Si se usa conjuntamente con `data-amount`, se mostrará el valor de este último y de data-price si el precio cambia.
|data-amount | decimal | <t id="docs.yes">Sí</t> | Cantidad a financiar **en céntimos**. Este campo se puede omitir si se usa [`data-price`](#precio-variable).
|data-type | enum | No | El diseño del widget cambiará en función del valor seleccionado. Los posibles valores son: `product`, `cart`. Por omisión se usará: `product`.
|data-option-legal-advice | boolean | No | Indica si debe mostrarse el texto legal justo después del widget. El valor por omisión es `false`.
|data-option-primary-color | [css color](https://developer.mozilla.org/es/docs/Web/CSS/color_value) | No | Establece el color del fondo del botón y del borde.
|data-option-layout | enum | No | Se puede escoger la posición `horizontal` (que cambiará automáticamente si no tiene el suficiente espacio) o `vertical`. Vertical por defecto.
|data-option-default-instalments | decimal | No | Permite configurar el número de cuotas seleccionadas que mostrará el widget por defecto.
|data-option-border-product |boolean | <t id="docs.yes">Sí</t> | Indica si debe mostrarse el borde de color cuando es de tipo `producto`. El valor por omisión es `true`.
|data-option-align | enum | No | Indica la alineación del widget. Se puede alinear a la izquierda `left` o a la derecha `right`. El valor por omisión es `center`.
|data-option-customer-id | dni/nie/nif | No | Indica si hay un crédito preaprobado para el cliente.
|data-option-max-amount-desired | boolean | No | Modifica el widget para permitir al usuario introducir manualmente la cuota máxima que desea pagar, o la que más se aproxima. El valor por omisión es `false`.


:::tip
Si deseas configurar el widget de acuerdo a tus necesidades, puedes usar el configurador y decidir qué valores quieres aplicar y con qué apariencia.
:::

- Configura los distintos parámetros de acuerdo a tus necesidades. Aplica los colores que desees, elige la alineación y decide si quieres que tu widget muestre el texto legal.


### Configurador

<WidgetSimulator
  data-aplazame-widget-instalments="v4"
  data-amount="14900"
  data-country="ES"
  data-currency="EUR"
  data-type="product"
  data-option-layout="horizontal"
  data-option-align="center"
  data-option-legal-advice="true"
  data-option-border-product="true"
  data-option-primary-color="#334BFF"
  data-option-max-amount-desired="false"
/>

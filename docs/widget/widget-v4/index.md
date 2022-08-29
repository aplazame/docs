# Nuevo widget v4

Existe la posibilidad de integrar una nueva versión del widget, para ello, hay que asignar el valor v4 al atributo HTML: `data-aplazame-widget-instalments='v4'`

```html
<div 
  data-aplazame-widget-instalments="v4"
  data-amount="3900">
  </div>
```
Esta versión pretende simplificar la integración para el widget de pago a plazos. Tiene dos diseños: `product` y `cart` y dos posiciones `horizontal` y `vertical`.

<aside class="notice">Si deseas configurar el widget de acuerdo a tus necesidades, puedes usar el configurador y decidir qué valores quieres aplicar y con qué look and feel.</aside>

- Configura los distintos parámetros de acuerdo a tus necesidades. Aplica los colores que desees, elige la alineación y decide si quieres que tu widget muestre el texto legal.

include{ ./_simulator_v4.md }

<aside class="notice">Los valores por defecto en ese caso, son los que se muestran en esta documentación.</aside>

``` html
<div data-aplazame-widget-instalments="v4"
    data-amount="3900"
    data-type="product"
    data-option-legal-advice="false"
    data-option-primary-color="#334bff"
    data-option-layout="vertical"
    data-option-default-instalments="6"
    data-option-border-product="true"
    data-option-align="center"></div>
```

|<Translate id="table.parameter">Parámetro</Translate> | <Translate id="table.type">Tipo</Translate> | <Translate id="table.required">Requerido</Translate> | <Translate id="table.description">Descripción</Translate>|
|---------|---------|---------|---------|
|data-price | [css selector](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors) | <Translate id="docs.yes">Sí</Translate> | Selector CSS que indique el elemento que contiene el precio final. Se actualiza en vivo si hay cambios en el precio. Si se usa conjuntamente con `data-amount`, se mostrará el valor de este último y de data-price si el precio cambia.
|data-amount | decimal | <Translate id="docs.yes">Sí</Translate> | Cantidad a financiar **en céntimos**. Este campo se puede omitir si se usa [`data-price`](#precio-variable)
|data-type | enum | No | El diseño del widget cambiará en función del valor seleccionado. <br/>Los posibles valores son: `product`, `cart`. Por omisión se usará: `product`
|data-option-legal-advice | boolean | No | Indica si debe mostrarse el texto legal justo después del widget. El valor por omisión es `false`.
|data-option-primary-color | [css color](https://developer.mozilla.org/es/docs/Web/CSS/color_value) | No | Establece el color del fondo del botón y del borde.
|data-option-layout | enum | No | Se puede escoger la posición `horizontal` (que cambiará automáticamente si no tiene el suficiente espacio) o `vertical`. Vertical por defecto.
|data-option-default-instalments | decimal | No | Permite configurar el número de cuotas seleccionadas que mostrará el widget por defecto
|data-option-border-product |boolean | <Translate id="docs.yes">Sí</Translate> | Indica si debe mostrarse el borde de color cuando es de tipo `producto`. El valor por omisión es `true`.
|data-option-align | enum | No | Indica la alineación del widget. Se puede alinear a la izquierda `left` o a la derecha `right`. El valor por omisión es `center`.
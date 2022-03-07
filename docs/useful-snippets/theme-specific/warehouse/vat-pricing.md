---
sidebar_position: 1
title: VAT Pricing
---

# VAT Pricing

Enables VAT pricing to be displayed within the Warehouse theme. This change works when the merchant excludes VAT in their Shopify data's product price.

```js title="warehouse.js"
{
  key: '_updateProductPrices',
  value: function _updateProductPrices(newVariant, previousVariant) {
    var priceContainer = this.element.querySelector('.price-list');
    var productPrices = this.element.querySelector('.price-list .price:not(.price--ex-vat)');

    var productPricesExVat = this.element.querySelector('.price-list .price--ex-vat');
    var productPriceIncVat = newVariant['price'] * 1.2;
    console.log(newVariant['taxable']);

    if (!newVariant) {
      productPrices.style.display = 'none';
    } else {
      if (previousVariant && previousVariant['price'] === newVariant['price'] && previousVariant['compare_at_price'] === newVariant['compare_at_price']) {
        return; // The price do not have changed so let's return to avoid changing the DOM for nothing
      }

      productPrices.innerHTML = '';

      if (newVariant['compare_at_price'] > newVariant['price']) {
        productPrices.innerHTML += '<span class="price price--highlight" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '<small> (ex. VAT)</small></span>';
        productPrices.innerHTML += '<span class="price price--compare" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['compare_at_price'], window.theme.moneyFormat) + '<small> (ex. VAT)</small></span>';
      } else {
        if(newVariant['taxable']) {
          productPrices.innerHTML += '<span class="price" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(productPriceIncVat, window.theme.moneyFormat) + '<small> (inc. VAT)</small></span>';
          if(productPricesExVat) {
          productPricesExVat.innerHTML = __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '<small> (ex. VAT)</small>';
          } else {
            var productPricesExVat = document.createElement('span');
            productPricesExVat.classList.add('price', 'price--ex-vat');
            productPricesExVat.setAttribute('data', 'money-convertable');
            priceContainer.insertBefore(productPricesExVat, productPrices.nextSibling)
            productPricesExVat.innerHTML = __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '<small> (ex. VAT)</small>';
          }
        } else {
          productPrices.innerHTML = '<span class="price" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>';
          if(productPricesExVat){productPricesExVat.remove()};
        }
      }

      productPrices.style.display = '';
    }
  }

  /**
    * Update the inventory (if needed)
    */

}
```

```liquid title="product-item.liquid"
{% if product.selected_or_first_available_variant.taxable %}
  <span class="price" data-money-convertible>{{ current_variant.price | times: 1.2 | money }} <small>(inc. VAT)</small></span>
  <span class="price price--ex-vat" data-money-convertible>{{ current_variant.price | money }} <small>(ex. VAT)</small></span>
{% else %}
  <span class="price" data-money-convertible>{{ current_variant.price | money }}</span>
{% endif %}
```

```liquid title="product-info.liquid"
{% if product.price > 0 %}
  <span class="price" data-money-convertible>{{ product.price | times:1.2 | money }}{% if selected_variant.taxable %} <small>(inc. VAT)</small>{% endif %}</span>
  {% if selected_variant.taxable %}
    <span class="price price--ex-vat" data-money-convertible>{{ selected_variant.price | money }} <small>(ex. VAT)</small></span>
  {% endif %}
{%- endif -%}
```
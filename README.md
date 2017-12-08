# Revolt Shopify Custom Debut Theme

Form: <https://help.shopify.com/themes/liquid/tags/theme-tags#form>

```liquid
{% comment %}
  Usage:
  {% include 'pre-order-cta', href: section.settings.button_link, line1: "PRE-ORDER", line2: "NOW" %}
{% endcomment %}
```

```liquid
{%- assign img_url = product.featured_image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

<img
  src="{{ product.featured_image | img_url: '300x300' }}"
  data-src="{{ img_url }}"
  data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
  data-aspectratio="{{ product.featured_image.aspect_ratio }}"
  data-sizes="auto"
  alt="{{ product.featured_image.alt | escape }}">
```

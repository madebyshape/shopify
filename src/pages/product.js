// Page-specific JS for product pages
// Loaded via: <script src="{{ 'custom-product.js' | asset_url }}" defer></script>
// in layout/theme.liquid, wrapped in: {% if template == 'product' %}
//
// Alpine.js is already available globally via custom.js — no need to import it here.
// Register components using the alpine:init event so they are ready before Alpine.start() runs.

document.addEventListener('alpine:init', () => {
  Alpine.data('productForm', () => ({
    quantity: 1,

    increment() {
      this.quantity++
    },

    decrement() {
      if (this.quantity > 1) this.quantity--
    },
  }))
})

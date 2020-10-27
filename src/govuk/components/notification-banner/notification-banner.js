import '../../vendor/polyfills/Element/prototype/classList'

function NotificationBanner ($module) {
  this.$module = $module
}

// Initialise component
NotificationBanner.prototype.init = function () {
  var $module = this.$module
  // Check for module
  if (!$module) {
    return
  }

  // Focus the element when the HTML document has loaded
  window.addEventListener('DOMContentLoaded', this.setFocus.bind(this))
}

/**
 * Focus the element
 *
 * If `role="alert"` is set, focus the element to help some assistive technologies
 * prioritise announcing it.
 *
 * This function should be called *after* the `DOMContentLoaded` event is fired.
 *
 * You can turn off the auto-focus functionality by setting `data-disable-auto-focus="true"` in the * component HTML. You might wish to do this based on user research findings, or to avoid
 * a clash with another element which should be focused when the page loads.
 */
NotificationBanner.prototype.setFocus = function () {
  var $module = this.$module

  // Check if the attribute that disables the auto focus is present
  if ($module.getAttribute('data-disable-auto-focus') === 'true') {
    return
  }

  // Check if `role="alert"` is set. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user about it.
  if ($module.getAttribute('role') !== 'alert') {
    return
  }

  // Set tabindex to -1 so to make the element focusable with JavaScript (the element will not be reachable via sequential keyboard navigation).
  $module.setAttribute('tabindex', '-1')

  this.$module.focus()
}

export default NotificationBanner

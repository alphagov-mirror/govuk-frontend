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
 * Move focus to the element to make assistive technologies prioritise announcing it, in addition
 * to setting `role="alert"` in the HTML (both `role="alert"` and `data-auto-focus="true"`are
 * required for the auto-focus functionality to activate).
 * *
 * This function should be called *after* the DOMContentLoaded event is fired.
 *
 * You can turn off the auto-focus functionality by removing the `data-auto-focus` attribute
 * from the component HTML. You might wish to do this based on user research findings, or to avoid
 * a clash with another element which should be focused when the page loads.
 */
NotificationBanner.prototype.setFocus = function () {
  var $module = this.$module

  // Check if the attribute that determines whether the element should be auto-focused is present
  // Check if role="alert" is set
  if ($module.getAttribute('data-auto-focus') !== 'true' || $module.getAttribute('role') !== 'alert') {
    return
  }

  // When there are multiple notification banners present, the most relevant one should be placed
  // at the top.
  // Therefore focus the first banner on the page.
  // Check also that the page doesn't contain an error summary since an error summary should receive
  // focus instead of a notification banner.
  if (this.checkIfAnotherElementFocused()) return

  this.$module.focus()
}

/**
 * Check for other focused elements on the page
 *
 * Prevent auto-focusing the notification banner if there is another notification banner on the page which is already focused, or an error summary.
 *
 * */
NotificationBanner.prototype.checkIfAnotherElementFocused = function () {
  if (!document.activeElement) {
    return
  }

  var errorSummaryPresent = document.querySelector('[data-module="govuk-error-summary"]')

  var anotherNotificationFocused = document.activeElement.classList.contains('govuk-notification-banner')

  return errorSummaryPresent || anotherNotificationFocused
}

export default NotificationBanner

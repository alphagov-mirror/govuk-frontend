/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('notification-banner')

describe('Notification-banner', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('notification-banner', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('aria-labelledby attribute matches the title id', () => {
      const $ = render('notification-banner', examples.default)
      const ariaAttr = $('.govuk-notification-banner').attr('aria-labelledby')
      const titleId = $('.govuk-notification-banner__title').attr('id')

      expect(ariaAttr).toEqual(titleId)
    })

    it('has role=region attribute', () => {
      const $ = render('notification-banner', examples.default)
      const $component = $('.govuk-notification-banner')

      expect($component.attr('role')).toEqual('region')
    })

    it('does not have tabindex set', () => {
      const $ = render('notification-banner', examples.default)

      const $component = $('.govuk-notification-banner')
      expect($component.attr('tabindex')).toBeUndefined()
    })

    it('has data-module attribute to initialise JavaScript', () => {
      const $ = render('notification-banner', examples.default)
      const $component = $('.govuk-notification-banner')

      expect($component.attr('data-module')).toEqual('govuk-notification-banner')
    })

    it('does not have data-auto-focus attribute to focus component on page load', () => {
      const $ = render('notification-banner', examples.default)
      const $component = $('.govuk-notification-banner')

      expect($component.attr('data-auto-focus')).not.toEqual('govuk-auto-focus')
    })

    it('renders header container', () => {
      const $ = render('notification-banner', examples.default)
      const $header = $('.govuk-notification-banner__header')

      expect($header.length).toBeTruthy()
    })

    it('renders default heading level', () => {
      const $ = render('notification-banner', examples.default)
      const $title = $('.govuk-notification-banner__title')

      expect($title.get(0).tagName).toEqual('h2')
    })

    it('renders default title text', () => {
      const $ = render('notification-banner', examples.default)
      const $title = $('.govuk-notification-banner__title')

      expect($title.html().trim()).toEqual('Important')
    })

    it('renders content', () => {
      const $ = render('notification-banner', examples.default)
      const $content = $('.govuk-notification-banner__heading')

      expect($content.html().trim()).toEqual('This publication was withdrawn on 7 March 2014.')
    })
  })

  describe('custom options', () => {
    it('renders custom title', () => {
      const $ = render('notification-banner', examples['custom title'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.html().trim()).toEqual('Important information')
    })

    it('renders custom content', () => {
      const $ = render('notification-banner', examples['custom text'])
      const $content = $('.govuk-notification-banner__heading')

      expect($content.html().trim()).toEqual('This publication was withdrawn on 7 March 2014.')
    })

    it('renders custom heading level', () => {
      const $ = render('notification-banner', examples['custom title heading level'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.get(0).tagName).toEqual('h3')
    })

    it('renders custom role', () => {
      const $ = render('notification-banner', examples['custom role'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('role')).toEqual('banner')
    })

    it('renders aria-labelledby attribute matching the title id when role overridden to region', () => {
      const $ = render('notification-banner', examples['role overridden to region'])
      const ariaAttr = $('.govuk-notification-banner').attr('aria-labelledby')
      const titleId = $('.govuk-notification-banner__title').attr('id')

      expect(ariaAttr).toEqual(titleId)
    })

    it('renders custom tabindex', () => {
      const $ = render('notification-banner', examples['custom tabindex'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('tabindex')).toEqual('0')
    })

    it('renders custom title id', () => {
      const $ = render('notification-banner', examples['custom title id'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.attr('id')).toEqual('my-id')
    })

    it('has an aria-labelledby attribute matching the title id', () => {
      const $ = render('notification-banner', examples['custom title id'])
      const ariaAttr = $('.govuk-notification-banner').attr('aria-labelledby')

      expect(ariaAttr).toEqual('my-id')
    })

    it('renders data-auto-focus attribute to focus component on page load', () => {
      const $ = render('notification-banner', examples['autoFocus as true'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('data-auto-focus')).toEqual('true')
    })

    it('removes tabindex attribute so component is not focusable', () => {
      const $ = render('notification-banner', examples['tabindex as false and type as success'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('tabindex')).toBeUndefined()
    })

    it('removes data-auto-focus attribute so component is not focused on page load', () => {
      const $ = render('notification-banner', examples['auto-focus as is set to false, with type as success'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('data-auto-focus')).toBeUndefined()
    })

    it('renders classes', () => {
      const $ = render('notification-banner', examples.classes)

      const $component = $('.govuk-notification-banner')
      expect($component.hasClass('app-my-class')).toBeTruthy()
    })

    it('renders attributes', () => {
      const $ = render('notification-banner', examples.attributes)

      const $component = $('.govuk-notification-banner')
      expect($component.attr('my-attribute')).toEqual('value')
    })
  })

  describe('html', () => {
    it('renders title as escaped html when passed as text', () => {
      const $ = render('notification-banner', examples['title html as text'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.html().trim()).toEqual('&lt;span&gt;Important information&lt;/span&gt;')
    })

    it('renders title as html', () => {
      const $ = render('notification-banner', examples['title as html'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.html().trim()).toEqual('<span>Important information</span>')
    })

    it(' as escaped html when passed as text', () => {
      const $ = render('notification-banner', examples['html as text'])
      const $content = $('.govuk-notification-banner__heading')

      expect($content.html().trim()).toEqual('&lt;span&gt;This publication was withdrawn on 7 March 2014.&lt;/span&gt;')
    })

    it('renders content as html', () => {
      const $ = render('notification-banner', examples['with text as html'])
      const $contentHtml = $('.govuk-notification-banner__content')

      expect($contentHtml.html().trim()).toEqual('<h3 class="govuk-notification-banner__heading">This publication was withdrawn on 7 March 2014</h3><p class="govuk-body">Archived and replaced by the <a href="#" class="govuk-notification-banner__link">new planning guidance</a> launched 6 March 2014 on an external website</p>')
    })
  })

  describe('when success type is passed', () => {
    it('renders with appropriate class', () => {
      const $ = render('notification-banner', examples['with type as success'])

      const $component = $('.govuk-notification-banner')
      expect($component.hasClass('govuk-notification-banner--success')).toBeTruthy()
    })

    it('has role=alert attribute', () => {
      const $ = render('notification-banner', examples['with type as success'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('role')).toEqual('alert')
    })

    it('does not render aria-labelledby', () => {
      const $ = render('notification-banner', examples['with type as success'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('aria-labelledby')).toBeUndefined()
    })

    it('does not render a title id for aria-labelledby', () => {
      const $ = render('notification-banner', examples['with type as success'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('id')).toBeUndefined()
    })

    it('renders custom title id', () => {
      const $ = render('notification-banner', examples['custom title id with type as success'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.attr('id')).toEqual('my-id')
    })

    it('has the correct tabindex attribute to be focused', () => {
      const $ = render('notification-banner', examples['with type as success'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('tabindex')).toEqual('-1')
    })

    it('renders data-auto-focus attribute to focus component on page load', () => {
      const $ = render('notification-banner', examples['with type as success'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('data-auto-focus')).toEqual('true')
    })

    it('renders default success title text', () => {
      const $ = render('notification-banner', examples['with type as success'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.html().trim()).toEqual('Success')
    })
  })

  describe('when error type is passed', () => {
    it('renders with appropriate class', () => {
      const $ = render('notification-banner', examples['with type as error'])

      const $component = $('.govuk-notification-banner')
      expect($component.hasClass('govuk-notification-banner--error')).toBeTruthy()
    })

    it('has role=alert attribute', () => {
      const $ = render('notification-banner', examples['with type as error'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('role')).toEqual('alert')
    })

    it('does not render aria-labbelledby', () => {
      const $ = render('notification-banner', examples['with type as error'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('aria-labbelledby')).toBeUndefined()
    })

    it('does not render a title id for aria-labelledby', () => {
      const $ = render('notification-banner', examples['with type as error'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('id')).toBeUndefined()
    })

    it('renders custom title id', () => {
      const $ = render('notification-banner', examples['custom title id with type as error'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.attr('id')).toEqual('my-id')
    })

    it('has the correct tabindex attribute to be focused', () => {
      const $ = render('notification-banner', examples['with type as error'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('tabindex')).toEqual('-1')
    })

    it('renders data-auto-focus attribute to focus component on page load', () => {
      const $ = render('notification-banner', examples['with type as error'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('data-auto-focus')).toEqual('true')
    })

    it('renders default error title text', () => {
      const $ = render('notification-banner', examples['with type as error'])
      const $title = $('.govuk-notification-banner__title')

      expect($title.html().trim()).toEqual('Error')
    })
  })

  describe('when type that is invalid is passed', () => {
    it('has role=region attribute', () => {
      const $ = render('notification-banner', examples['with invalid type'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('role')).toEqual('region')
    })

    it('does not have tabindex set', () => {
      const $ = render('notification-banner', examples['with invalid type'])

      const $component = $('.govuk-notification-banner')
      expect($component.attr('tabindex')).toBeUndefined()
    })

    it('does not have data-auto-focus attribute to focus component on page load', () => {
      const $ = render('notification-banner', examples['with invalid type'])
      const $component = $('.govuk-notification-banner')

      expect($component.attr('data-auto-focus')).not.toEqual('govuk-auto-focus')
    })
  })
})

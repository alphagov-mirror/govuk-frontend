# Testing your GOV.UK Frontend contribution

Before you submit your contribution, you must:

- run our test files on your changes
- update our tests or add new tests, if the tests fail

If you’re not sure how to update or add tests, ask a developer to help you or [contact us](https://design-system.service.gov.uk/#support).

You should also [contact us](https://design-system.service.gov.uk/#support) if you’re **[[changing something ‘global’]]**, so we can check how it affects GOV.UK Frontend as a whole.

## Automated testing

### 1. Write new tests

You should write new tests if you’ve created a new component or feature, or added new JavaScript or Nunjucks functionality to an existing component.

#### If you created or updated a Sass mixin

In `src/govuk/helpers/grid.test.js`, add your test:

- to the existing code - if you updated a mixin
- at the end - if you added a mixin

#### If you created or updated **[[add new functionality to?]]** a component **[[component, JS or Nunjucks (+outputted HTML)]]**

In the `src/govuk/components` folder, update or add tests to:

- <COMPONENT>/<COMPONENT>.test.js - if you updated an interactive component
- <COMPONENT>/template.test.js

Where <COMPONENT> is the name of the component you updated or created.

## 2. Lint your Sass and JavaScript

Install a linter in your code editor, for example [linter-sass-lint for Atom](https://atom.io/packages/linter-sass-lint), then point it to the following config files:

- [GOV.UK Frontend’s sass-lint.yml file](https://github.com/alphagov/govuk-frontend/blob/master/config/.sass-lint.yml) to lint Sass code
- [GOV.UK’s ...](https://github.com/alphagov/styleguides/blob/master/js.md#linting) to lint JavaScript code **[[Not a config file? Do users need to install this?]]**

Make sure you fix any errors that your linter reports.

## 3. Run the tests

Run on the command line:

```
npm test
```

If a test fails, you’ll need to fix it.

## 4. Check your design

Check that your design is visually consistent with the rest of GOV.UK Frontend, and that it works:

- in [recommended browsers](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in)
- with [recommended assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test)
- in [Internet Explorer 8](/docs/installation/supporting-internet-explorer-8.md), 9 and 10, although components do need to look perfect
- when your users [override colours in Windows, Firefox and Chrome](https://accessibility.blog.gov.uk/2018/08/01/supporting-users-who-change-colours-on-gov-uk/)

## 5. Add examples to our 'review app'

[Deploy GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/blob/master/docs/contributing/deploying.md), then open the 'review app' **[[addurl?]]** and:

- check your changes look right and work correctly
- add an example of your updated or new component

## 6. Create a pull request

In the pull request description, tell us:

- what tests you've run
- what tools you've used to test with **[[visual?]]**

You should also include screenshots if you can.

Do the following if GitHub shows that the build failed when you commit your changes.

1. Select the '**X**' next to your commit number.
2. Select **Details**.
3. Under **Build Failed**, select **The build**.
4. Wait for the build log to appear.
5. Use the log to find and fix your code.

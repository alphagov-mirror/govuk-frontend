# Test your GOV.UK Frontend contribution

Before you submit your contribution, you should:

- check your changes look right and behave correctly
- test in supported browsers and assistive technology
- run our automated tests, and update tests or add new tests if our tests fail

[Contact us](https://design-system.service.gov.uk/#support) for help if either:

- you can’t do some of the checks or tests
- your contribution might affect other parts of GOV.UK Frontend

## 1. Lint your Sass and JavaScript

Do the following to lint your Sass code.

1. Install a linter in your code editor, for example [linter-sass-lint for Atom](https://atom.io/packages/linter-sass-lint).
2. Point the linter to [GOV.UK Frontend’s `.sass-lint.yml` file](https://github.com/alphagov/govuk-frontend/blob/master/config/.sass-lint.yml).

To lint your JavaScript code, install [Javascript Standard Style](https://standardjs.com/) and either:

- [add it to your text editor](https://standardjs.com/#are-there-text-editor-plugins)
- [run it from the command line](https://standardjs.com/#usage)

Make sure you fix any errors that the linters report.

## 2. Check your changes in our ‘review app’

In your project folder, run `npm start`, then go to `localhost:3000` in your browser to open our 'review app'.

Check that:

- the examples in the review app look right and behave correctly with your changes
- your design is consistent with the rest of GOV.UK Frontend

## 3. Test in supported browsers and assistive technology

You should test that your contribution works:

- in [recommended browsers](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in)
- with [recommended assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test)
- in [Internet Explorer 8](/docs/installation/supporting-internet-explorer-8.md), 9 and 10 - components do not need to look perfect
- when your users [override colours in Windows, Firefox and Chrome](https://accessibility.blog.gov.uk/2018/08/01/supporting-users-who-change-colours-on-gov-uk/)

## 4. Run our automated tests

In your project folder, run `npm start` to run our automated tests.

If a test fails, you should check your code for any errors, then fix any tests you need to.

## 5. Write new tests

You should write new tests if you’ve done any of the following:

- created a new component
- changed or added to a component’s JavaScript code
- changed or added to a component’s Nunjucks macro
- created or updated a Sass mixin or function

If you’re not sure how to write new tests, ask a developer to help you or [contact us](https://design-system.service.gov.uk/#support).

### If you created a component

Create the following files in the `src/govuk/components` folder:

- `<COMPONENT>/<COMPONENT>.test.js` - to test functionality
- `<COMPONENT>/template.test.js` - to test the Nunjucks macro

Where `<COMPONENT>` is the name of the component you created.

You can use the existing files in the `src/govuk/components` folder as templates for your new files.

### If you changed or added to a component

In the `src/govuk/components` folder, update or add tests to:

- `<COMPONENT>/<COMPONENT>.test.js` - if you updated functionality
- `<COMPONENT>/template.test.js` - if you updated the Nunjucks macro

Where `<COMPONENT>` is the name of the component you changed or added to.

### If you created or updated a Sass mixin or function

Update or add tests In `src/govuk/<ELEMENT>/grid.test.js`, where `<ELEMENT>` is the [element you’re creating or updating a mixin for](https://github.com/alphagov/govuk-frontend/blob/master/src/govuk/README.md).

## 6. Update our snapshot tests

If your component uses another component, one of our 'snapshot tests' may fail. Snapshot tests compare a component's current markup with a previously stored version.

If a snapshot test fails, do the following.

1. Check that the component's new markup is correct.
2. Run `npm test -- -u src/govuk/components/<COMPONENT>` to update our snapshot test with the new markup.
3. Commit the updated file in the `/src/govuk/components/<COMPONENT>/__snapshots__/` folder.
4. In the commit message, tell us you're updating the snapshot file and why.

Replace `<COMPONENT>` with the name of the component you changed.

## 7. Tell us what you’ve checked

When you create the pull request for your contributions, list what you’ve tested and checked in the pull request description.

If your contribution changes how a component looks, include before and after screenshots if you can.

### If GitHub shows the build failed

1. Select the '**X**' next to your commit number.
2. Select **Details**.
3. Under **Build Failed**, select **The build**.
4. Wait for the build log to appear.
5. Use the information in the build log to find and fix your code.

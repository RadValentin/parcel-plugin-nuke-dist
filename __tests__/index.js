const nukeDistPlugin = require('../index.js');

jest.spyOn(global.console, 'log')

test('plugin should not throw', () => {
  nukeDistPlugin();

  expect(console.log).toBeCalledWith('Hello Parcel');
});
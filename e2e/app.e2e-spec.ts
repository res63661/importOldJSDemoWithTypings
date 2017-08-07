import { ImportOldJsDemoPage } from './app.po';

describe('import-old-js-demo App', function() {
  let page: ImportOldJsDemoPage;

  beforeEach(() => {
    page = new ImportOldJsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

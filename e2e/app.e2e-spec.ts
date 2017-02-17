import { SvenhabexPage } from './app.po';

describe('svenhabex App', function() {
  let page: SvenhabexPage;

  beforeEach(() => {
    page = new SvenhabexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Angular4VsmarketplacePage } from './app.po';

describe('angular4-vsmarketplace App', () => {
  let page: Angular4VsmarketplacePage;

  beforeEach(() => {
    page = new Angular4VsmarketplacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

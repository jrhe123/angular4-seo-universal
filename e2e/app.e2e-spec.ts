import { Ng4SeoPage } from './app.po';

describe('ng4-seo App', () => {
  let page: Ng4SeoPage;

  beforeEach(() => {
    page = new Ng4SeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

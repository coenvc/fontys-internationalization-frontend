import { ZienFrontendPage } from './app.po';

describe('zien-frontend App', () => {
  let page: ZienFrontendPage;

  beforeEach(() => {
    page = new ZienFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

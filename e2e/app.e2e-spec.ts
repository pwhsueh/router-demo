import { RouteDemoPage } from './app.po';

describe('route-demo App', () => {
  let page: RouteDemoPage;

  beforeEach(() => {
    page = new RouteDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

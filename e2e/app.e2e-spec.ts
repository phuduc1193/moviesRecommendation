import { MoviesRecommendationPage } from './app.po';

describe('movies-recommendation App', function() {
  let page: MoviesRecommendationPage;

  beforeEach(() => {
    page = new MoviesRecommendationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

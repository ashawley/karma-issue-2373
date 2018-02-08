'use strict';

describe('style/index', function() {

  beforeEach(function() {

    jasmine.getStyleFixtures().fixturesPath = 'base/app';

    loadStyleFixtures('dist/style/index.css');

  });

  describe('ui.bootstrap hack', function() {

    it('nav', function() {
      setFixtures('<div class="nav"/>');
      expect($('.nav')).toHaveCss({cursor: 'pointer'});

    });

    it('pagination', function() {
      setFixtures('<div class="pagination"/>');
      expect($('.pagination')).toHaveCss({cursor: 'pointer'});

    });

    it('carousel', function() {
      setFixtures('<div class="carousel"/>');
      expect($('.carousel')).toHaveCss({cursor: 'pointer'});

    });

    it('panel-title', function() {
      setFixtures('<div class="panel-title"><a/></div>');
      expect($('.panel-title a')).toHaveCss({cursor: 'pointer'});

    });

  });

});

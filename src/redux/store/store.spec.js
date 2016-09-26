import { expect } from 'chai';
// import { spy } from 'sinon';

import configureStore from './configureStore';


describe('Store', () => {
  describe('Code', () => {
    it('should have logs and code state', () => {
      const store = configureStore();
      let state = store.getState();

      expect(state.values).to.be.ok;
    });

    // it('should parse the html code without errors', (done) => {
    //   const store = configureStore();
    //   const htmlSource = '<div>Test</div>';
    //   const js = '$("div").addClass("test");';
    //   const htmlOutput = '<div class="test">Test</div>';
    //
    //   store.dispatch(logs.setPreserveLogs(true));
    //   store.dispatch(code.setJs(js));
    //   store.dispatch(code.setHtmlSource(htmlSource));
    //
    //   store.subscribe(() => {
    //     const state = store.getState();
    //     expect(state.code.htmlOutput).equals(htmlOutput);
    //     expect(state.logs.logs.length).equals(0);
    //     done();
    //   });
    //
    //   store.dispatch(code.run());
    // });
  });
});

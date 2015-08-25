'use strict';
var listPaginator = require('../src/list-paginator');

describe('#ListPaginator', function () {
  beforeEach(function () {
    var document = new Object();
  });
  describe('#Existing', function () {  
    it('Check if ListPaginator exist in root', function () {
      var options = {
        listID: 'list-example',
        tagElement: 'li',
        totalInPage: 3
      };
      var paginator  = new listPaginator.ListPaginator(options);
      var sum = paginator.sumNumber(3,4);
      expect(sum).toBe(7);
      //expect(3).toBe(3);
  
    });
  });
});

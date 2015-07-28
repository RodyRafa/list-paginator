(function(root) {
  'use strict';
  
  var listPaginator = function (options) {
    this.prepare(options);
    this.showPage(1);
  };

  listPaginator.prototype.prepare = function (options) {
    this.list = document.getElementById(options.listID);
    this.arrElements = document.getElementsByTagName(options.tagElement);
    this.totalShow = options.totalInPage;
  };

  listPaginator.prototype.showPage = function (page) {
    this.hideAll();
  };


  listPaginator.prototype.hideAll = function () {
    for (var i =0; i< this.arrElements.length; i++) {
      console.log(i);
    }; 
  };

  root.listPaginator = listPaginator;
  
})(window);

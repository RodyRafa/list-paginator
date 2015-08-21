(function(root) {
  'use strict';
  
  var ListPaginator = function (options) {
    this.mountController(options);
    this.prepare(options);
    this.currentPage = 1;
    this.showPage(this.currentPage);
    this.bind();
  };

  ListPaginator.prototype.mountController = function (options) {
    var controllers = document.getElementsByClassName('controler-list');
    for(var i=0; i< controllers.length; i++) {
      if(controllers[i].getAttribute('data-list') === options.listID) {
        this.controller = controllers[i];
        break;
      }
    }

    var arrowRight = document.createElement('SPAN');
    var textArrorRight = document.createTextNode('Voltar');
    arrowRight.setAttribute('class', 'right');
    arrowRight.appendChild(textArrorRight);    
    
    var arrowLeft = document.createElement('SPAN');
    var textArrorLeft = document.createTextNode('Próximo');
    arrowLeft.setAttribute('class', 'left');
    arrowLeft.appendChild(textArrorLeft);    

    this.infoController = document.createElement('SPAN');
    this.infoController.setAttribute('class', 'info');

    this.controller.appendChild(arrowRight);
    this.controller.appendChild(this.infoController);
    this.controller.appendChild(arrowLeft);
  };

  ListPaginator.prototype.addEvent = function (el, evnt, funct) {
    if(el.attachEvent) {
      return el.attachEvent('on'+evnt, funct);
    } else {
      return el.addEventListener(evnt, funct, false);
    }
  };

  ListPaginator.prototype.prepare = function (options) {
    this.list = document.getElementById(options.listID);
    this.arrElements = document.getElementsByTagName(options.tagElement);
    this.totalShow = options.totalInPage;
    this.totalPages = Math.round(this.arrElements.length / this.totalShow); 
  };

  ListPaginator.prototype.showPage = function (page) {
    this.hideAll();
    this.currentPage = page;
    var len = page * this.totalShow; 
    for(var i = (page -1) * this.totalShow ; i < len; i++) {
      if(this.arrElements[i]) {
        this.arrElements[i].style.display = "block";
      }
    } 
    var textInfo = page+' / ' +this.totalPages;
    this.infoController.innerHTML = textInfo; 
  };

  ListPaginator.prototype.hideAll = function () {
    for(var i =0; i< this.arrElements.length; i++) {
      this.arrElements[i].style.display = "none";
    }
  };

  ListPaginator.prototype.bind = function () {
    var arrowRight = this.controller.getElementsByClassName('right')[0];
    var arrowLeft = this.controller.getElementsByClassName('left')[0];

    this.addEvent(arrowRight, 'click', this.prevPage.bind(this));
    this.addEvent(arrowLeft, 'click', this.nextPage.bind(this));
  };

  ListPaginator.prototype.prevPage = function () {
    var prevPage = this.currentPage - 1;
    if(prevPage <= 0 ) {
      //
    } else {
      this.showPage(prevPage);
    }
  };

  ListPaginator.prototype.nextPage = function () {
    var nextPage = this.currentPage + 1;
    if(nextPage > this.totalPages) {
      //nada
    } else {
      this.showPage(nextPage);
    }
  };

  root.ListPaginator = ListPaginator;
  
})(window);

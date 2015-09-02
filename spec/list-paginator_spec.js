describe('ListPaginator', function() {
  it('Window able to use', function() {
    expect(window).toBeDefined();
  });
   
  it('Inicied', function() {
    expect(window.ListPaginator).toBeDefined();
  });
  
  describe('#Init Paginator', function () {
    $('body').html('<ul id="list-example"> <li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li> <li>6</li> <li>7</li> <li>8</li> <li>9</li> <li>10</li> <li>11</li> <li>12</li> <li>13</li> <li>14</li> <li>15</li> <li>16</li> <li>17</li> <li>18</li> <li>19</li> <li>20</li> <li>21</li> <li>22</li> </ul> <div class="controler-list" data-list="list-example"> </div>')
     var options = {
      listID: 'list-example',
      tagElement: 'li',
      totalInPage: 3
    };
    var paginator  = new ListPaginator(options);

    describe('#MountController', function () {
      it('Has right Arrow',  function () {
        var arrowR = document.getElementsByClassName('right');
        expect(arrowR).toBeDefined();
      });
      it('Has left Arrow',  function () {
        var arrowL = document.getElementsByClassName('left');
        expect(arrowL).toBeDefined();
      });
    });
  });
});



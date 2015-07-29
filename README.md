# list-paginator
Is a js for pagination of some kind of list (table / ul / ol)...

##Usage
* Make the object with this params

```
var options = {
  listID: 'list-example',
  tagElement: 'li',
  totalInPage: 5
};
var paginator  = new ListPaginator(options);
```

- ```listID``` : The id of the list tag.
- ```tagElement``` : Tag name of the elements in the list
- ```totalInPage``` : Total of itens you want show in the page

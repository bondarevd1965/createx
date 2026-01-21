const relateditems = document.querySelector('.events_items');
const relateditem = document.querySelectorAll('.events_item');
const listViewBtn = document.getElementById('list-view');
const gridViewBtn = document.getElementById('grid-view');

listViewBtn.addEventListener('click', function () {
  console.log('list view');
  //уберем класс grid-view у элементов related_items и related_item
  //listViewBtn.style.fill = "#FF3F3A;";
  //gridViewBtn.style.fill = "#424551";
  relateditems.classList.remove("grid-view");
  relateditem.forEach((item) => {
    item.classList.remove("grid-view");
  });
});


gridViewBtn.addEventListener('click', function () {
  console.log('grid-view');
  //добавим класс grid-view к элементам related_items и related_item
  //listViewBtn.style.fill = "#424551";
  //gridViewBtn.style.fill = "#FF3F3A;";
  relateditems.classList.add("grid-view");
  relateditem.forEach((item) => {
    item.classList.add("grid-view");
  });
});
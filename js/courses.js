const filteritems = document.querySelectorAll('.courses_nav li a');
const coursitems = document.querySelectorAll('.courses_item');
const searchField = document.getElementById('search_fld');
const searchBtn = document.getElementById('search_btn');
const searchResult = document.querySelector('.search_result');

filteritems.forEach((item) => {
  item.onclick = () => {
    filteritems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    let countItems = 0;

    coursitems.forEach((crs) => {
      if (
        filterText === 'all' ||
        crs.querySelector('.featured_details .featured_item_category').textContent.toLowerCase() === filterText
      ) {
        crs.style.display = 'block';
        countItems++;
      } else {
        crs.style.display = 'none';
      }
    });

    if (countItems > 0) {
      searchResult.innerHTML = `Courses was found: ${countItems}`;
    } else {
      searchResult.innerHTML = "Courses not found";
    }
    console.log(filterText, searchResult.innerText);
  }

});

searchBtn.addEventListener('click', function () {
  console.log('Этот код тоже сработает при клике.');
  const searchText = searchField.value.toLowerCase();
  console.log(searchField.value);

  let countItems = 0;

  coursitems.forEach((crs) => {
    if (
      crs.querySelector('.featured_details .featured_item_title').textContent.toLowerCase().includes(searchText)
    ) {
      crs.style.display = 'block';
      countItems++;
    } else {
      crs.style.display = 'none';
    }
  });

  searchField.value = "";

  if (countItems > 0) {
    searchResult.innerHTML = `Courses was found: ${countItems}`;
  } else {
    searchResult.innerHTML = "Courses not found";
  }
  console.log(searchText, searchResult.innerText);
});
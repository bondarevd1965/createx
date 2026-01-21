const blogCatItems = document.querySelectorAll('.blog_cat_item');
const blogitems = document.querySelectorAll('.blog_item');
const searchResult = document.querySelector('.search_result');


blogCatItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    console.log("You move mouse over item ");

    blogCatItems.forEach((el) => {
      el.classList.remove('active')
    });

    item.classList.add('active');

  });
});

blogCatItems.forEach((item) => {
  item.onclick = () => {
    blogCatItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.trim().toLowerCase();

    let countItems = 0;

    blogitems.forEach((blg) => {
      if (
        filterText === 'all' ||
        blg.querySelector('.blog_item_category').textContent.trim().toLowerCase().includes(filterText)
      ) {
        blg.style.display = 'block';
        countItems++;
      } else {
        blg.style.display = 'none';
      }
    });

    if (countItems > 0) {
      searchResult.innerHTML = `Blogs was found: ${countItems}`;
    } else {
      searchResult.innerHTML = "Blogs not found";
    }
    console.log(filterText);
  }

});

const searchCat = document.getElementById('category');
const searchFld = document.getElementById('search_fld');
const searchBtn = document.getElementById('search_btn');

searchBtn.addEventListener("click", function () {
  console.log("You click search button");
  let blogCategory = searchCat.value;
  if (blogCategory) { blogCategory = blogCategory.toLowerCase(); } else { blogCategory = ""; }
  let blogName = searchFld.value;
  if (blogName) { blogName = blogName.toLowerCase(); } else { blogName = ""; }

  let countItems = 0;

  blogitems.forEach((blg) => {
    if (
      (blogCategory === 'all themes' ||
        blg.querySelector('.blog_item_summary').textContent.trim().toLowerCase().includes(blogCategory)) &&
      (blogName === '' ||
        blg.querySelector('.blog_item_title').textContent.trim().toLowerCase().includes(blogName))
    ) {
      blg.style.display = 'block';
      countItems++;
    } else {
      blg.style.display = 'none';
    }
  });

  if (countItems > 0) {
    searchResult.innerHTML = `Blogs was found: ${countItems}`;
  } else {
    searchResult.innerHTML = "Blogs not found";
  }
  console.log(blogCategory);
  console.log(blogName);
});
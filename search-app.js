const searchInput = document.querySelector('#search-input');
const allProductNameCollection = document.querySelectorAll('.name');

searchInput.addEventListener('keyup', (event) => {
  const searchQuery = event.target.value.toLowerCase();
  for (let i = 0; i < allProductNameCollection.length; i++) {
    // console.log(allProductNameCollection[i].textContent);
    const currentProduct =
      allProductNameCollection[i].textContent.toLowerCase();
    if (currentProduct.includes(searchQuery)) {
      allProductNameCollection[i].style.display = 'block';
    } else {
      allProductNameCollection[i].style.display = 'none';
    }
  }
});

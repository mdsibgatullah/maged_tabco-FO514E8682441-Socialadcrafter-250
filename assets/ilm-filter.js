const ilmFilterTitle = document.querySelectorAll('.ilm_filter_title');

ilmFilterTitle.forEach(function(item) {
  item.addEventListener('click', function() {
    item.parentElement.classList.toggle('deActive');
  });
});
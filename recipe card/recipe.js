document.querySelector('.toggle-ingredients').addEventListener('click', function () {
    const list = document.getElementById('ingredient-list');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
    list.hidden = isExpanded;
    this.setAttribute('aria-expanded', !isExpanded);
    this.textContent = isExpanded ? 'Show' : 'Hide';
  });
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

//Menu hamburguer

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("open", !isExpanded);
  });
  

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Filtro de produtos por categria
const categoryFilter = document.querySelector("#category-filter");
const productCards = document.querySelectorAll(".product-card");
const emptyState = document.querySelector("#empty-state");

if (categoryFilter) {
  categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;
    let visibleProducts = 0;

    productCards.forEach((card) => {
      const shouldShow = selectedCategory === "todos" ||
        card.dataset.category === selectedCategory;
      card.hidden = !shouldShow;
      if (shouldShow) visibleProducts += 1;
    });

    if (emptyState) emptyState.hidden = visibleProducts > 0;
  });
}

// Contador itens do carrinho
const addButtons = document.querySelectorAll(".add-cart");
const cartCount = document.querySelector("#cart-count");
let itemCount = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    if (cartCount) cartCount.textContent = String(itemCount);
    button.textContent = "Adicionado ";
    window.setTimeout(() => {
      button.textContent = "Adicionar à lista";
    }, 1200);
  });
});

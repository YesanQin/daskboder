export const PRODUCTS_LIST = {
  productsList: "[data-test-id^='id-']",
  productsNames: "[data-test-id='name']",
  dialogProductTypeInput: "[data-test-id='dialog-product-type']",
  createProductBtn: "[data-test-id='add-product']",
  searchProducts: "[placeholder='Search Products...']",
  emptyProductRow: "[data-test-id='skeleton']",
  productImage: "[class='MuiAvatar-img']",
  imageIcon: '[data-test-id="imageIcon"]',
  tableCellAvatar: "[data-test-id='table-cell-avatar']",
  productRowElements: {
    name: '[data-test-id="name"]',
    type: '[data-test-id="product-type"]',
    availability: '[data-test-id="availability"]',
    price: '[data-test-id="price"]',
  },
  tableHeaders: {
    name: "[data-test-id='col-name-header']",
    type: "[data-test-id='col-type-header']",
    availability: "[data-test-id='col-availability-header']",
    price: "[data-test-id='col-price-header']",
  },
  showFiltersButton: '[data-test-id="show-filters-button"]',
  filters: {
    filterOption: '[data-test-id="filter-option"]',
    productsOutOfStockOption: '[data-test-id="filter-option-OUT_OF_STOCK"]',
    filterBy: {
      category: '[data-test-id="filter-group-active-categories"]',
      collection: '[data-test-id="filter-group-active-collections"]',
      productType: '[data-test-id="filter-group-active-productType"]',
      stock: '[data-test-id="filter-group-active-stock"]',
      channel: '[data-test-id="filter-group-active-channel"]',
      currency: '[data-test-id="filter-group-active-currency"]',
      currencySpecific: {
        THB: '[data-test-id="filter-option-THB"]',
        PLN: '[data-test-id="filter-option-PLN"]',
        USD: '[data-test-id="filter-option-USD"]',
      },
    },
    filterField: {
      filterField: '[data-test-id*="filter-field"]',
      category: '[data-test-id="filter-field-categories"]',
      collection: '[data-test-id="filter-field-collections"]',
      productType: '[data-test-id="filter-field-productType"]',
      stock: '[data-test-id="filter-field-stock"]',
      channel: '[data-test-id="filter-field-channel"]',
    },
    filterBySearchInput: '[data-test-id="filter-field-autocomplete-input"]',
  },
  nextPageButton: "[data-test-id='button-pagination-next']",
  previousPagePagination: "[data-test-id='button-pagination-back']",
  resultsOnPageSelect: "[data-test-id='PaginationRowNumberSelect']",
  rowNumberOption: "[data-test-id='rowNumberOption']",
};

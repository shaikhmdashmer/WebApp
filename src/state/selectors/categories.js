export const getAllCategories = (state) => state.categoriesReducer.data;

export const getAllTabsContainer = (state) =>
  state.categoriesReducer.selectAllTabsContainers;

export const getRedirectLandingHome = (state) =>
  state.categoriesReducer.redirectlandinghome;

export const getHomeLevelDetails = (state) =>
  state.categoriesReducer.homeleveldetails;

export const getSelectImgData = (state) =>
  state.categoriesReducer.selectImgData;

export const getSelectVideoData = (state) =>
  state.categoriesReducer.selectVideodata;

export const getSelectEventsAffairsData = (state) =>
  state.categoriesReducer.selectEventsAffairsdata;

export const getSelectPdfData = (state) =>
  state.categoriesReducer.selectPdfData;

export const getSelectPptData = (state) =>
  state.categoriesReducer.selectPptData;

export const getSelectDocData = (state) =>
  state.categoriesReducer.selectDocData;

export const getSelectXlsData = (state) =>
  state.categoriesReducer.selectXlsData;

export const getSelectedCategory = (state) =>
  state.categoriesReducer.selectedCategory;

export const getSelectedCategoryPrev = (state) =>
  state.categoriesReducer.selectedCategoryPrev;

export const getSelectedCategoryLevel2 = (state) =>
  state.categoriesReducer.selectedCategoryLevel2;

export const getSelectedCategoryLevel3 = (state) =>
  state.categoriesReducer.selectedCategoryLevel3;

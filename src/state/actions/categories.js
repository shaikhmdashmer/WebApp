export const setCategories = (data) => ({
  type: "SET_CATEGORIES",
  data,
});

export const setRedirectLandingHome = (data) => ({
  type: "SET_REDIRECT_LANDING_HOME",
  data,
});

export const setAllTabsContsiner = (data) => ({
  type: "SET_ALL_TABS_CONTAINER",
  data,
});

export const setHomeLevelDetails = (data) => ({
  type: "SET_HOME_LEVEL_DETAILS",
  data,
});

export const setImagesData = (data) => ({
  type: "SET_IMG_DATA",
  data,
});

export const setVideosData = (data) => ({
  type: "SET_VIDEO_DATA",
  data,
});

export const setEventsAffairsData = (data) => ({
  type: "SET_EVENTSAFFAIRS_DATA",
  data,
});

export const setPDFsData = (data) => ({
  type: "SET_PDF_DATA",
  data,
});

export const setPPTsData = (data) => ({
  type: "SET_PPT_DATA",
  data,
});

export const setDOCsData = (data) => ({
  type: "SET_DOC_DATA",
  data,
});

export const setXLSsData = (data) => ({
  type: "SET_XLS_DATA",
  data,
});

export const setSelectedCategory = (data) => ({
  type: "SET_SELECTED_CATEGORY",
  data,
});
export const setSelectedCategoryPrev = (data) => ({
  type: "SET_SELECTED_CATEGORY_PREV",
  data,
});

export const setSelectedCategoryLevel2 = (data) => ({
  type: "SET_SELECTED_CATEGORY_LEVEL2",
  data,
});

export const setSelectedCategoryLevel3 = (data) => ({
  type: "SET_SELECTED_CATEGORY_LEVEL3",
  data,
});

export const setCheckboxFilter = (brand) => ({
  type: "SET_CHECKBOX_FILTER",
  brand,
});

export const removeCheckboxFilter = (brand) => ({
  type: "REMOVE_CHECKBOX_FILTER",
  brand,
});

export const clearFilters = () => ({
  type: "CLEAR_FILTERS",
});

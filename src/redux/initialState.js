export const initialState = () => {
  return {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  };
};

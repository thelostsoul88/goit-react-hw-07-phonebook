export const selectContact = state => state.contacts;
export const selectFilter = state => state.filter;

export const visible = state => {
  const { items } = selectContact(state);
  const handleFilter = selectFilter(state);
  const contacts = items.filter(e =>
    e.name.toLowerCase().includes(handleFilter.toLowerCase())
  );
  return contacts;
};

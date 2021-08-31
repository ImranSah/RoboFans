const SearchBox = ({ field }) => {
  return (
    <input
      onChange={field}
      className="bg-light-green pa2 ba"
      style={{ marginBottom: `20px` }}
    />
  );
};

export default SearchBox;

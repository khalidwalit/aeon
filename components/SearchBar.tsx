const SearchBar: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search documentation..."
      className="w-[300px] px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
    />
  );
};

export default SearchBar;

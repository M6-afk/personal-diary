const Header = ({ onAdd }) => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">My Diary 📖</h1>
      </div>
      <button className="btn btn-primary" onClick={onAdd}>
        Add Entry
      </button>
    </div>
  );
};

export default Header;

import EntryCard from "./EntryCard";

const EntryList = ({ entries, onSelect }) => {
  if (entries.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500">
        <p className="text-xl">No entries yet. Add your first one! 📝</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {entries.map((entry, index) => (
        <EntryCard key={index} entry={entry} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default EntryList;
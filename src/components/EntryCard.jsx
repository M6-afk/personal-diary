const EntryCard = ({ entry, onSelect }) => {
  return (
    <div
      className="card bg-base-100 shadow-md cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => onSelect(entry)}
    >
      <figure>
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p className="text-sm text-gray-500">{entry.date}</p>
      </div>
    </div>
  );
};

export default EntryCard;

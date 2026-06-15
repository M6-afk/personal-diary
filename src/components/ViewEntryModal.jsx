const ViewEntryModal = ({ entry, onClose }) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-xl mb-2">{entry.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{entry.date}</p>
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p>{entry.content}</p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEntryModal;

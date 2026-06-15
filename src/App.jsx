import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("diaryEntries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  const addEntry = (newEntry) => {
    const updated = [...entries, newEntry];
    setEntries(updated);
    localStorage.setItem("diaryEntries", JSON.stringify(updated));
  };

  const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-base-200">
      <Header onAdd={() => setShowAddModal(true)} />
      <EntryList entries={sorted} onSelect={setSelectedEntry} />
      {showAddModal && <AddEntryModal entries={entries} onAdd={addEntry} onClose={() => setShowAddModal(false)} />}
      {selectedEntry && <ViewEntryModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />}
    </div>
  );
};

export default App;
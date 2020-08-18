import React from 'react';
import './App.css';
import { useObserver } from 'mobx-react-lite'
import { NewNoteInput } from './NewNoteInput';
import { NotesStore } from './NotesStote';
import { useRootStore } from './RootStateContext';


function App() {
	const { notesStore } = useRootStore()
	return useObserver(() => (
		<>
			<NewNoteInput addNote={notesStore.addNote}/>
			<hr />
			<ul>
				{notesStore.notes.map(note => <li key={note}>{note}</li>)}
			</ul>
			<hr />
			<button onClick={() => { notesStore.loadNotes() }}>Save</button>
		</>
	)
	);
}

export default App;

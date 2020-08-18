import React from 'react'
import { NotesStore } from './NotesStote'

type NewNoteInputProps = {
	addNote: NotesStore["addNote"]
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
	const [note, setNote] = React.useState("")

	const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value)
	}

	const handeAddNote = () => {
		addNote(note)
		setNote("")
	}

	return (
		<div>
			<input
				onChange={updateNote}
				value={note}
				type="text"
				name="note"
				placeholder="Add note"
			/>
			<button onClick={handeAddNote}>ADD</button>
		</div>
	)
}
import { observable, action } from 'mobx'
import { getNotes } from './api'

export class NotesStore {
	@observable notes: string[] = []

	@action
	loadNotes = () => {
		getNotes().then(notes => {
			debugger
			let notesArr = notes.data.map(note => note.title);
			this.notes = notesArr
		})	
		
	}


	@action
	addNote = (note: string) => {
		this.notes.push(note)
	}
}
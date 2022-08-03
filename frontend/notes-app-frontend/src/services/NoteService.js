import axios from 'axios';
const NOTE_BASE_API_URL = 'http://localhost:8080/api/notes/';


class NoteService{

    getAllNotes(){
        return axios.get(NOTE_BASE_API_URL);
    }

    createNote(note){
        return axios.post(NOTE_BASE_API_URL, note);
    }

    getNoteById(id){

        return axios.get(NOTE_BASE_API_URL, id);
    }


}
export default new NoteService();
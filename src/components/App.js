import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Note from "./notes/Note";
import Card from "./cards/Card";
import contacts from "./database/contacts";
import notes from "./database/notes";
import Hello from "./login/Hello";
import Login from "./login/Login";
import Form from "./login/Form";
import CreateArea from "./notes/CreateArea";

var isLoggedIn = true;
var userIsRegistered = false;
const currentTime = new Date().getHours();

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            nameCard={contact.name}
            imgCard={contact.img}
            telCard={contact.tel}/>
    );
}
function updateTime() {
    let time = new Date().toLocaleTimeString();
}

function App() {

    //     const state = useState(); const [red,green,blue] = [9,12,227];

    let now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(updateTime, 1000);

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [
                ...prevNotes,
                newNote
            ];
        })
    }
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="">

            <div className=""><Header/></div>

            <div className="eeu-min-height">
                <div className="container text-center mt-4">
                    <h3 className="eeu-h3">Developers Team</h3>
                    <h6>{time}</h6>
                </div>
                <div className="container ">
                    
                   <div className="d-flex flex-column flex-md-row justify-content-center align-item-start flex-wrap">
                        {contacts.map(createCard)}

                   </div> 
                </div>

                <div className="container mt-4 text-center">
                    <h4 className="eeu-h4">Planificare</h4>
                </div>

                <div className="container">
                    <CreateArea onAdd={addNote}/>
                </div>

                <div className="container mb-5">
                   <div className="d-flex flex-column flex-md-row justify-content-start align-item-start flex-wrap">
                        {notes.map((noteItem, index) => {
                                return (
                                    <Note
                                        key={index}
                                        id={index}
                                        title={noteItem.title}
                                        content={noteItem.content}
                                        onDelete={deleteNote}/>
                                );
                            })
                        }
                   </div>

                </div>
            </div>

            <div className=""><Footer/></div>

        </div>
    );
}

export default App;
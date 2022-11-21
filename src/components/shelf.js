import ViewBox from "./page";
import Axios from "axios";
import { useEffect, useState } from "react";

function Shelf() {
    const [notes, setNotes] = useState([]);
    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        Axios.get("http://localhost:1410/notes").then((response) => {
            setNotes(response.data);
            setFetched(true);
        });
    }, []);
    if (fetched) {
        return (
            <div className="diary-shelf">
                {notes.map((note) => {
                    return (
                        <ViewBox
                            title={note.title}
                            body={note.body}
                            key={note._id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Shelf;

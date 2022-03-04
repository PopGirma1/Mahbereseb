import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Loader, Card, CardContent, Label } from 'semantic-ui-react';
import { Button, Link} from "@mui/material";


const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteNote();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteNote = async () => {
        const noteId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container">
            {isDeleting
                ? <Loader active />
                : <>
                <div className='displayedData'>
                    <Card  className='infoContainer'> <Label>First Name</Label> <CardContent> {note.firstName} </CardContent></Card>
                    <Card  className='infoContainer'> <Label>Last Name</Label><CardContent> {note.lastName} </CardContent></Card>
                    <Card  className='infoContainer'> <Label>User Name</Label><CardContent> {note.userName} </CardContent></Card>
                    <Card  className='infoContainer'> <Label>Email</Label><CardContent> {note.email} </CardContent></Card>
                    <Card  className='infoContainer'> <Label>Phone Number</Label><CardContent> {note.phoneNumber} </CardContent></Card>
                </div>
                 <div className='backAndDelete'>
                <Link href='/viewAccount/Index'>
                <a> <Button  variant="contained"> back </Button></a>
                </Link>
                <Button type="submit"  onClick={open} className="deleteBtn"> Delete Account </Button>
                 </div>
                </>
            }

               <Confirm
                style={{height:"150px",marginTop:"20%"}}
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
                content='Are you sure you want to delete your Account ?'
                />
        </div>
    )
}

Note.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default Note;
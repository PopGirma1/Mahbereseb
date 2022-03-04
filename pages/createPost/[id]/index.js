import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Loader, Card, CardContent, Label } from 'semantic-ui-react';
import { Button, Link} from "@mui/material";


const Post = ({ post }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deletePost();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deletePost = async () => {
        const postId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/createpost/${postId}`, {
                method: "Delete"
            });

            router.push("/post");
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
                    <Card  className='infoContainer'> <Label>Title</Label> <CardContent> {post.title} </CardContent></Card>
                    <Card  className='infoContainer'> <Label>Descrption</Label><CardContent> {post.descrption} </CardContent></Card>
                </div>
                 <div className='backAndDelete'>
                <Link href='/post'>
                <a> <Button  variant="contained"> back </Button></a>
                </Link>
                <Button type="submit"  onClick={open} className="deleteBtn"> Delete Post </Button>
                 </div>
                </>
            }

               <Confirm
                style={{height:"150px",marginTop:"20%"}}
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
                content='Are you sure you want to delete your Post ?'
                />
        </div>
    )
}

Post.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/createpost/${id}`);
    const { data } = await res.json();

    return { post: data }
}

export default Post;
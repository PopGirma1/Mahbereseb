import {Card} from "semantic-ui-react"
import { Button } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddIcon from '@mui/icons-material/Add';

export default function YourPages(){

    return (
<div className="pageConatiner">

        <div className="createPage">
            <div className="yourPageCard">
            <Button type="submit" variant="contained" fullWidth className="like" > <AddIcon/>  Create </Button>
            </div>

            <div className="yourPageCard">
            <Button type="submit" variant="contained" fullWidth className="like" > Liked Pages </Button>
            </div>

            <div className="yourPageCard">
            <Button type="submit" variant="contained" fullWidth className="like" > Invites </Button>
            </div>
         </div>



    <div className="yourPageContainer">
         <Card className="yourPageCard">
             <Card.Content>
                <Card.Header >
                 <div href="" className="headerPage">
                    Page Name
                  </div>
                </Card.Header>
               </Card.Content>
               <Card.Content>
                 In publishing and graphic design,
                 Lorem ipsum is a placeholder text
                 commonly used to demonstrate the 
                 visual form of a document or a 
                 typeface without relying on meaningful content.
                 Lorem ipsum may be used as 
                 a placeholder before the final copy is available
               </Card.Content>


               <Button type="submit" variant="contained" fullWidth className="like" > <ThumbUpIcon/> Like </Button>
        </Card>

        <Card className="yourPageCard">
             <Card.Content>
                <Card.Header >
                 <div href="" className="headerPage">
                    Page Name
                  </div>
                </Card.Header>
               </Card.Content>

               <Card.Content>
                 In publishing and graphic design,
                 Lorem ipsum is a placeholder text
                 commonly used to demonstrate the 
                 visual form of a document or a 
                 typeface without relying on meaningful content.
                 Lorem ipsum may be used as 
                 a placeholder before the final copy is available
               </Card.Content>
               <Button type="submit" variant="contained" fullWidth className="like" > <ThumbUpIcon/>  Like </Button>
        </Card>

        <Card className="yourPageCard">
             <Card.Content>
                <Card.Header >
                 <div href="" className="headerPage">
                    Page Name
                  </div>
                </Card.Header>
               </Card.Content>

               <Card.Content>
                 In publishing and graphic design,
                 Lorem ipsum is a placeholder text
                 commonly used to demonstrate the 
                 visual form of a document or a 
                 typeface without relying on meaningful content.
                 Lorem ipsum may be used as 
                 a placeholder before the final copy is available
               </Card.Content>
               <Button type="submit" variant="contained" fullWidth className="like" > <ThumbUpIcon/>  Like </Button>
        </Card>

        <Card className="yourPageCard">
             <Card.Content>
                <Card.Header >
                 <div href="" className="headerPage">
                    Page Name
                  </div>
                </Card.Header>
               </Card.Content>

               <Card.Content>
                 In publishing and graphic design,
                 Lorem ipsum is a placeholder text
                 commonly used to demonstrate the 
                 visual form of a document or a 
                 typeface without relying on meaningful content.
                 Lorem ipsum may be used as 
                 a placeholder before the final copy is available
               </Card.Content>
               <Button type="submit" variant="contained" fullWidth className="like" > <ThumbUpIcon/>  Like </Button>
        </Card>

        <Card className="yourPageCard">
             <Card.Content>
                <Card.Header >
                 <div href="" className="headerPage">
                    Page Name
                  </div>
                </Card.Header>
               </Card.Content>

               <Card.Content>
                 In publishing and graphic design,
                 Lorem ipsum is a placeholder text
                 commonly used to demonstrate the 
                 visual form of a document or a 
                 typeface without relying on meaningful content.
                 Lorem ipsum may be used as 
                 a placeholder before the final copy is available
               </Card.Content>
               <Button type="submit" variant="contained" fullWidth className="like" > <ThumbUpIcon/>  Like </Button>
        </Card>

        <Card className="yourPageCard">
             <Card.Content>
                <Card.Header >
                 <div href="" className="headerPage">
                    Page Name
                  </div>
                </Card.Header>
               </Card.Content>

               <Card.Content>
                 In publishing and graphic design,
                 Lorem ipsum is a placeholder text
                 commonly used to demonstrate the 
                 visual form of a document or a 
                 typeface without relying on meaningful content.
                 Lorem ipsum may be used as 
                 a placeholder before the final copy is available
               </Card.Content>
               <Button type="submit" variant="contained" fullWidth className="like" > <ThumbUpIcon/>  Like </Button>
        </Card>

    
         </div>


       </div>
    )
}
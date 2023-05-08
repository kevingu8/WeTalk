import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow 
            projectId='59b5e6cc-416a-413c-9ba8-6346e6ff1015'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;
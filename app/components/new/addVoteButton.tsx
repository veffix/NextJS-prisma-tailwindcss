'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
interface AddVoteButtonProps {
    propositionId: number 
}

const AddVoteButton: React.FC<AddVoteButtonProps> = ({propositionId}) => {
    const router = useRouter()
    return ( <div onClick={() => axios.post('/api/vote',{
            propositionId: +propositionId
   }).then(() => router.refresh())}>Vote +</div> );
}
 
export default AddVoteButton;
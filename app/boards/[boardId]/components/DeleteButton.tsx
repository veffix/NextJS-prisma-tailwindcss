'use client'

import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteButton = ({params, searchParams} : {
    params: {boardId : string};
    searchParams?: { [key: string]: string | string[] | undefined}
}) => {
    const router = useRouter()
    return (   <button onClick={() => axios.delete("/api/boards", {
            data: {
                id: +params.boardId
            }
        }).then(() => router.push('/')).then(() => router.refresh())}>delete</button> );
}
 
export default DeleteButton;
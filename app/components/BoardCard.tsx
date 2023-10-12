'use client'

import { Board } from "@prisma/client";
import { useRouter } from "next/navigation";

interface BoardCardProps {
    board: Board
}

const BoardCard: React.FC<BoardCardProps> = ({board}) => {
    const router = useRouter()
    return ( <div className="p-5 border-red-500 border-solid border-2 cursor-pointer" onClick={() => router.push(`/boards/${board.id}`)}>{board.title}</div> );
}
 
export default BoardCard;
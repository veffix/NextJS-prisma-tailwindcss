import { prisma } from "@/db/prisma"
import BoardCard from "./components/BoardCard"
import { classed } from '@tw-classed/react';
import NewBoardPage from "./components/new/newBoardPage";

export default async function Home() {
  const boards = await prisma.board.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
  <div className="">
    <h1 className="text-5xl font-bold">Board list</h1>

    <NewBoardPage />
    <ul>
    {boards.map((board) => {
    return <BoardCard key={board.id} board={board} />
  })}
    </ul>
  </div>
  )
}

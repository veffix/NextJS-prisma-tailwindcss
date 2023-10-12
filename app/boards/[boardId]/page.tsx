import NewPropostionPage from "@/app/components/new/newPropostionPage";
import DeleteButton from "./components/DeleteButton";
import { prisma } from "@/db/prisma"
import AddVoteButton from "@/app/components/new/addVoteButton";

export default async function BoardPage ({params, searchParams} : {
    params: {boardId : string};
    searchParams?: { [key: string]: string | string[] | undefined}
})  {

    const proposition = await prisma.proposition.findMany({
        where: {
            boardId: +params.boardId
        },
        orderBy: {
          vote: {
            _count: "desc"
          }
        }, 
        select:{
        title: true,
        id:true,
        _count: {
            select: {
                vote: true
            }
        } 
        }
      })
    return ( <div><p>
        {params.boardId}
        {JSON.stringify(searchParams)}
        </p>
        <DeleteButton params={params}/>
        <NewPropostionPage boardId={+params.boardId} />
        {proposition.map((propositionSingle) => {return (
       <div key={propositionSingle.id}><h2>{propositionSingle.title}</h2>   {propositionSingle._count.vote}<AddVoteButton propositionId={propositionSingle.id} /></div> )
       })}
        </div> );
}
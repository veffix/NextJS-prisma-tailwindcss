import { PropsWithChildren } from "react";

const LayoutBoard = ({params, children} : PropsWithChildren<{
    params: {boardId : number}
}>) => {
    return ( <><h2>boards ({params.boardId})</h2>{children}</> );
}
 
export default LayoutBoard;
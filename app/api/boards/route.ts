import { prisma } from "@/db/prisma"
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    title,
  } = body;

  const board = await prisma.board.create({
    data: {
      title
    }
  });

  return NextResponse.json(board);
}

export async function DELETE(
    request: Request
  ) {
    const body = await request.json();
    const {
        id
    } = body;
  
    console.log('request.json()', request.json())
    const board = await prisma.board.delete({
        where: {
            id: id
        }
    });
  
    return NextResponse.json(board);
  }
  

import { prisma } from "@/db/prisma"
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    title,
    boardId
  } = body;

  const board = await prisma.proposition.create({
    data: {
      title,
      boardId,
      ip: '0.0.0.0'
    }
  });

  return NextResponse.json(board);
}
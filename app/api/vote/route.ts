import { prisma } from "@/db/prisma"
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    propositionId
  } = body;

  const board = await prisma.vote.create({
    data: {
      propositionId,
      ip: '0.0.0.0'
    }
  });

  return NextResponse.json(board);
}
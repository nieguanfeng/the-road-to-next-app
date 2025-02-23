"use server";

import { prisma } from '@/lib/prisma';
import { ticketPath, ticketsPath } from '@/paths';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteTicket = async(id:string):Promise<void> => {
  await prisma.ticket.delete({
    where: {
      id
    }
  });

  revalidatePath(ticketsPath())
  revalidatePath(ticketPath(id))
  redirect(ticketsPath())
}
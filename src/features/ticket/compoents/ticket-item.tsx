import clsx from "clsx";
import { Card, CardContent, /**CardFooter,**/ CardHeader, CardTitle } from "@/components/ui/card"
import { ticketEditPath, ticketPath } from "@/paths";

import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { LucidePencil, LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { getTickets } from "../queries/get-tickets";
// import { getTicket } from "../queries/get-ticket";
import { Ticket } from "@prisma/client";
// import { prisma } from "@/lib/prisma";
import { deleteTicket } from "../actions/delete-ticket";
// import { getTicket } from "../queries/get-ticket";
// import { Ticket } from "../types";
type TicketProps = {
  // ticket: Awaited<ReturnType<typeof getTickets>>[number];
  ticket: Ticket,
  isDetail?: boolean;
}

const getTicketIcon = (status: string) => {
  return TICKET_ICONS[status as keyof typeof TICKET_ICONS] || '-';
};


const TicketItem = async({ticket, isDetail}: TicketProps) => {
  // const handleDeleteTicket = async() => {
  //   await deleteTicket(ticket.id);
  // }
  // @ts-nocheck
  // const ticketPerticketItem = await getTicket(ticket.id);
  // if(!ticket) {
  //   return null;
  // }
  console.log("Where a I displayed? (TicketItem)")
  const editButton = (
    <Button variant={"outline"} size={"icon"} asChild>
        <Link prefetch href={ticketEditPath(ticket.id)}>
          <LucidePencil className="h-4 w-4"/>
        </Link>
    </Button>
  )
  const detailButton = (
    <Button asChild variant="outline" size="icon">
      <Link prefetch href={ticketPath(ticket?.id as string)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4"/>
      </Link>
    </Button>
  )
  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant={"outline"} size={"icon"}>
        <LucideTrash className="h-4 w-4"/>
      </Button>
    </form>
  )
   
  return (
    <div className={clsx("w-full flex gap-x-2",{
      "max-w-[580px]": isDetail,
      "max-w-[420px]": !isDetail,
    })}>
      <Card 
        className='w-full'> 
        <CardHeader>
          <CardTitle className='flex gap-x-2'>
            <span>{getTicketIcon(String(ticket.status))}</span>
            <span className='truncate'>
              {ticket?.title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className={clsx("whitespace-break-spaces",{
            "line-clamp-3": !isDetail
          })}>
            {
              ticket.content
            }
          </span>
        </CardContent>
        {/* 
        <CardFooter>
          <Link href={ticketPath(ticket.id)} className='text-sm underline'>View</Link>
        </CardFooter> */}
      </Card>
      {/* <div className="flex flex-col gap-y-1">
        {isDetail? null : <div className="flex flex-col gap-y-1">{detailButton}</div>}
      </div> */}
      <div className="flex flex-col gap-y-2">
        {isDetail? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {editButton}
            {detailButton}
          </>
        )}
      </div>
    </div>
  )
}

export {
  TicketItem
}
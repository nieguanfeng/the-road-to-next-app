import clsx from "clsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ticketPath } from "@/paths";

import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ticket } from "../types";
type TicketProps = {
  ticket: Ticket;
  isDetail?: boolean;
}

const getTicketIcon = (status: string) => {
  return TICKET_ICONS[status as keyof typeof TICKET_ICONS] || '-';
};

const TicketItem = ({ticket, isDetail}: TicketProps) => {
  console.log('ticket', ticket);
  console.log('isDetail', isDetail);
  const detailButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4"/>
      </Link>
    </Button>
  )
  return (
    <div className={clsx("w-full flex gap-x-1",{
      "max-w-[580px]": isDetail,
      "max-w-[420px]": !isDetail,
    })}>
      <Card 
        className='w-full'> 
        <CardHeader>
          <CardTitle className='flex gap-x-2'>
            <span>{getTicketIcon(ticket.status)}</span>
            <span className='truncate'>
              {ticket.title}
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
        {/* <CardFooter>
          <Link href={ticketPath(ticket.id)} className='text-sm underline'>View</Link>
        </CardFooter> */}
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail? null : <div className="flex flex-col gap-y-1">{detailButton}</div>}
      </div>
    </div>
  )
}

export {
  TicketItem
}
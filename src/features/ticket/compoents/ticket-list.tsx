import { prisma } from "@/lib/prisma";
// import { getTickets } from "../queries/get-tickets";
// import { Ticket } from "../types";
import { TicketItem } from "./ticket-item";

const TicketList = async() => {
  // throw new Error('Fail to fetch tickets');
  // const tickets = await getTickets();
  const tickets = await prisma.ticket.findMany({
    orderBy: {
      id: 'desc'
    }
  });
  return (
    // flex-1 flex flex-col gap-y-8
    <div className='flex-1 flex flex-col items-center gap-y-8 animate-fade-in-from-top'>
      {/* {initalTickets.map((ticket: Ticket) => (
        <div key={ticket.id} className='w-full max-w-[420px] p-4 border border-slate-100 rounded'> 
          <div>{getTicketIcon(ticket.status)}</div>
          <h3 className='text-lg font-semibold truncate'>{ticket.title}</h3>
          <p className={clsx('text-sm text-slate-500 truncate',{
            "line-through": ticket.status === 'DONE'
          })}>
            {
              ticket.content
            }
          </p>
          <Link href={ticketPath(ticket.id)} className='text-sm underline'>View</Link>
        </div>
      ))} */}
      {/* { initalTickets.map((ticket: Ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} isDetail={false}/>
      ))} */}
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} isDetail={false}/>
      ))}
    </div>
  )
}

export {
  TicketList
};
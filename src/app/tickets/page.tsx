import { initalTickets } from '@/data';
import { Heading } from '@/components/heading';
import {TicketItem} from '@/features/ticket/compoents/ticket-item'
import { Ticket } from '@/features/ticket/types';

// const CheckIcon = () =>(
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//     <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
//   </svg>
// );

// const PencilIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//     <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
//   </svg>
// );

// const DocumentIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//   </svg>
// );

// const TICKET_ICONS = {
//   OPEN: <DocumentIcon/>,
//   DONE: <CheckIcon />,
//   IN_PROCESS: <PencilIcon/>
// }
const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title={'Tickets'} description={'All your tickets at one place'}/>
      <div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top'>
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
        { initalTickets.map((ticket: Ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} isDetail={false}/>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
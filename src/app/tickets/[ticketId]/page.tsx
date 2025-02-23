// import { Placeholder } from "@/components/placeholder";
// import { Button } from "@/components/ui/button";
// import { initalTickets } from "@/data";
import { TicketItem } from "@/features/ticket/compoents/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
// import { getTickets } from "@/features/ticket/queries/get-tickets";
import { notFound } from "next/navigation";
// import { ticketsPath } from "@/paths";
// import Link from "next/link";

// 当文件名为[ticket-id]时，配置参数属性成["ticket-id"] 获取属性时也为params["ticket-Id"]

/**
type TicketPageProps = {
  params: {
    ["ticket-Id"]: string;
  }
}
**/
type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>
}
// const TicketPage = async({ params }:TicketPageProps) => {
//   const {ticketId} = await params;
//   const ticket = await getTicket(ticketId);
//   if(!ticket) {
//     notFound()
//   }
//   return (
//     <div className="flex justify-center animate-fade-in-from-top">
//       <TicketItem ticket={ticket} isDetail={true}/>
//     </div>
//   );
// }

const TicketPage = async({ params }:TicketPageProps) => {
  const {ticketId} = await params;
  const ticket = await getTicket(ticketId);
  if(!ticket) {
    // return <div>Ticket not found</div>
    notFound()
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail={true}/>
    </div>
  );
}

// export const generateStaticParams = async() => {
//   const tickets = await getTickets();
  
//   return tickets.map((ticket) => ({
//     ticketId: ticket.id
//   }))
// }

export default TicketPage;
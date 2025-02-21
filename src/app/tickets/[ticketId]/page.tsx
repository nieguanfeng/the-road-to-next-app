import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initalTickets } from "@/data";
import { TicketItem } from "@/features/ticket/compoents/ticket-item";
import { ticketsPath } from "@/paths";
import Link from "next/link";

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
const TicketPage = async({ params }:TicketPageProps) => {
  const {ticketId} = await params;
  const ticket = initalTickets.find(ticket=>ticket.id == ticketId);
  if(!ticket) {
    // return <div>Ticket not found</div>
    return (
      <div className="flex flex-1">
        <Placeholder 
          label="Ticket not found"
          button={
            <Button asChild variant={"outline"}>
              <Link href={ticketsPath()}>Go to Tickets</Link>
            </Button>
          }
        />
        {/* <Placeholder label="Ticket not found"/> */}
      </div>
    );
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      {/* <h2 className="text-lg">Tickets Page({ticket?.title})</h2>
      <p className="text-sm">{ticket?.content}</p> */}
      <TicketItem ticket={ticket} isDetail={true}/>
    </div>
  );
}

export default TicketPage;
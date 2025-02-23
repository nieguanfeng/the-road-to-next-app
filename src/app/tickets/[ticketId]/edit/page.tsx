import { CardCompact } from "@/components/card-compact";
// import { TicketUpdateForm } from "@/features/ticket/compoents/ticket-update-form";
import { TicketUpsertForm } from "@/features/ticket/compoents/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";
type TicketEditPageProps = {
  params: {
    ticketId: string;
  }
}

const TicketEditPage = async ({params}:TicketEditPageProps) => {
  const ticket = await getTicket(params.ticketId);
  if(!ticket) {
    notFound();
  }
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact 
        title="Edit Ticket" 
        description="Edit a ticket" 
        className="w-full max-w-[420px]"
        // content={<TicketUpdateForm ticket={ticket} />} 
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
} 
export default TicketEditPage;
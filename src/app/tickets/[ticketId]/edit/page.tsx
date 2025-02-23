"use server";
import { CardCompact } from "@/components/card-compact";
import { TicketUpsertForm } from "@/features/ticket/compoents/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
  params: Promise<{ticketId: string}>
};
const TicketEditPage:React.FC<TicketEditPageProps> = async ({ params }) => {
  const { ticketId } = await params;
  if (!ticketId) {
    notFound();
  }

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact 
        title="Edit Ticket" 
        description="Edit a ticket" 
        className="w-full max-w-[420px]"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
}
export default TicketEditPage;
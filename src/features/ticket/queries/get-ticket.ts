// import { initalTickets } from "@/data"
import { prisma } from "@/lib/prisma";
// import { cache } from "react";

// const getTicket = async(ticketId: string): Promise<Ticket | null> => {
//   const mybeTicket = initalTickets.find((ticket)=>ticket.id === ticketId);
//   return new Promise((resovle)=>{  
//     resovle(mybeTicket || null)
//   });
// }
// const getTicket = cache(async(id:string) => {
//   console.log("=======>>>>",id);
//   return await prisma.ticket.findUnique({
//     where: {
//       id
//     }
//   });
// })
const getTicket = async(id:string) => {
  return await prisma.ticket.findUnique({
    where: {
      id
    }
  });
}
// const getTicket = async(id:string) => await prisma.ticket.findUniqueOrThrow({
//   where: {
//     id
//   }
// });
export {
  getTicket
}
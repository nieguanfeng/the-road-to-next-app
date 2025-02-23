import { prisma } from '@/lib/prisma';

// import {initalTickets} from '@/data';
// import { Ticket } from '../types';

// export const getTickets = async():Promise<Ticket[]> => {
//   // return initalTickets;
//   // await new Promise((resolve)=>setTimeout(resolve, 2000));
//   // throw new Error('Fail to fetch tickets');
//   console.log(process.env.DATABSE_URL)
//   return new Promise((resovle)=>{    
//     setTimeout(()=>resovle(initalTickets), 2000)
//   });
// }

export const getTickets = async() => {
  return await prisma.ticket.findMany();
}
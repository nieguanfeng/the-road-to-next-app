const homePath = () => '/'; 
const ticketsPath = () => '/tickets';
const ticketPath = (ticketId: string) => {
  return `/tickets/${ticketId}`;
}
const ticketEditPath = (ticketId: string) => {
  return `/tickets/${ticketId}/edit`;
}
export {
  homePath,
  ticketsPath,
  ticketPath,
  ticketEditPath
};
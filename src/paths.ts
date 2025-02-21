const homePath = () => '/'; 
const ticketsPath = () => '/tickets';
const ticketPath = (ticketId: string) => {
  return `/tickets/${ticketId}`;
}
export {
  homePath,
  ticketsPath,
  ticketPath
};
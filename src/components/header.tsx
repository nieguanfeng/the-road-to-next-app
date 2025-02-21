import { homePath, ticketsPath } from "@/paths";
import { LucideKanban } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="
        supports-backrop-blur:bg-background/60
        flxed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between">
      <div>
        {/* <Button asChild variant={"outline"}> */}
          {/* <Link href={homePath()} className="text-lg font-bold">
            Home
          </Link> */}
            <Link href={homePath()} className={buttonVariants({ variant: "ghost"})}>
            <LucideKanban />
            <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
          </Link>
        {/* </Button> */}
      </div>
      <div>
        {/* <Button asChild variant={"outline"}> */}
          {/* <Link href={ticketsPath()} className="text-sm underline">
            Tickets
          </Link>  */}
          <Link href={ticketsPath()} className={buttonVariants({ variant: "default"})}> 
            Tickets
          </Link> 
        {/* </Button> */}
      </div>
    </nav>
  )
}

export {Header};
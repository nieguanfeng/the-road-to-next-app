import Link from "next/link";
import { ticketsPath } from "@/paths";
import { Heading } from "@/components/heading";
const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      {/* <div>
        <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div> */}

      <Heading title={'Home'} description={'Your home place to start'}/>

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
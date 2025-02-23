import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type CardCompactProps = {
  title: string;
  description: string;
  content: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}
const CardCompact = ({content, footer}:CardCompactProps) => {
  return (
    <Card className='w-full max-w-[420px] self-center'>
        <CardHeader>
            <CardTitle>
              Create Ticket
            </CardTitle>
            <CardDescription>
              A new ticket will be createds
            </CardDescription>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
        { footer && <CardFooter>{footer}</CardFooter>}
      </Card>
  );
}

export {
  CardCompact
}
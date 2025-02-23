import { Heading } from '@/components/heading';
import { Suspense } from 'react';
import { TicketList } from '@/features/ticket/compoents/ticket-list';
import { Spinner } from '@/components/spinner';
// import { TicketCreateForm } from '@/features/ticket/compoents/ticket-create-form';
import { CardCompact } from '@/components/card-compact';
import { TicketUpsertForm } from '@/features/ticket/compoents/ticket-upsert-form';

// export const dynamic = "force-dynamic"; // 强制对页面进行动态缓存 f
// export const revalidate = 30; // 每隔30秒更新一次页面

// export const revalidate = 0; // 实时更新一次页面
const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title={'Tickets'} description={'All your tickets at one place'}/>

      <CardCompact 
        title={'Create Ticket'} 
        description={'A new ticket will be created'} 
        // content={<TicketCreateForm />} 
        content={<TicketUpsertForm/>}
        className={'w-full max-w-[420px] self-center'}
      />
      
      <Suspense fallback={<Spinner/>}>
        <TicketList/>
      </Suspense>
    </div>
  );
};

export default TicketsPage;
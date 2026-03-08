// app/types/Resource.ts

export type Resource = {
  id: number;
  exam: string;
  category: string;
  state: string;
  source: string;
  updatedAt?: string;

  notification?: {
    title?: string;
    type?: string; // ✅ optional
    link: string;
  };

  application?: {
    applyLink?: string;
    applicationStart?: string;
    applicationEnd?: string;
  };
};


export default function ResourceCard({
  resource,
}: {
  resource: Resource;
}) {
  const notificationLink = resource.notification?.link;
  const applyLink = resource.application?.applyLink;

  if (!notificationLink && !applyLink) return null;

  return (
    <div className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
          {resource.exam}
        </h3>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-100 whitespace-nowrap ml-4">
          {resource.state}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center text-sm font-medium text-slate-600 bg-slate-100/80 px-3 py-1 rounded-lg">
          {resource.category}
        </span>
      </div>

      <div className="flex gap-3 flex-wrap pt-5 border-t border-slate-100">
        {notificationLink && (
          <a
            href={notificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors flex-1 min-w-[140px]"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Notification
          </a>
        )}

        {applyLink && (
          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 flex-1 min-w-[140px]"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Apply Online
          </a>
        )}
      </div>
    </div>
  );
}
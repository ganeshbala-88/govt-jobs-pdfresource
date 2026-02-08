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
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{resource.exam}</h3>

      <p className="text-sm text-gray-600 mt-1">
        {resource.category} • {resource.state}
      </p>

      <div className="flex gap-3 mt-4 flex-wrap">
        {notificationLink && (
          <a
            href={notificationLink}
            target="_blank"
            className="px-4 py-2 rounded text-sm text-white bg-blue-600"
          >
            📄 Notification
          </a>
        )}

        {applyLink && (
          <a
            href={applyLink}
            target="_blank"
            className="px-4 py-2 rounded text-sm text-white bg-green-600"
          >
            📝 Apply Online
          </a>
        )}
      </div>
    </div>
  );
}

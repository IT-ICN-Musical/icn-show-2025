export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative max-w-3xl w-full px-4 lg:px-0 py-6">
        {children}
      </div>
    </div>
  );
}

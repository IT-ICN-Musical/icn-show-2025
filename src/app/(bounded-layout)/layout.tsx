export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-3xl w-full lg:px-0">{children}</div>
    </div>
  );
}

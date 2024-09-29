export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-3xl w-full px-4 py-6">{children}</div>
    </div>
  );
}

import "../style/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-100">
        <div className="bg-slate-300 text-center h-[60px] ">
          <p className="text-4xl text-green-900  pt-2">
            Task maker <span className="text-orange-500">!</span>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}

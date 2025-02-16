
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] h-full w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-full w-full">
        <h1 className="text-2xl font-bold text-red">หน้าหลัก</h1>
        <p>ยินดีต้อนรับสู่ระบบ</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-red">© 2025 My App</p>
      </footer>
    </div>
  );
}

export default function About() {
  return (
    <div className="h-full w-full flex justify-center items-center p-3 overflow-y-auto">
      <div className=" w-full md:w-1/2 border h-full rounded-lg bg-slate-100 p-2 flex flex-col gap-2">
        <div className="text-2xl">درباره ما</div>
        <p>
          به فروشگاه ما خوش آمدید! ما در فروشگاه اکسسوری خود تلاش کرده‌ایم تا
          مجموعه‌ای خاص، شیک و منحصربه‌فرد از زیورآلات و اکسسوری‌های روز دنیا را
          برای شما فراهم کنیم. هدف ما ارائه محصولاتی با کیفیت بالا، قیمت مناسب و
          طراحی به‌روز است تا بتوانید استایل دلخواه‌تان را کامل کنید و بدرخشید.
        </p>
        <p>
          ما به رضایت مشتریان‌مان افتخار می‌کنیم و همواره در تلاش هستیم تا
          تجربه‌ای لذت‌بخش از خرید آنلاین برای شما فراهم کنیم.
        </p>
        <div
          style={{ direction: "ltr" }}
          className="space-y-1  h-full flex justify-end items-end flex-col"
        >
          <p className="flex gap-2">
            📞<p>0912-123-4567</p>
            <strong>{`: شماره تماس`}</strong>
          </p>
          <p>
            🔒 <strong>کد اینماد:</strong> 007759200000
          </p>
        </div>
      </div>
    </div>
  );
}

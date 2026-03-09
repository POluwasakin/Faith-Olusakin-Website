import Head from "next/head";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <>
      <Head>
        <title>Thank you — Faith Olusakin</title>
        <meta
          name="description"
          content="Thanks for reaching out to Faith Olusakin. I’ll review your message and get back to you shortly."
        />
      </Head>
      <div className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_at_top,_#db2777_0,_transparent_55%),radial-gradient(circle_at_bottom,_#0f172a_0,_transparent_55%)] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-slate-900/80 border border-slate-800 rounded-3xl shadow-[0_20px_70px_rgba(15,23,42,0.8)] p-8 text-slate-100">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Thank you for reaching out
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
            I&apos;ve received your message and will get back to you at the
            email you provided. I usually reply within 24 hours.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            If it&apos;s urgent, you can also message me on WhatsApp or email
            me directly at{" "}
            <a
              href="mailto:faitholusakin@gmail.com"
              className="text-pink-400 hover:text-pink-300 underline"
            >
              faitholusakin@gmail.com
            </a>
            .
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-pink-600 text-white px-6 py-2.5 text-sm font-semibold shadow-lg hover:bg-pink-500 hover:shadow-xl transition"
            >
              Back to portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


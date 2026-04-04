import Link from "next/link";

export default function FreeAppraisalButton() {
  return (
    <Link
      href="/free-appraisal"
      className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 font-semibold text-zinc-900 shadow hover:bg-white hover:shadow-md transition"
    >
      Free Appraisal
    </Link>
  );
}

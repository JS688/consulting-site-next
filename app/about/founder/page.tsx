import { redirect } from "next/navigation";

export const metadata = {
  title: "About the Founder — JulTech AI",
};

export default function FounderPage() {
  redirect("/about");
}

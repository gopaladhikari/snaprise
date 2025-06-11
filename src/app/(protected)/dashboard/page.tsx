import { dashboardMeta } from "@/constants/metadata";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: dashboardMeta.title,
  description: dashboardMeta.description,
} as const;

export default function Dashboard() {
  return (
    <main>
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h1>My Projects</h1>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </div>
      </div>
    </main>
  );
}

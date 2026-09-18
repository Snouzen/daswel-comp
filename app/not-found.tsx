import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-4">
      <h1 className="text-4xl font-extrabold tracking-tight">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-muted-foreground max-w-md">
        Maaf, halaman yang Anda tuju tidak ditemukan atau telah dipindahkan.
      </p>
      <Button asChild>
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  );
}

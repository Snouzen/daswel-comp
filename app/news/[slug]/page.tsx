import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";
import { companyData } from "@/data/company";
import { NewsCard } from "@/components/news/news-card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  ChevronRight,
  ArrowLeft,
  Video,
  Image as ImageIcon,
  MessageSquare,
  Share2,
} from "lucide-react";

export function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsData.find((n) => n.slug === slug);
  if (!article) return { title: "Berita Tidak Ditemukan" };

  return {
    title: `${article.title} — Liputan & Dokumentasi Resmi`,
    description: article.excerpt,
    keywords: [
      article.title,
      article.category,
      "pameran industri",
      companyData.name,
    ],
    alternates: {
      canonical: `https://daswel.com/news/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${companyData.name}`,
      description: article.excerpt,
      url: `https://daswel.com/news/${article.slug}`,
      siteName: companyData.name,
      locale: "id_ID",
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: `https://daswel.com${article.image}`,
          width: 1200,
          height: 630,
          alt: `${article.title} - ${companyData.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${companyData.name}`,
      description: article.excerpt,
      images: [`https://daswel.com${article.image}`],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsData.find((n) => n.slug === slug);
  if (!article) {
    notFound();
  }

  const otherArticles = newsData.filter((n) => n.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [`https://daswel.com${article.image}`],
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: companyData.name,
      logo: {
        "@type": "ImageObject",
        url: "https://daswel.com/images/logo.png",
      },
    },
  };

  const shareWaUrl = `https://wa.me/?text=${encodeURIComponent(
    `Simak liputan dokumentasi ${article.title} dari ${companyData.name}: https://daswel.com/news/${article.slug}`
  )}`;

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link href="/news" className="hover:text-foreground transition-colors">
              News
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="font-semibold text-foreground truncate max-w-xs" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span>{article.publishedAt}</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="h-3.5 w-3.5 text-primary" />
            <span>{article.author}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-4 py-1 italic">
          {article.excerpt}
        </p>
      </header>

      {/* Main Media Section */}
      <div className="space-y-3">
        <div className="relative rounded-3xl border overflow-hidden bg-black shadow-lg">
          {article.video ? (
            <div className="relative aspect-video w-full">
              <video
                src={article.video}
                poster={article.image}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-md">
                  <Video className="h-3.5 w-3.5 text-primary" />
                  <span>Video Liputan Resmi</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="relative h-80 sm:h-[480px] w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
              />
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground text-center">
          {article.video
            ? `Dokumentasi video partisipasi ${companyData.name} dalam ajang ${article.title}`
            : `Dokumentasi visual gerai pameran ${companyData.name} pada ajang ${article.title}`}
        </p>
      </div>

      {/* Article Body Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed pt-4 border-t">
        <p className="font-medium text-foreground leading-relaxed">
          {article.content}
        </p>

        {article.paragraphs?.map((p, idx) => (
          <p key={idx} className="text-muted-foreground leading-relaxed">
            {p}
          </p>
        ))}
      </article>

      {/* Photo Gallery Grid (if available) */}
      {article.gallery && article.gallery.length > 0 && (
        <section aria-label="Galeri Foto Pameran" className="space-y-6 pt-6 border-t">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Dokumentasi Foto Kegiatan Pameran
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {article.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative h-56 rounded-2xl border overflow-hidden bg-muted group shadow-sm hover:shadow-md transition-all hover:border-primary/40"
              >
                <Image
                  src={imgSrc}
                  alt={`Dokumentasi ${article.title} foto #${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Share & Consultation Row */}
      <div className="rounded-3xl border bg-muted/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-base text-foreground">
            Tertarik Mengundang atau Meliput {companyData.name}?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Tim komunikasi korporat siap membantu informasi publikasi dan kerjasama pameran.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={shareWaUrl} target="_blank" rel="noopener noreferrer">
              <Share2 className="h-3.5 w-3.5" />
              <span>Bagikan Berita</span>
            </a>
          </Button>
          <Button asChild size="sm" className="gap-2">
            <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Hubungi Humas</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Related / Suggested News Section */}
      {otherArticles.length > 0 && (
        <section aria-label="Saran Berita Lainnya" className="pt-10 border-t space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Saran Berita Terkait
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Liputan Dokumentasi & Berita Lainnya
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Jelajahi agenda pameran industri dan siaran pers resmi {companyData.name} lainnya.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
              <Link href="/news">
                <ArrowLeft className="h-3.5 w-3.5" />
                Semua Berita
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((other, idx) => (
              <NewsCard key={other.id} article={other} delay={idx * 0.1} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";

import QuizSection from "@/components/QuizSection";
import { APP_NAME, LINKS } from "@/utils/constants";
import { getCategoryData } from "@/utils/helpers";

// Props interface
interface QuestionsPageProps {
  params: Promise<{ category: string }>;
}

// Generate metadata function
export async function generateMetadata({
  params,
}: QuestionsPageProps): Promise<Metadata> {
  // Get the params, fetch the data and get the category's questions
  const { category } = await params;
  const questionsPack = await getCategoryData(category);

  // Guard clause
  if (!questionsPack) notFound();

  // Returned Metadata
  return {
    title: `${questionsPack.title} Quiz`,
    description: `Play the ${questionsPack.title} quiz on ${APP_NAME}. Choose a difficulty, answer 10 questions, and get instant results.`,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.CATEGORIES}/${category}`,
      title: `${questionsPack.title} Quiz | ${APP_NAME}`,
      description: `Play the ${questionsPack.title} quiz on ${APP_NAME}. Choose a difficulty, answer 10 questions, and get instant results.`,
      siteName: APP_NAME,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: APP_NAME,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${questionsPack.title} Quiz | ${APP_NAME}`,
      description: `Play the ${questionsPack.title} quiz on ${APP_NAME}. Choose a difficulty, answer 10 questions, and get instant results.`,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.CATEGORIES}/${category}`,
    },
  };
}

// The component
async function QuestionsPage({ params }: QuestionsPageProps) {
  // Get the params, fetch the data and get the category's questions
  const { category } = await params;
  const questionsPack = await getCategoryData(category);

  // Guard clause
  if (!questionsPack) notFound();

  // Returned JSX
  return <QuizSection questions={questionsPack} />;
}

export default QuestionsPage;

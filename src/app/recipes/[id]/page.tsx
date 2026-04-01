import { PLACEHOLDER_RECIPES } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const recipe = PLACEHOLDER_RECIPES.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Back button */}
      <div className="px-8 pt-8">
        <Link
          href="/"
          className="text-base text-neutral-400 hover:text-white transition-colors duration-200"
        >
          ← Back to recipes
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 w-full mt-6 hidden md:block">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative pt-6 md:pt-0 md:-mt-30 px-8 pb-8 max-w-4xl mx-auto">
        {/* Floating recipe image */}
        <div className="relative h-100 rounded-2xl overflow-hidden mb-6 shadow-[0_-25px_50px_rgba(0,0,0,0.5)] border border-neutral-800">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Title and meta */}
        <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
        <div className="flex items-center gap-3 text-base text-neutral-400 mb-4">
          <span>{recipe.cuisine}</span>
          <span>·</span>
          <span>{recipe.cookTimeMinutes} min</span>
          <span>·</span>
          <span>Serves {recipe.baseServings}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-neutral-300 leading-relaxed mb-10">
          {recipe.description}
        </p>

        {/* Ingredients */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient) => (
              <li
                key={ingredient.id}
                className="flex items-center gap-2 text-lg text-neutral-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-500 shrink-0" />
                <span>
                  {ingredient.quantity} {ingredient.unit} {ingredient.name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-4 text-lg text-neutral-300">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium text-white">
                  {index + 1}
                </span>
                <p className="leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

import { Recipe } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 hover:bg-neutral-800 transition-colors duration-200">
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-xl font-semibold text-white mb-1">
            {recipe.title}
          </h2>

          {/* Description */}
          <p className="text-base text-neutral-400 line-clamp-2 mb-3">
            {recipe.description}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span>{recipe.cuisine}</span>
            <span>·</span>
            <span>{recipe.cookTimeMinutes} min</span>
            <span>·</span>
            <span>Serves {recipe.baseServings}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-800 group-hover:bg-neutral-700 px-2 py-1 text-sm text-neutral-400 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

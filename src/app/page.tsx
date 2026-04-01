import RecipeCard from "@/components/RecipeCard";
import { PLACEHOLDER_RECIPES } from "@/lib/placeholder-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="px-8 pt-12 pb-8">
        <h1 className="text-4xl font-bold mb-2">My Recipes</h1>
        <p className="text-neutral-400 text-lg">
          {PLACEHOLDER_RECIPES.length} recipes in your collection
        </p>
      </div>

      {/* Recipe Grid */}
      <div className="px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {PLACEHOLDER_RECIPES.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}

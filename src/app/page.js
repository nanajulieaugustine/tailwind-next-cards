import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  const data = [
    {
      title: "Best of the day",
      category: "Shots featured",
    },
    {
      title: "Featured streams",
      category: "Watch livestreams",
    },
    {
      title: "Subscriptions",
      category: "Premium content",
    },
    {
      title: "Creative feed",
      category: "Premium feed",
    },
  ];
  return (
    <main>
      <ThemeToggle />
      <ul>
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </ul>
    </main>
  );
}

function Card({ title, category }) {
  return (
    <li class="group bg-slate-100 p-4 justify-center max-w-[400px] hover:bg-slate-200 transition duration-350 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-700">
      <a href="#0" class="flex gap-4">
        <div className="aspect-square w-10 rounded-md bg-[#cbd5e1]"></div>
        <div class="dark:text-slate-50">
          <p class="font-bold">{title}</p>
          <small>{category}</small>
        </div>
        <svg
          class="text-purple-600 ml-auto opacity-0 group-hover:opacity-100 transition duration-350 ease-in-out dark:hover:text-purple-400"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
          ></path>
        </svg>
      </a>
    </li>
  );
}

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
    <li>
      <a href="#0">
        <div className="aspect-square w-10 rounded-md bg-[#cbd5e1]"></div>
        <div>
          <p>{title}</p>
          <small>{category}</small>
        </div>
        <svg
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

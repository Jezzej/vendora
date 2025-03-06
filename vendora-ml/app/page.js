import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
      <p>Click below to go to the Frontend page</p>
      <Link href="/frontend">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go to Frontend</button>
      </Link>
      <p>Click below to go to the dashboard page</p>
      <Link href="/backend/dashboard">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go to dashboard</button>
      </Link>
    </div>
  );
}

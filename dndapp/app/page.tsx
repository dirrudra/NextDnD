import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>

      <div>
        <h1>
          Hello Dungeoneers
        </h1>
      </div>
      <div className="forwarder">
        <Link href="/signup">Users</Link>
      </div>
    </main>
  );
}

import { LoaderFunction } from "remix"

export let loader: LoaderFunction = async () => {
  // throw new Error("Sentry error test");

  return null;
}

const handleClick =() => {
  throw new Error("Sentry error test");
}

export default function Home() {
  return (
    <div>
      <button
        type="submit"
        className="test"
        onClick={handleClick}>TEST BUTTON
      </button>
    </div>
  )
}

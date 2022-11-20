import Link from 'next/link'

export default function PoemLinks({ prevPid, nextPid }) {
    const prevHref = "/poem/" + prevPid
    const nextHref = "/poem/" + nextPid
    return (
        <h1 className="title">
            {prevPid === null ? "": <Link href={prevHref}> Previous </Link>}
            {nextPid === null ? "": <Link href={nextHref}> Next </Link>}
        </h1>
      )
}

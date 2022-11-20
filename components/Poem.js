export default function Poem({ poemStanzas }) {
    return (
        <div className="max-w-2xl space-y-4 overflow-x-auto">
            {poemStanzas.map(stanza => {
                return (
                    <div className="whitespace-pre-line">{stanza}</div>
                )
            })}
        </div>
      )
}

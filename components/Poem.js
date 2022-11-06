export default function Poem({ poemStanzas }) {
    console.log(poemStanzas)
    return (
        <div className="max-w-2xl space-y-4 overflow-x-auto">
            {poemStanzas.map(stanza => {
                return (
                    <div class="whitespace-pre-line">{stanza}</div>
                )
            })}
        </div>
      )
}

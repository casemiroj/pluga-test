import { useContext, useEffect, useState } from "react"
import { ToolContext } from "../context/tools"

export function SearchBar() {
  const [search, setSearch] = useState('')
  const {tools, setFilteredTools} = useContext(ToolContext)

  const filter = tools.filter((tool) => tool.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    setFilteredTools(filter)
  }, [search])

  return (
      <header className="flex justify-center px-40 py-5">
        <input value={search} onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Buscar ferramenta" className="flex flex-1 bg-slate-200 h-10 rounded-xl px-8 placeholder-black"/>
      </header>
  )
}
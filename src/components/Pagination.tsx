import { useContext, useEffect, useState } from "react"
import { ToolContext } from "../context/tools"

export function Pagination() {
  const { filteredTools, setCurrentTools } = useContext(ToolContext)
  
  const toolsPerPage = 12
  const [currentPage, setCurrentPage] = useState(0)
  
  const [pages, setPages] = useState(0)
  const startIndex = currentPage * toolsPerPage
  const endIndex = startIndex + toolsPerPage
  

  useEffect(() => {
    setPages(Math.ceil(filteredTools.length / toolsPerPage))
    setCurrentTools(filteredTools.slice(startIndex, endIndex))
  }, [filteredTools, currentPage])

  return (
    <footer className="flex justify-center px-40 py-5 gap-2">
      {Array.from(Array(pages), (page, index) => (
        <button 
          className="bg-slate-300 h-6 w-6 flex items-center justify-center rounded-md"
          key={index}
          value={index}
          onClick={event => setCurrentPage(Number(event.currentTarget.value))}
        >
          {index}
        </button>
      ))}
    </footer>
  )
}
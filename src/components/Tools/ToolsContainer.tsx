import axios from "axios"
import { useContext, useEffect } from "react"
import { ToolContext } from "../../context/tools"
import { Tool } from "./Tool"

interface ITool {
  app_id: string
  name: string
  color: string
  icon: string
  link: string
}

export function ToolsContainer() {
  const { currentTools, setTools, setFilteredTools } = useContext(ToolContext)

  useEffect(() => {
    const getTools = async() => {
      const { data } = await axios.get('https://pluga.co/ferramentas_search.json')
      setTools(data)
      setFilteredTools(data)
    }

    getTools()
  }, [])

  return (
    <main className="flex-1 flex flex-wrap justify-center gap-5 px-52">
      {currentTools.map((tool: ITool) => (
        <Tool
          key={tool.app_id}
          icon={tool.icon}
          name={tool.name}
        />
      ))}
    </main>
  )
}
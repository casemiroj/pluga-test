import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ToolContext } from "../../context/tools"
import { Tool } from "./Tool"
import { Modal } from '../Modal'

interface ITool {
  app_id: string
  name: string
  color: string
  icon: string
  link: string
}

export function ToolsContainer() {
  const { currentTools, setTools, setFilteredTools } = useContext(ToolContext)
  const [tool, setTool] = useState<ITool>()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  useEffect(() => {
    const getTools = async() => {
      const { data } = await axios.get('https://pluga.co/ferramentas_search.json')
      setTools(data)
      setFilteredTools(data)
    }

    getTools()
  }, [])

  function handleClickTool(tool: ITool) {
    setTool(tool)
    setIsModalVisible(true)
  }

  function closeModal() {
    setIsModalVisible(false)
  }

  return (
    <main className="flex-1 flex flex-wrap justify-center gap-5 px-52">
      {isModalVisible && (
        <Modal
          tool={tool}
          onClose={closeModal}
        />
      )}
      {currentTools.map((tool: ITool) => (
        !isModalVisible && (
          <Tool
            key={tool.app_id}
            toolInfo={tool}
            onOpenModal={handleClickTool}
          />
        )
      ))}
    </main>
  )
}
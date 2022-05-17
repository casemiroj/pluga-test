import { createContext, useState } from "react";

interface ITool {
  app_id: string
  name: string
  color: string
  icon: string
  link: string
}

interface PropsToolContext {
  tools: ITool[]
  setTools: (tools: ITool[]) => void
  filteredTools: ITool[]
  setFilteredTools: (tools: ITool[]) => void
}

const defaultValue = {
  tools: [
    {
      app_id: '',
      name: '',
      color: '',
      icon: '',
      link: ''
    }
  ],
  setTools: (tools: ITool[]) => console.warn('no tool provider'),
  filteredTools: [
    {
      app_id: '',
      name: '',
      color: '',
      icon: '',
      link: ''
    }
  ],
  setFilteredTools: (tools: ITool[]) => console.warn('no tool provider')
}


export const ToolContext = createContext<PropsToolContext>(defaultValue);

export function ToolContextProvider({ children }: any) {
  const [tools, setTools] = useState<ITool[]>(defaultValue.tools)
  const [filteredTools, setFilteredTools] = useState<ITool[]>(defaultValue.tools)
  
  return (
    <ToolContext.Provider
      value={{
        tools,
        setTools,
        filteredTools,
        setFilteredTools
      }}
    >
      {children}
    </ToolContext.Provider>
  )
}
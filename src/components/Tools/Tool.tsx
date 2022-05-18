interface ITool {
  app_id: string
  name: string
  color: string
  icon: string
  link: string
}
interface ToolProps {
  toolInfo: ITool
  onOpenModal: (tool: ITool) => void
}

export function Tool({toolInfo, onOpenModal}: ToolProps) {
  return(
    <button onClick={() => onOpenModal(toolInfo)} className="flex flex-col w-[20%] h-36 rounded-md justify-center items-center gap-5 bg-slate-400 hover:bg-slate-300 transition-colors">
      <img className="w-16 h-16" src={toolInfo.icon} alt="" />
      <p className="text-white">{toolInfo.name}</p>
    </button>
  )
}
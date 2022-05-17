interface ToolProps {
  icon: string
  name: string
}

export function Tool({icon, name}: ToolProps) {
  return(
    <button className="flex flex-col w-[20%] h-36 rounded-md justify-center items-center gap-5 bg-slate-400 hover:bg-slate-300 transition-colors">
      <img className="w-16 h-16" src={icon} alt="" />
      <p className="text-white">{name}</p>
    </button>
  )
}
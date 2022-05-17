interface ToolProps {
  icon: string
  name: string
}

export function Tool({icon, name}: ToolProps) {
  return(
    <div className="flex flex-col w-[20%] h-36 justify-center items-center gap-5 bg-slate-400">
      <img className="w-16 h-16" src={icon} alt="" />
      <p className="text-white">{name}</p>
    </div>
  )
}
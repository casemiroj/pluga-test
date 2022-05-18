interface ModalProps {
  tool: any
  onClose: () => void
}

export function Modal({tool, onClose}: ModalProps) {
  return (
    <div className="bg-slate-400 flex flex-col justify-center w-[80%] rounded-xl">
      <div className="flex h-48 justify-center gap-5">
        <img src={tool.icon} alt="Logo" />
        <div className="flex flex-col items-center justify-around">
          <p className="text-2xl">{tool.name}</p>
          <a className="bg-slate-600 w-24 h-10 flex justify-center items-center rounded-full hover:bg-slate-500 transition-colors" href={tool.link}>Acessar</a>
          <button onClick={onClose}>fechar</button>
        </div>
      </div>
    </div>
  )
}
export default function TitleBar() {
    return (
      <div className="flex h-[30px] shrink-0 items-center bg-titlebar px-3">
        <div className="flex gap-1.5">
          <div className="h-[11px] w-[11px] rounded-full bg-[#FF5F56]" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#FFBD2E]" />
          <div className="h-[11px] w-[11px] rounded-full bg-[#27C93F]" />
        </div>
        <p className="flex-1 text-center text-xs text-muted">
          daniel-fernandez — portfolio
        </p>
        <div className="w-[52px]" />
      </div>
    );
}
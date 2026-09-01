 export default function StatusBar() {
    return (
      <div className="flex h-6 shrink-0 items-center gap-4 bg-statusbar px-3 text-[11.5px] 
  text-white">
        <span className="shrink-0">main*</span>
        <span className="shrink-0">⚠ 0  ⓧ 0</span>
        <span className="ml-auto hidden truncate md:inline">CS Junior @ Queens College, CUNY</span>
        <span className="hidden shrink-0 md:inline">UTF-8</span>
        <span className="hidden shrink-0 md:inline">Ln 1, Col 1</span>
      </div>
    );
  }
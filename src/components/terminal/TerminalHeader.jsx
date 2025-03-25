export default function TerminalHeader() {
  return (
    <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
      <div className="flex space-x-2">
        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="mx-auto text-sm text-gray-400">datathon@terminal ~ </div>
    </div>
  )
}

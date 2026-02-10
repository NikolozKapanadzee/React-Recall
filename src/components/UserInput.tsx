export default function UserInput({ onChangeInput, userInput }: any) {
  return (
    <section className="mx-auto max-w-xl rounded-2xl bg-slate-800 p-6 shadow-lg">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <p className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-300">
            Initial Investment
          </label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
            className="rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-slate-500 focus:ring-2"
          />
        </p>

        <p className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-300">
            Annual Investment
          </label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
            className="rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-slate-500 focus:ring-2"
          />
        </p>

        <p className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-300">
            Expected Return (%)
          </label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
            className="rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-slate-500 focus:ring-2"
          />
        </p>

        <p className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-300">
            Duration (years)
          </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
            className="rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-slate-500 focus:ring-2"
          />
        </p>
      </div>
    </section>
  );
}

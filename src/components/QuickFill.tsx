import { Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface QuickFillProps {
  onFill: (sellOut: string, sellIn: string, desired: string) => void;
}

export function QuickFill({ onFill }: QuickFillProps) {
  const { isDarkMode } = useTheme();

  const scenarios = [
    { name: 'Low Coverage', sellOut: '822', sellIn: '1200', desired: '95', color: 'from-red-500 to-red-600' },
    { name: 'Optimal', sellOut: '950', sellIn: '1000', desired: '95', color: 'from-green-500 to-green-600' },
    { name: 'High Coverage', sellOut: '1050', sellIn: '1000', desired: '95', color: 'from-orange-500 to-orange-600' },
    { name: 'Your Example', sellOut: '2909', sellIn: '3489', desired: '94', color: 'from-cyan-500 to-teal-600' },
  ];

  return (
    <div className={`backdrop-blur-sm rounded-xl shadow-xl p-6 border transition-all duration-300 ${
      isDarkMode
        ? 'bg-slate-800/90 border-slate-700'
        : 'bg-white/90 border-cyan-100'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <Zap size={20} className={isDarkMode ? 'text-amber-400' : 'text-amber-500'} />
        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
          Quick Fill Examples
        </h3>
      </div>
      <p className={`text-xs mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        Click any scenario to instantly populate the form:
      </p>
      <div className="grid grid-cols-2 gap-3">
        {scenarios.map((scenario) => (
          <button
            key={scenario.name}
            onClick={() => onFill(scenario.sellOut, scenario.sellIn, scenario.desired)}
            className={`p-3 rounded-lg bg-gradient-to-br ${scenario.color} hover:shadow-xl transition-all duration-200 active:scale-95 text-white text-left`}
          >
            <p className="font-semibold text-sm mb-1">{scenario.name}</p>
            <div className="text-xs opacity-90 space-y-0.5">
              <p>Out: {scenario.sellOut} hl</p>
              <p>In: {scenario.sellIn} hl</p>
              <p>Target: {scenario.desired}%</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

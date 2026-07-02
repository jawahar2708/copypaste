import React from 'react';
import {
  LayoutDashboard, UserCog, BarChart3, ScrollText, Bell, Settings, LogOut,
  Menu, ChevronDown, Users, GraduationCap, Wrench, Award, FlaskConical,
  Folder, Activity, CheckCircle2, AlertTriangle, ShieldAlert, Info, User,
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: UserCog, label: 'User Management' },
  { icon: BarChart3, label: 'Reports & Analytics' },
  { icon: ScrollText, label: 'Audit Logs' },
  { icon: Bell, label: 'Notifications' },
  { icon: Settings, label: 'Settings' },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600' },
  green: { bg: 'bg-green-50', text: 'text-green-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  red: { bg: 'bg-red-50', text: 'text-red-600' },
};

const userStats = [
  { label: 'Total Users', value: '386', sub: 'Across all roles', icon: Users, color: 'indigo' },
  { label: 'Total Students', value: '312', sub: '80.8% of total users', icon: GraduationCap, color: 'blue' },
  { label: 'Technical Faculty', value: '28', sub: 'Active mentors', icon: Wrench, color: 'violet' },
  { label: 'Senior Faculty', value: '34', sub: 'Active mentors', icon: Award, color: 'purple' },
  { label: 'Lab Technicians', value: '12', sub: 'On duty', icon: FlaskConical, color: 'teal' },
];

const projectStats = [
  { label: 'Total Projects', value: '156', sub: 'Across 8 departments', icon: Folder, color: 'indigo' },
  { label: 'Active Projects', value: '98', sub: '62.8% of total', icon: Activity, color: 'green' },
  { label: 'Completed Projects', value: '42', sub: '26.9% of total', icon: CheckCircle2, color: 'emerald' },
  { label: 'Delayed Projects', value: '9', sub: 'Needs attention', icon: AlertTriangle, color: 'red', warn: true },
];

const roleChartData = [
  { name: 'Students', value: 312 },
  { name: 'Tech. Faculty', value: 28 },
  { name: 'Senior Faculty', value: 34 },
  { name: 'Lab Techs', value: 12 },
];

const projectChartData = [
  { name: 'Active', value: 98, color: '#16a34a' },
  { name: 'Completed', value: 42, color: '#4f46e5' },
  { name: 'Delayed', value: 9, color: '#dc2626' },
  { name: 'Other', value: 7, color: '#9ca3af' },
];

const alerts = [
  { severity: 'critical', message: 'Bulk upload failed — 12 records rejected in Mechanical Engineering batch', time: '18m ago' },
  { severity: 'warning', message: '5 failed login attempts detected on admin@ilp.edu', time: '1h ago' },
  { severity: 'warning', message: 'User creation failed for 3 entries — duplicate emails detected', time: '3h ago' },
  { severity: 'info', message: 'Scheduled system maintenance: Sunday, July 5, 2:00 AM – 4:00 AM', time: '1d ago' },
];

const severityStyles = {
  critical: { iconBg: 'bg-red-100', iconText: 'text-red-600', badgeBg: 'bg-red-50', badgeText: 'text-red-700', icon: ShieldAlert, label: 'Critical' },
  warning: { iconBg: 'bg-amber-100', iconText: 'text-amber-600', badgeBg: 'bg-amber-50', badgeText: 'text-amber-700', icon: AlertTriangle, label: 'Warning' },
  info: { iconBg: 'bg-blue-100', iconText: 'text-blue-600', badgeBg: 'bg-blue-50', badgeText: 'text-blue-700', icon: Info, label: 'Info' },
};

function StatCard({ label, value, sub, icon: Icon, color, warn }) {
  const c = colorMap[color];
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
          <Icon className={`w-5 h-5 ${c.text}`} />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-500 truncate">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
      {sub && (
        <p className={`text-xs mt-3 ${warn ? 'text-red-600 font-semibold' : 'text-gray-400'}`}>{sub}</p>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <aside className="w-60 shrink-0 bg-gradient-to-b from-indigo-700 to-indigo-900 flex flex-col">
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-7 h-7 text-white" />
            <span className="text-2xl font-bold text-white tracking-tight">ILP</span>
          </div>
          <p className="text-indigo-200 text-xs mt-1">Rapid Prototyping Lab</p>
        </div>

        <div className="px-6 pb-2 pt-4">
          <p className="text-indigo-300 text-xs font-semibold tracking-widest">ADMIN PORTAL</p>
        </div>

        <nav className="flex-1 px-3 mt-1 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active
                  ? 'bg-white text-indigo-700 font-semibold shadow-sm'
                  : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-3 pb-6 pt-3 border-t border-indigo-600">
          <button
            type="button"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-100 flex items-center justify-between px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Menu className="w-5 h-5 text-gray-500" />
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-xs leading-none rounded-full flex items-center justify-center">
                5
              </span>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">Admin Name</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        <main className="flex-1 px-8 py-7">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Hello, Admin Name! 👋</h2>
            <p className="text-gray-500 mt-1">Here's what's happening across ILP Rapid Prototyping Lab today.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
            {userStats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {projectStats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-1">User Statistics</h3>
              <p className="text-sm text-gray-400 mb-4">Breakdown by role</p>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={roleChartData} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f4" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: 8, border: '1px solid #eee', fontSize: 13 }} />
                  <Bar dataKey="value" fill="#4f46e5" radius={[6, 6, 0, 0]} maxBarSize={56} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-1">Project Statistics</h3>
              <p className="text-sm text-gray-400 mb-4">Status distribution</p>
              <div className="flex items-center gap-2">
                <ResponsiveContainer width="55%" height={240}>
                  <PieChart>
                    <Pie data={projectChartData} dataKey="value" nameKey="name" innerRadius={54} outerRadius={84} paddingAngle={3}>
                      {projectChartData.map((entry, i) => <Cell key={i} fill={entry.color} stroke="none" />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #eee', fontSize: 13 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-3">
                  {projectChartData.map((d) => (
                    <div key={d.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                        <span className="text-gray-600">{d.name}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-gray-900">System Alerts</h3>
              <span className="text-sm text-indigo-600 font-semibold">View All →</span>
            </div>
            <div className="divide-y divide-gray-50">
              {alerts.map((a, i) => {
                const s = severityStyles[a.severity];
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-4 py-3.5">
                    <div className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${s.iconText}`} />
                    </div>
                    <p className="text-sm text-gray-700 flex-1">{a.message}</p>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeBg} ${s.badgeText} shrink-0`}>
                      {s.label}
                    </span>
                    <span className="text-xs text-gray-400 shrink-0 w-16 text-right">{a.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            © 2025 ILP Rapid Prototyping Lab Management System. All rights reserved.
          </p>
        </main>
      </div>
    </div>
  );
}

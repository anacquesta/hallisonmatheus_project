import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Image, FileText, HelpCircle, Link as LinkIcon,
  ExternalLink, ChevronRight, User, MessageSquare
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Painel', path: '/admin' },
  { icon: Image, label: 'Hero (Topo)', path: '/admin/hero' },
  { icon: User, label: 'Sobre Mim', path: '/admin/sobre' },
  { icon: LinkIcon, label: 'Links e Contato', path: '/admin/links' },
  { icon: FileText, label: 'Artigos do Blog', path: '/admin/blog' },
  { icon: HelpCircle, label: 'Perguntas Frequentes', path: '/admin/faq' },
];

export default function AdminLayout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed top-0 bottom-0 left-0 z-40">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-800 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">HM</span>
            </div>
            <div>
              <p className="text-gray-900 text-sm font-semibold">Painel Admin</p>
              <p className="text-gray-400 text-xs">Hallison Matheus</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  active
                    ? 'bg-amber-50 text-amber-800 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className={`w-4 h-4 flex-shrink-0 ${active ? 'text-amber-700' : 'text-gray-400'}`} />
                {item.label}
                {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-amber-600" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver site ao vivo
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
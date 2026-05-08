'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, LogOut } from 'lucide-react';
import { useAdmin } from '../../../context/AdminContext';

type ManagerProps = {
  token: string;
};

type DashboardTab = 'projects' | 'skills' | 'experience' | 'education' | 'profile' | 'messages';

export default function AdminDashboard() {
  const router = useRouter();
  const { adminToken, adminUser, logout, isLoading } = useAdmin();
  const [activeTab, setActiveTab] = useState<DashboardTab>('projects');

  useEffect(() => {
    if (!isLoading && !adminToken) {
      router.push('/admin/login');
    }
  }, [adminToken, isLoading, router]);

  if (isLoading || !adminToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const tabs: Array<{ id: DashboardTab; label: string }> = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'profile', label: 'Profile' },
    { id: 'messages', label: 'Messages' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-xs text-gray-400">Welcome, {adminUser?.username}</p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-all border border-red-500/30"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-linear-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 shadow-2xl">
          {activeTab === 'projects' && <ProjectsManager token={adminToken} />}
          {activeTab === 'skills' && <SkillsManager token={adminToken} />}
          {activeTab === 'experience' && <ExperienceManager token={adminToken} />}
          {activeTab === 'education' && <EducationManager token={adminToken} />}
          {activeTab === 'profile' && <ProfileManager />}
          {activeTab === 'messages' && <MessagesManager token={adminToken} />}
        </div>
      </div>
    </div>
  );
}

function ProjectsManager({ token }: ManagerProps) {
  const [projects, setProjects] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', tech_stack: '', github_link: '', live_link: '' });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setProjects(await response.json());
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleAddProject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ title: '', description: '', tech_stack: '', github_link: '', live_link: '' });
        setShowForm(false);
        fetchProjects();
      }
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDeleteProject = async (id: number) => {
    if (!confirm('Delete this project?')) return;
    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:opacity-90 transition-all"
        >
          <Plus size={20} /> Add Project
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddProject} className="mb-6 p-4 bg-slate-700/50 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Tech Stack (comma separated)"
            value={formData.tech_stack}
            onChange={(e) => setFormData({ ...formData, tech_stack: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="GitHub Link"
            value={formData.github_link}
            onChange={(e) => setFormData({ ...formData, github_link: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="Live Link"
            value={formData.live_link}
            onChange={(e) => setFormData({ ...formData, live_link: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Add Project
          </button>
        </form>
      )}

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-slate-700/50 rounded-lg flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{project.description}</p>
              {project.tech_stack && <p className="text-xs text-gray-400 mt-2">Tech: {project.tech_stack}</p>}
            </div>
            <button
              onClick={() => handleDeleteProject(project.id)}
              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-all"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsManager({ token }: ManagerProps) {
  const [skills, setSkills] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: 'frontend', level: 'intermediate' });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch('/api/admin/skills', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setSkills(await response.json());
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const handleAddSkill = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/skills', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: '', category: 'frontend', level: 'intermediate' });
        setShowForm(false);
        fetchSkills();
      }
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  const handleDeleteSkill = async (id: number) => {
    if (!confirm('Delete this skill?')) return;
    try {
      const response = await fetch(`/api/admin/skills/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) fetchSkills();
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Manage Skills</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:opacity-90"
        >
          <Plus size={20} /> Add Skill
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddSkill} className="mb-6 p-4 bg-slate-700/50 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Skill Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">Database</option>
            <option value="tools">Tools</option>
          </select>
          <select
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Add Skill
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="p-4 bg-slate-700/50 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="text-xs text-gray-400 capitalize">{skill.category} • {skill.level}</p>
            </div>
            <button
              onClick={() => handleDeleteSkill(skill.id)}
              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-all"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceManager({ token }: ManagerProps) {
  const [experience, setExperience] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', organization: '', start_date: '', end_date: '', description: '' });

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    try {
      const response = await fetch('/api/admin/experience', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setExperience(await response.json());
      }
    } catch (error) {
      console.error('Error fetching experience:', error);
    }
  };

  const handleAddExperience = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/experience', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ title: '', organization: '', start_date: '', end_date: '', description: '' });
        setShowForm(false);
        fetchExperience();
      }
    } catch (error) {
      console.error('Error adding experience:', error);
    }
  };

  const handleDeleteExperience = async (id: number) => {
    if (!confirm('Delete this experience entry?')) return;
    try {
      const response = await fetch(`/api/admin/experience/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) fetchExperience();
    } catch (error) {
      console.error('Error deleting experience:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Manage Experience</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:opacity-90"
        >
          <Plus size={20} /> Add Experience
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddExperience} className="mb-6 p-4 bg-slate-700/50 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Job Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Organization/Company"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={formData.start_date}
              onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
              className="px-4 py-2 rounded-lg bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={formData.end_date}
              onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
              className="px-4 py-2 rounded-lg bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Add Experience
          </button>
        </form>
      )}

      <div className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.id} className="p-4 bg-slate-700/50 rounded-lg flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <p className="text-sm text-gray-300">{exp.organization}</p>
              {exp.description && <p className="text-sm text-gray-400 mt-2">{exp.description}</p>}
              {(exp.start_date || exp.end_date) && (
                <p className="text-xs text-gray-500 mt-2">
                  {exp.start_date ? new Date(exp.start_date).toLocaleDateString() : ''}
                  {exp.end_date ? ` - ${new Date(exp.end_date).toLocaleDateString()}` : ''}
                </p>
              )}
            </div>
            <button
              onClick={() => handleDeleteExperience(exp.id)}
              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-all"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationManager({ token }: ManagerProps) {
  const [education, setEducation] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ institution: '', department: '', year_level: '', description: '' });

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const response = await fetch('/api/admin/education', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setEducation(await response.json());
      }
    } catch (error) {
      console.error('Error fetching education:', error);
    }
  };

  const handleAddEducation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/education', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ institution: '', department: '', year_level: '', description: '' });
        setShowForm(false);
        fetchEducation();
      }
    } catch (error) {
      console.error('Error adding education:', error);
    }
  };

  const handleDeleteEducation = async (id: number) => {
    if (!confirm('Delete this education entry?')) return;
    try {
      const response = await fetch(`/api/admin/education/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) fetchEducation();
    } catch (error) {
      console.error('Error deleting education:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Manage Education</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:opacity-90 transition-all"
        >
          <Plus size={20} /> Add Education
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddEducation} className="mb-6 p-4 bg-slate-700/50 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="University / Institution"
            value={formData.institution}
            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Year Level (e.g. 3rd Year)"
            value={formData.year_level}
            onChange={(e) => setFormData({ ...formData, year_level: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Add Education
          </button>
        </form>
      )}

      <div className="space-y-4">
        {education.map((item) => (
          <div key={item.id} className="p-4 bg-slate-700/50 rounded-lg flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{item.institution}</h3>
              <p className="text-sm text-gray-300">{item.department} • {item.year_level}</p>
              {item.description && <p className="text-sm text-gray-400 mt-2">{item.description}</p>}
            </div>
            <button
              onClick={() => handleDeleteEducation(item.id)}
              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-all"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileManager() {
  return (
    <div className="text-center py-12">
      <p className="text-gray-300 text-lg mb-4">Profile management coming soon</p>
      <p className="text-gray-500">Update your bio, image, and other profile details here</p>
    </div>
  );
}

function MessagesManager({ token }: ManagerProps) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setMessages(await response.json());
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleDeleteMessage = async (id: number) => {
    if (!confirm('Delete this message?')) return;
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) fetchMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Contact Messages</h2>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No messages yet</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="p-4 bg-slate-700/50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-white">{message.name}</p>
                  <p className="text-sm text-gray-400">{message.email}</p>
                </div>
                <button
                  onClick={() => handleDeleteMessage(message.id)}
                  className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
              <p className="text-gray-300 text-sm">{message.message}</p>
              {message.created_at && (
                <p className="text-xs text-gray-500 mt-2">{new Date(message.created_at).toLocaleString()}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Clock,
  Users,
  Flag,
  Plus,
  ChevronDown,
  Trash2,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

const statusColors = {
  active: "bg-green-500",
  pending: "bg-yellow-500",
  completed: "bg-primary",
  paused: "bg-orange-400",
};

const statusLabels = {
  active: "Active",
  pending: "Pending",
  completed: "Completed",
  paused: "Paused",
};

const defaultProjects = [
  {
    id: 1,
    name: "EcoTrack — Green Analytics",
    sprint: "Sprint 3 · Week 2",
    status: "active",
    tasks: [
      { id: 1, title: "Design landing page", status: "done" },
      { id: 2, title: "Build MVP backend", status: "done" },
      { id: 3, title: "User testing round 1", status: "in-progress" },
      { id: 4, title: "Pitch deck preparation", status: "todo" },
      { id: 5, title: "Launch on Product Hunt", status: "todo" },
    ],
    team: [
      { name: "Arya S.", role: "Designer", color: "bg-primary" },
      { name: "Ravi K.", role: "Developer", color: "bg-accent" },
      { name: "Priya M.", role: "Marketer", color: "bg-ring" },
    ],
    milestones: [
      { label: "Ideation", done: true },
      { label: "MVP", done: true },
      { label: "Beta Launch", done: false },
      { label: "Growth", done: false },
    ],
  },
  {
    id: 2,
    name: "SkillBridge — Peer Learning",
    sprint: "Sprint 1 · Week 4",
    status: "pending",
    tasks: [
      { id: 1, title: "Market research", status: "done" },
      { id: 2, title: "Wireframe UI flows", status: "in-progress" },
      { id: 3, title: "Setup database schema", status: "todo" },
      { id: 4, title: "Build matching algorithm", status: "todo" },
    ],
    team: [
      { name: "Neha T.", role: "PM", color: "bg-primary" },
      { name: "Amit D.", role: "Full Stack", color: "bg-accent" },
    ],
    milestones: [
      { label: "Research", done: true },
      { label: "Design", done: false },
      { label: "Development", done: false },
      { label: "Launch", done: false },
    ],
  },
  {
    id: 3,
    name: "FoodLoop — Zero Waste App",
    sprint: "Sprint 5 · Week 1",
    status: "completed",
    tasks: [
      { id: 1, title: "App design finalized", status: "done" },
      { id: 2, title: "Backend API complete", status: "done" },
      { id: 3, title: "Beta testing done", status: "done" },
      { id: 4, title: "App Store submission", status: "done" },
    ],
    team: [
      { name: "Sara L.", role: "Designer", color: "bg-primary" },
      { name: "Karan P.", role: "iOS Dev", color: "bg-accent" },
      { name: "Meera J.", role: "Backend", color: "bg-ring" },
    ],
    milestones: [
      { label: "Ideation", done: true },
      { label: "MVP", done: true },
      { label: "Beta", done: true },
      { label: "Launch", done: true },
    ],
  },
];

const LiveExperienceSection = () => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("hive-projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || 1);
  const [showProjectList, setShowProjectList] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("hive-projects", JSON.stringify(projects));
  }, [projects]);

  // Timer
  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const getProgress = (project) => {
    if (!project.tasks.length) return 0;
    const done = project.tasks.filter((t) => t.status === "done").length;
    return Math.round((done / project.tasks.length) * 100);
  };

  const toggleTask = (taskId) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === activeProjectId
          ? {
              ...p,
              tasks: p.tasks.map((t) => {
                if (t.id !== taskId) return t;
                if (t.status === "done") return { ...t, status: "todo" };
                if (t.status === "todo") return { ...t, status: "in-progress" };
                return { ...t, status: "done" };
              }),
            }
          : p
      )
    );
  };

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === activeProjectId
          ? {
              ...p,
              tasks: [
                ...p.tasks,
                { id: Date.now(), title: newTaskTitle.trim(), status: "todo" },
              ],
            }
          : p
      )
    );
    setNewTaskTitle("");
  };

  const removeTask = (taskId) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === activeProjectId
          ? { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }
          : p
      )
    );
  };

  const changeProjectStatus = (status) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === activeProjectId ? { ...p, status } : p))
    );
  };

  const toggleMilestone = (index) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === activeProjectId
          ? {
              ...p,
              milestones: p.milestones.map((m, i) =>
                i === index ? { ...m, done: !m.done } : m
              ),
            }
          : p
      )
    );
  };

  const addProject = () => {
    if (!newProjectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: newProjectName.trim(),
      sprint: "Sprint 1 · Week 1",
      status: "pending",
      tasks: [],
      team: [],
      milestones: [
        { label: "Ideation", done: false },
        { label: "MVP", done: false },
        { label: "Beta", done: false },
        { label: "Launch", done: false },
      ],
    };
    setProjects((prev) => [...prev, newProject]);
    setActiveProjectId(newProject.id);
    setNewProjectName("");
    setShowAddProject(false);
  };

  const progress = getProgress(activeProject);

  return (
    <section id="dashboard" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-gradient-gold">Dashboard</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-time tracking across all your startup projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Project Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProjectId(p.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  p.id === activeProjectId
                    ? "gradient-gold text-primary-foreground"
                    : "glass-card hover:bg-secondary/80 text-foreground"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${statusColors[p.status]}`}
                />
                <span className="truncate max-w-[120px] md:max-w-none">
                  {p.name.split("—")[0].trim()}
                </span>
              </button>
            ))}
            <button
              onClick={() => setShowAddProject(!showAddProject)}
              className="p-2 rounded-lg glass-card hover:bg-secondary/80 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Add Project */}
          <AnimatePresence>
            {showAddProject && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="flex gap-2">
                  <input
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addProject()}
                    placeholder="New project name..."
                    className="flex-1 bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  />
                  <button
                    onClick={addProject}
                    className="gradient-gold text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Create
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dashboard Card */}
          <div className="glass-card rounded-2xl border-glow overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border-b border-border gap-4">
              <div>
                <h3 className="font-heading text-lg font-bold">
                  {activeProject.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {activeProject.sprint}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* Timer */}
                <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-lg">
                  <Clock size={14} className="text-primary" />
                  <span className="text-sm font-mono font-bold">
                    {formatTime(timer)}
                  </span>
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="hover:text-primary transition-colors"
                  >
                    {timerRunning ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                  <button
                    onClick={() => {
                      setTimer(0);
                      setTimerRunning(false);
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>

                {/* Status dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowProjectList(!showProjectList)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      activeProject.status === "active"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : activeProject.status === "completed"
                        ? "gradient-gold text-primary-foreground"
                        : activeProject.status === "paused"
                        ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        statusColors[activeProject.status]
                      }`}
                    />
                    {statusLabels[activeProject.status]}
                    <ChevronDown size={12} />
                  </button>
                  <AnimatePresence>
                    {showProjectList && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute right-0 top-full mt-2 glass-card border border-border rounded-lg overflow-hidden z-10 min-w-[140px]"
                      >
                        {Object.entries(statusLabels).map(([key, label]) => (
                          <button
                            key={key}
                            onClick={() => {
                              changeProjectStatus(key);
                              setShowProjectList(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-secondary/80 transition-colors text-left"
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${statusColors[key]}`}
                            />
                            {label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-6">
              {/* Progress + Tasks */}
              <div className="md:col-span-2">
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">Overall Progress</span>
                  <span className="text-primary text-sm font-bold">
                    {progress}%
                  </span>
                </div>
                <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-6">
                  <motion.div
                    key={progress}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      progress === 100 ? "bg-green-500" : "gradient-gold"
                    }`}
                  />
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    {
                      label: "Done",
                      count: activeProject.tasks.filter(
                        (t) => t.status === "done"
                      ).length,
                      color: "text-green-400",
                    },
                    {
                      label: "In Progress",
                      count: activeProject.tasks.filter(
                        (t) => t.status === "in-progress"
                      ).length,
                      color: "text-accent",
                    },
                    {
                      label: "To Do",
                      count: activeProject.tasks.filter(
                        (t) => t.status === "todo"
                      ).length,
                      color: "text-muted-foreground",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-secondary/50 rounded-lg p-3 text-center"
                    >
                      <div className={`text-2xl font-bold ${s.color}`}>
                        {s.count}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tasks */}
                <h4 className="text-sm font-semibold mb-3">Tasks</h4>
                <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                  <AnimatePresence>
                    {activeProject.tasks.map((t) => (
                      <motion.div
                        key={t.id}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors group"
                      >
                        <button
                          onClick={() => toggleTask(t.id)}
                          className="flex-shrink-0"
                        >
                          {t.status === "done" ? (
                            <CheckCircle2
                              size={16}
                              className="text-green-400"
                            />
                          ) : t.status === "in-progress" ? (
                            <Clock size={16} className="text-accent" />
                          ) : (
                            <Circle
                              size={16}
                              className="text-muted-foreground"
                            />
                          )}
                        </button>
                        <span
                          className={`text-sm flex-1 ${
                            t.status === "done"
                              ? "line-through text-muted-foreground"
                              : ""
                          }`}
                        >
                          {t.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                          {t.status === "done"
                            ? "Done"
                            : t.status === "in-progress"
                            ? "Active"
                            : "Pending"}
                        </span>
                        <button
                          onClick={() => removeTask(t.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Add Task */}
                <div className="flex gap-2 mt-4">
                  <input
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="Add a new task..."
                    className="flex-1 bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    onClick={addTask}
                    className="gradient-gold text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Team + Milestones */}
              <div className="space-y-6">
                {/* Team */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users size={16} className="text-primary" />
                    <span className="text-sm font-semibold">Team</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {activeProject.team.length} members
                    </span>
                  </div>
                  <div className="space-y-3">
                    {activeProject.team.length ? (
                      activeProject.team.map((m) => (
                        <div key={m.name} className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full ${m.color} flex items-center justify-center text-xs font-bold text-primary-foreground`}
                          >
                            {m.name[0]}
                          </div>
                          <div>
                            <div className="text-sm font-medium">{m.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {m.role}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        No team members yet
                      </p>
                    )}
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Flag size={16} className="text-primary" />
                    <span className="text-sm font-semibold">Milestones</span>
                  </div>
                  <div className="space-y-2">
                    {activeProject.milestones.map((m, i) => (
                      <button
                        key={m.label}
                        onClick={() => toggleMilestone(i)}
                        className="flex items-center gap-3 w-full text-left hover:bg-secondary/50 rounded-lg px-2 py-1.5 transition-colors"
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            m.done ? "bg-green-400" : "bg-muted"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            m.done
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {m.label}
                        </span>
                        {m.done && (
                          <CheckCircle2
                            size={12}
                            className="text-green-400 ml-auto"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div>
                  <span className="text-sm font-semibold block mb-3">
                    Quick Actions
                  </span>
                  <div className="space-y-2">
                    <button
                      onClick={() => changeProjectStatus("active")}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm hover:bg-green-500/20 transition-colors"
                    >
                      <Play size={14} /> Start Project
                    </button>
                    <button
                      onClick={() => changeProjectStatus("paused")}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm hover:bg-orange-500/20 transition-colors"
                    >
                      <Pause size={14} /> Pause Project
                    </button>
                    <button
                      onClick={() => changeProjectStatus("completed")}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm hover:bg-primary/20 transition-colors"
                    >
                      <CheckCircle2 size={14} /> Mark Complete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveExperienceSection;

import React, { useState, useEffect, useRef } from 'react';

const portfolio = {
  "about.md": {
    isFolder: false,
    content: (
      <div className="max-w-xl">
        <p>Zarin Subah</p>
        <p className="text-gray-400 mt-1">Software Developer</p>
        <p className="text-gray-400 mt-1">Interested in:</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Backend Development & APIs</li>
          <li>Machine Learning</li>
        </ul>

      </div>
    )
  },
  "experience.txt": {
    isFolder: false,
    content: (
      <div className="space-y-4">
        <div>
          <span className="text-yellow-500">Project Developer @ Blueprint</span>
          <p className="text-gray-400 text-sm">Oct. 2025 - Present</p>
          <p className="text-gray-300">- Go, PostgreSQL. Deployed on Supabase.</p>
          <p className="text-gray-300">- Developing the backend of an application portal.</p> 
        </div>
        <div>
          <span className="text-yellow-500">Research Assistant - University of Alberta</span>
          <p className="text-gray-400 text-sm">May 2025 - Aug. 2025</p>
          <p className="text-gray-300">- Developed a Java/C++ graphics rendering application.</p>
          <p className="text-gray-300">- Research project: Finding Periodic trajectories on a billards table.</p>
        </div>
      </div>
    )
  },
  "projects": {
    isFolder: true,
    children: {
      "tinker": {
        isFolder: false,
        content: (
          <div>
            <p className="text-green-500">Recommendation system using Stochastic Gradient Descent</p>
            <p className="text-gray-400">Mobile app & web scraping service: Python, Selenium, Java, Android Studio.</p>
            <a href="https://github.com/tinker-app/tinker" className="text-blue-500 underline">Github</a>
          </div>
        )
      },
      "web-crawler": {
        isFolder: false,
        content: (
          <div>
            <p className="text-green-500">Web Crawler & Search Engine</p>
            <p className="text-gray-400">React frontend & Spring backend with MongoDB.</p>
            <p className="text-gray-400">Used Inverted Index table for fast queries.</p>
            <a href="https://github.com/Zarin21/Web-Crawler " className="text-blue-500 underline">Github</a>
          </div>
        )
      },
      "regression-model": {
        isFolder: false,
        content: (
          <div>
            <p className="text-green-500">Focus tracking service</p>
            <p className="text-gray-400">Machine learning with EEG brainwaves and pupil diameter to infer real-time productivity.</p>
            <p className="text-gray-400">Frontend: React & WebSockets, Backend: FastAPI, Node.js, DB: Pocketbase with SQLite</p>
            <a href="https://github.com/LeFocus/regression-model" className="text-blue-500 underline">Github</a>
          </div>
        )
      }
    }
  },

  "links.txt": {
    isFolder: false,
    content: (
      <div className="flex flex-col">
        <a href="https://github.com/Zarin21" className="text-blue-500 hover:underline">github.com/Zarin21</a>
        <a href="https://linkedin.com/in/zsubah" className="text-blue-500 hover:underline">linkedin.com/in/zsubah</a>
        <a href="mailto:zszarin021@gmail.com" className="text-blue-500 hover:underline">zszarin021@gmail.com</a>
      </div>
    )
  }
};

const AVAILABLE_COMMANDS = ['ls', 'cat', 'cd', 'clear', 'help', 'open'];

const Prompt = ({ path = "~" }) => (
  <div className="flex gap-1 mr-2 whitespace-nowrap">
    <span className="text-green-400">guest@Zarin-MacBook</span>
    <span className="text-blue-400">{path === "~" ? "" : path}$</span>
  </div>
);

const BOOT_TIME = new Date("2025-11-28T17:00:00"); 

const calculateUptime = () => {
  const now = new Date();
  const diff = now - BOOT_TIME;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  return `${days} days, ${hours} hours, ${mins} mins`;
};  

const Neofetch = () => {
    const uptimeString = calculateUptime();

    const colorMap = {
        'red': 'text-red-500',
        'green': 'text-green-500',
        'yellow': 'text-yellow-500',
        'blue': 'text-blue-500',
        'magenta': 'text-purple-500',
        'cyan': 'text-cyan-500',
        'white': 'text-white',
        'gray': 'text-gray-500',
    };

    const neofetchLines = [
        [{ text: "", color: 'white' }, "zarinsubah@Mac.ht.home", ""],
        [{ text: "                ,xNMM.", color: 'white' }, "----------------------", ""],
        [{ text: "              .OMMMMo", color: 'white' }, "OS: ", { text: "macOS 15.1.1 24B91 arm64", color: 'white' }],
        [{ text: "              OMMM0,", color: 'white' }, "Host: ", { text: "Mac15,12", color: 'white' }],
        [{ text: "    .;loddo:' loolloddol;.", color: 'white' }, "Kernel: ", { text: "24.1.0", color: 'white' }],
        [{ text: "  cKMMMMMMMMMMNWMMMMMMMMMM0:", color: 'white' }, "Uptime: ", { text: uptimeString, color: 'white' }],
        [{ text: ".KMMMMMMMMMMMMMMMMMMMMMMMWd.", color: 'white' }, "Packages: ", { text: "235 (brew)", color: 'white' }],
        [{ text: "XMMMMMMMMMMMMMMMMMMMMMMMX.", color: 'white' }, "Shell: ", { text: "zsh 5.9", color: 'white' }],
        [{ text: ";MMMMMMMMMMMMMMMMMMMMMMMM:", color: 'white' }, "Resolution: ", { text: "1470x956", color: 'white' }],
        [{ text: ":MMMMMMMMMMMMMMMMMMMMMMMM:", color: 'white' }, "DE: ", { text: "Aqua", color: 'white' }],
        [{ text: ".MMMMMMMMMMMMMMMMMMMMMMMMX.", color: 'white' }, "WM: ", { text: "Quartz Compositor", color: 'white' }],
        [{ text: "kMMMMMMMMMMMMMMMMMMMMMMMMWd.", color: 'white' }, "WM Theme: ", { text: "Blue (Dark)", color: 'white' }],
        [{ text: ".XMMMMMMMMMMMMMMMMMMMMMMMMMMk", color: 'white' }, "Terminal: ", { text: "Apple_Terminal", color: 'white' }],
        [{ text: " .XMMMMMMMMMMMMMMMMMMMMMMMMK.", color: 'white' }, "Terminal Font: ", { text: "SFMono-Regular", color: 'white' }],
        [{ text: "  kMMMMMMMMMMMMMMMMMMMMMMd", color: 'white' }, "CPU: ", { text: "Apple M3", color: 'white' }],
        [{ text: "    ;KMMMMMMMWXXWMMMMMMMk.", color: 'white' }, "GPU: ", { text: "Apple M3", color: 'white' }],
        [{ text: "      .cooc,.   .,coo:.", color: 'white' }, "Memory: ", { text: "2611MiB / 16384MiB", color: 'white' }],
        [{ text: "", color: 'white' }, "", ""], 
        [{ text: "                          ", color: 'white' }, "   ", { text: "   ", color: 'red' }, { text: "   ", color: 'green' }, { text: "   ", color: 'yellow' }, { text: "   ", color: 'blue' }, { text: "   ", color: 'magenta' }, { text: "   ", color: 'cyan' }, { text: "   ", color: 'white' }], 
    ];

    const logoWidth = 37;

    return (
        <pre className="text-xs mb-4 leading-tight">
            {neofetchLines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex">
                    <span style={{ minWidth: `${logoWidth}ch` }}> 
                        {line[0] && (
                            <span className={typeof line[0] === 'object' ? colorMap[line[0].color] || 'text-white' : 'text-gray-500'}>
                                {typeof line[0] === 'string' ? line[0] : line[0].text}
                            </span>
                        )}
                    </span>
                    <span>
                        {line.slice(1).map((item, colIndex) => {
                            const text = typeof item === 'string' ? item : item.text;
                            const colorClass = typeof item === 'object' ? colorMap[item.color] || 'text-gray-400' : 'text-gray-400';
                            return (
                                <span key={colIndex} className={colorClass}>
                                    {text}
                                </span>
                            );
                        })}
                    </span>
                </div>
            ))}
        </pre>
    );
};  

export default function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [currentPath, setCurrentPath] = useState("~");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (commandString) => {
    const trimmedCommand = commandString.trim();
    const [cmd, arg] = trimmedCommand.split(/\s+/);
    
    let output;
    
    if (!trimmedCommand) {
        output = null;
    } 
    else if (cmd === 'clear') {
        setHistory([]);
        return;
    } 
    else if (cmd === 'help') {
        output = <div className="text-gray-500">Available commands: ls, cat, cd, clear, help, open</div>;
    }
    else if (cmd === 'cd') {
        if (!arg || arg === '~' || arg === '/') {
            setCurrentPath("~");
            output = null;
        } else if (arg === '..') {
            if (currentPath !== "~") {
                setCurrentPath("~");
                output = null;
            } else {
                output = null;
            }
        } else {
            if (portfolio[arg] && portfolio[arg].isFolder) {
                setCurrentPath(arg);
                output = null;
            } else {
                output = `zsh: cd: ${arg}: Not a directory`;
            }
        }
    }
    else if (cmd === 'ls') {
        const folderKey = currentPath === "~" ? "~" : currentPath;
        if (folderKey === "~") {
            output = (
                <div className="flex flex-wrap gap-4 text-sm">
                    {Object.keys(portfolio).map(key => {
                        const item = portfolio[key];
                        return (
                            <span key={key} className={item.isFolder ? 'text-blue-400 font-bold' : 'text-white'}>
                                {key}{item.isFolder ? '/' : ''}
                            </span>
                        );
                    })}
                </div>
            );
        } else {
            const folder = portfolio[folderKey];
            if (folder && folder.children) {
                output = (
                    <div className="flex flex-wrap gap-4 text-sm">
                        {Object.keys(folder.children).map(key => (
                            <span key={key} className="text-white">
                                {key}
                            </span>
                        ))}
                    </div>
                );
            } else {
                output = `ls: ${folderKey}: No such file or directory`;
            }
        }
    } 
    else if (cmd === 'cat' || cmd === 'open') {
        if (!arg) {
            output = `usage: ${cmd} [file]`;
        } else {
            let fileToDisplay = null;
            let targetFileName = arg;
            let targetFolderName = null; 

            if (arg.includes('/')) {
                const parts = arg.split('/');
                if (parts.length === 2) {
                    targetFolderName = parts[0];
                    targetFileName = parts[1];
                }
            } else if (currentPath !== "~") {
                targetFolderName = currentPath; 
            }

            if (targetFolderName && portfolio[targetFolderName] && portfolio[targetFolderName].children && portfolio[targetFolderName].children[targetFileName]) {
                 fileToDisplay = portfolio[targetFolderName].children[targetFileName];
            }
            else if (portfolio[arg]) {
                fileToDisplay = portfolio[arg];
            }

            if (fileToDisplay) {
                if (fileToDisplay.isFolder) {
                    output = `${cmd}: ${arg}: Is a directory`;
                } else {
                    output = fileToDisplay.content;
                }
            } else {
                output = `zsh: no such file or directory: ${arg}`;
            }
        }
    } 
    else {
        output = `zsh: command not found: ${cmd}`;
    }

    setHistory([...history, { cmd: commandString, output, path: currentPath }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput("");
    }
    else if (e.key === 'Tab') {
      e.preventDefault(); 
      
      const parts = input.split(' ');
      const cmd = parts[0];
      const arg = parts[1] || '';

      if (parts.length === 1) {
        const matches = AVAILABLE_COMMANDS.filter(c => c.startsWith(cmd));
        if (matches.length === 1) {
            setInput(matches[0] + ' ');
        }
      } 
      
      else if (parts.length === 2) {
        let options = Object.keys(portfolio); // Top-level options
        if (currentPath !== "~") {
            const folder = portfolio[currentPath];
            if (folder && folder.children) {
                options = [...options, ...Object.keys(folder.children)];
            }
        }
        
        const matches = options.filter(f => f.startsWith(arg));

        if (matches.length === 1) {
            if (portfolio[matches[0]]) {
                setInput(`${cmd} ${matches[0]}`);
            } else if (currentPath !== "~" && portfolio[currentPath].children && portfolio[currentPath].children[matches[0]]) {
                setInput(`${cmd} ${matches[0]}`);
            }
        }
      }
    }
  };

  return (
    <div 
      className="min-h-screen text-white font-mono text-sm p-4 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#282c34' }}
    >
      <div 
        className="mx-auto border border-gray-700 rounded-lg shadow-lg overflow-hidden" 
        style={{ width: '1000px', backgroundColor: '#1a1a1a' }}
      >
        <div className="flex items-center justify-between p-2" style={{ backgroundColor: '#3c3c3c' }}> 
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-default"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-default"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-default"></div>
          </div>
          <div className="text-xs text-gray-300">zsh</div>
          <div></div> 
        </div>

        <div className="p-4">
            <Neofetch />
            
            <div className="mb-2 text-gray-400">
                Welcome to my portfolio website! Use the terminal below to explore my work. Type <span className="text-yellow-300">help</span> to see available commands.
            </div>
            
            {history.map((entry, index) => (
            <div key={index} className="mb-2">
                <div className="flex">
                <Prompt path={entry.path === "~" ? "~" : entry.path} />
                <span>{entry.cmd}</span>
                </div>
                {entry.output && <div className="mt-1 text-gray-200">{entry.output}</div>}
            </div>
            ))}

            <div className="flex" ref={bottomRef}>
            <Prompt path={currentPath} />
            <input
                ref={inputRef}
                className="bg-transparent outline-none flex-1 text-white"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                spellCheck="false"
                autoComplete="off"
            />
            </div>
        </div>
      </div>
    </div>
  );
} 
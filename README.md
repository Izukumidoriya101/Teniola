<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 3s infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            min-height: 100vh;
        }
        
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }

        .glass-card:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .glass-nav {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.6;
            z-index: -1;
        }

        .orb-1 {
            width: 400px;
            height: 400px;
            background: rgba(255, 0, 128, 0.4);
            top: 10%;
            left: 10%;
            animation: float 8s ease-in-out infinite;
        }

        .orb-2 {
            width: 300px;
            height: 300px;
            background: rgba(0, 255, 255, 0.4);
            bottom: 20%;
            right: 10%;
            animation: float 10s ease-in-out infinite reverse;
        }

        .orb-3 {
            width: 250px;
            height: 250px;
            background: rgba(255, 255, 0, 0.3);
            top: 50%;
            left: 50%;
            animation: float 12s ease-in-out infinite;
        }

        .skill-bar {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 9999px;
            overflow: hidden;
        }

        .skill-progress {
            background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));
            height: 100%;
            border-radius: 9999px;
            transition: width 1.5s ease-out;
        }

        .nav-link {
            position: relative;
            overflow: hidden;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: white;
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .project-image {
            transition: transform 0.5s ease;
        }

        .glass-card:hover .project-image {
            transform: scale(1.05);
        }

        .social-icon {
            transition: all 0.3s ease;
        }

        .social-icon:hover {
            transform: translateY(-3px) rotate(5deg);
            background: rgba(255, 255, 255, 0.2);
        }

        .typing-cursor::after {
            content: '|';
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .scroll-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="text-white overflow-x-hidden">

    <!-- Background Orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <!-- Navigation -->
    <nav class="glass-nav fixed w-full z-50 px-6 py-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="text-2xl font-bold tracking-tighter">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">PORTFOLIO</span>
            </div>
            <div class="hidden md:flex space-x-8">
                <a href="#home" class="nav-link text-sm font-medium tracking-wide hover:text-white/80 transition">HOME</a>
                <a href="#about" class="nav-link text-sm font-medium tracking-wide hover:text-white/80 transition">ABOUT</a>
                <a href="#skills" class="nav-link text-sm font-medium tracking-wide hover:text-white/80 transition">SKILLS</a>
                <a href="#projects" class="nav-link text-sm font-medium tracking-wide hover:text-white/80 transition">PROJECTS</a>
                <a href="#contact" class="nav-link text-sm font-medium tracking-wide hover:text-white/80 transition">CONTACT</a>
            </div>
            <button class="md:hidden text-2xl" onclick="toggleMenu()">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" class="block text-center py-2 hover:bg-white/10 rounded-lg transition">Home</a>
            <a href="#about" class="block text-center py-2 hover:bg-white/10 rounded-lg transition">About</a>
            <a href="#skills" class="block text-center py-2 hover:bg-white/10 rounded-lg transition">Skills</a>
            <a href="#projects" class="block text-center py-2 hover:bg-white/10 rounded-lg transition">Projects</a>
            <a href="#contact" class="block text-center py-2 hover:bg-white/10 rounded-lg transition">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div class="glass rounded-3xl p-8 md:p-12 scroll-reveal">
                <div class="mb-4 inline-block px-4 py-1 rounded-full glass-card text-sm font-medium">
                    <i class="fas fa-circle text-green-400 text-xs mr-2 animate-pulse"></i>Available for work
                </div>
                <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Creative<br>
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60 typing-cursor" id="typingText">Developer</span>
                </h1>
                <p class="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                    Crafting digital experiences with modern technologies. Specialized in building beautiful, functional, and user-centered applications.
                </p>
                <div class="flex flex-wrap gap-4">
                    <button class="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:scale-105 transition transform shadow-lg hover:shadow-xl">
                        View Work
                    </button>
                    <button class="px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 transition border border-white/30">
                        Contact Me
                    </button>
                </div>
                <div class="mt-8 flex space-x-4">
                    <a href="#" class="social-icon w-10 h-10 rounded-full glass flex items-center justify-center">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="social-icon w-10 h-10 rounded-full glass flex items-center justify-center">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="social-icon w-10 h-10 rounded-full glass flex items-center justify-center">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon w-10 h-10 rounded-full glass flex items-center justify-center">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </div>
            </div>
            <div class="relative scroll-reveal">
                <div class="glass rounded-3xl p-2 transform rotate-3 hover:rotate-0 transition duration-500">
                    <div class="bg-gradient-to-br from-white/20 to-white/5 rounded-2xl h-96 md:h-[500px] flex items-center justify-center overflow-hidden relative">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <i class="fas fa-user text-9xl text-white/20"></i>
                        <div class="absolute bottom-6 left-6 right-6">
                            <div class="glass rounded-xl p-4">
                                <div class="flex items-center space-x-3">
                                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span class="text-sm font-medium">Currently working on</span>
                                </div>
                                <p class="text-white/80 text-sm mt-1">Next.js & Three.js Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Floating Elements -->
                <div class="absolute -top-6 -right-6 glass rounded-2xl p-4 animate-float">
                    <i class="fas fa-code text-2xl text-yellow-300"></i>
                </div>
                <div class="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float-delayed">
                    <i class="fas fa-palette text-2xl text-pink-300"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="glass rounded-3xl p-8 md:p-16 scroll-reveal">
                <div class="grid md:grid-cols-3 gap-12">
                    <div class="md:col-span-1">
                        <h2 class="text-4xl font-bold mb-4">About Me</h2>
                        <div class="w-20 h-1 bg-white/50 rounded-full"></div>
                    </div>
                    <div class="md:col-span-2 space-y-6">
                        <p class="text-xl text-white/90 leading-relaxed">
                            I'm a passionate developer and designer with over 5 years of experience creating digital products that make a difference. My approach combines technical expertise with creative thinking.
                        </p>
                        <p class="text-white/70 leading-relaxed">
                            I specialize in building scalable web applications using modern technologies like React, Node.js, and cloud infrastructure. When I'm not coding, you'll find me exploring new design trends or contributing to open-source projects.
                        </p>
                        <div class="grid grid-cols-3 gap-6 pt-6">
                            <div class="text-center">
                                <div class="text-3xl font-bold mb-1">50+</div>
                                <div class="text-sm text-white/60">Projects</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold mb-1">30+</div>
                                <div class="text-sm text-white/60">Clients</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold mb-1">5+</div>
                                <div class="text-sm text-white/60">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 scroll-reveal">Technical Skills</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Skill Card 1 -->
                <div class="glass-card rounded-2xl p-8 scroll-reveal">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                <i class="fab fa-react text-blue-400 text-xl"></i>
                            </div>
                            <span class="font-semibold">React & Next.js</span>
                        </div>
                        <span class="text-white/60">95%</span>
                    </div>
                    <div class="skill-bar h-2">
                        <div class="skill-progress" style="width: 0%" data-width="95%"></div>
                    </div>
                </div>

                <!-- Skill Card 2 -->
                <div class="glass-card rounded-2xl p-8 scroll-reveal">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                                <i class="fab fa-js text-yellow-400 text-xl"></i>
                            </div>
                            <span class="font-semibold">JavaScript/TypeScript</span>
                        </div>
                        <span class="text-white/60">90%</span>
                    </div>
                    <div class="skill-bar h-2">
                        <div class="skill-progress" style="width: 0%" data-width="90%"></div>
                    </div>
                </div>

                <!-- Skill Card 3 -->
                <div class="glass-card rounded-2xl p-8 scroll-reveal">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                <i class="fab fa-css3-alt text-cyan-400 text-xl"></i>
                            </div>
                            <span class="font-semibold">Tailwind CSS</span>
                        </div>
                        <span class="text-white/60">92%</span>
                    </div>
                    <div class="skill-bar h-2">
                        <div class="skill-progress" style="width: 0%" data-width="92%"></div>
                    </div>
                </div>

                <!-- Skill Card 4 -->
                <div class="glass-card rounded-2xl p-8 scroll-reveal">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                <i class="fab fa-node text-green-400 text-xl"></i>
                            </div>
                            <span class="font-semibold">Node.js</span>
                        </div>
                        <span class="text-white/60">85%</span>
                    </div>
                    <div class="skill-bar h-2">
                        <div class="skill-progress" style="width: 0%" data-width="85%"></div>
                    </div>
                </div>

                <!-- Skill Card 5 -->
                <div class="glass-card rounded-2xl p-8 scroll-reveal">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                <i class="fas fa-database text-purple-400 text-xl"></i>
                            </div>
                            <span class="font-semibold">PostgreSQL & MongoDB</span>
                        </div>
                        <span class="text-white/60">80%</span>
                    </div>
                    <div class="skill-bar h-2">
                        <div class="skill-progress" style="width: 0%" data-width="80%"></div>
                    </div>
                </div>

                <!-- Skill Card 6 -->
                <div class="glass-card rounded-2xl p-8 scroll-reveal">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                <i class="fab fa-figma text-orange-400 text-xl"></i>
                            </div>
                            <span class="font-semibold">UI/UX Design</span>
                        </div>
                        <span class="text-white/60">88%</span>
                    </div>
                    <div class="skill-bar h-2">
                        <div class="skill-progress" style="width: 0%" data-width="88%"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-4 scroll-reveal">Featured Projects</h2>
            <p class="text-center text-white/70 mb-16 scroll-reveal">Some of my recent work</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="glass-card rounded-2xl overflow-hidden group scroll-reveal">
                    <div class="h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-shopping-cart text-6xl text-white/20 group-hover:scale-110 transition duration-500"></i>
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <button class="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">E-Commerce Platform</h3>
                        <p class="text-white/70 text-sm mb-4">Full-stack shopping platform with real-time inventory and payment integration.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 glass rounded-full text-xs">React</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">Node.js</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">Stripe</span>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="glass-card rounded-2xl overflow-hidden group scroll-reveal">
                    <div class="h-48 bg-gradient-to-br from-green-500/30 to-teal-500/30 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-chart-line text-6xl text-white/20 group-hover:scale-110 transition duration-500"></i>
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <button class="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Analytics Dashboard</h3>
                        <p class="text-white/70 text-sm mb-4">Real-time data visualization dashboard with interactive charts and reports.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 glass rounded-full text-xs">Next.js</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">D3.js</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">PostgreSQL</span>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="glass-card rounded-2xl overflow-hidden group scroll-reveal">
                    <div class="h-48 bg-gradient-to-br from-pink-500/30 to-rose-500/30 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-mobile-alt text-6xl text-white/20 group-hover:scale-110 transition duration-500"></i>
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <button class="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Social Media App</h3>
                        <p class="text-white/70 text-sm mb-4">Mobile-first social platform with real-time messaging and stories.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 glass rounded-full text-xs">React Native</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">Firebase</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">Redux</span>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="glass-card rounded-2xl overflow-hidden group scroll-reveal">
                    <div class="h-48 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-brain text-6xl text-white/20 group-hover:scale-110 transition duration-500"></i>
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <button class="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">AI Task Manager</h3>
                        <p class="text-white/70 text-sm mb-4">Smart task management with AI-powered prioritization and scheduling.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 glass rounded-full text-xs">Python</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">TensorFlow</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">FastAPI</span>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="glass-card rounded-2xl overflow-hidden group scroll-reveal">
                    <div class="h-48 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-cloud text-6xl text-white/20 group-hover:scale-110 transition duration-500"></i>
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <button class="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Cloud Storage</h3>
                        <p class="text-white/70 text-sm mb-4">Secure file storage solution with end-to-end encryption.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 glass rounded-full text-xs">AWS</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">Go</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">Docker</span>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="glass-card rounded-2xl overflow-hidden group scroll-reveal">
                    <div class="h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center relative overflow-hidden">
                        <i class="fas fa-gamepad text-6xl text-white/20 group-hover:scale-110 transition duration-500"></i>
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <button class="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Game Portfolio</h3>
                        <p class="text-white/70 text-sm mb-4">Interactive 3D game showcase built with Three.js and WebGL.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 glass rounded-full text-xs">Three.js</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">WebGL</span>
                            <span class="px-3 py-1 glass rounded-full text-xs">Vue</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6">
        <div class="max-w-4xl mx-auto">
            <div class="glass rounded-3xl p-8 md:p-16 scroll-reveal">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p class="text-white/70">Have a project in mind? Let's work together!</p>
                </div>
                
                <form class="space-y-6" onsubmit="event.preventDefault(); alert('Message sent!');">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium mb-2 text-white/80">Name</label>
                            <input type="text" class="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition text-white placeholder-white/30" placeholder="John Doe">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2 text-white/80">Email</label>
                            <input type="email" class="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition text-white placeholder-white/30" placeholder="john@example.com">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2 text-white/80">Subject</label>
                        <input type="text" class="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition text-white placeholder-white/30" placeholder="Project Inquiry">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2 text-white/80">Message</label>
                        <textarea rows="5" class="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition text-white placeholder-white/30 resize-none" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" class="w-full py-4 bg-white text-purple-900 rounded-xl font-bold text-lg hover:scale-[1.02] transition transform shadow-lg hover:shadow-xl">
                        Send Message <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </form>

                <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="flex items-center space-x-2 text-white/60">
                        <i class="fas fa-envelope"></i>
                        <span>hello@portfolio.com</span>
                    </div>
                    <div class="flex space-x-6">
                        <a href="#" class="text-white/60 hover:text-white transition"><i class="fab fa-github text-xl"></i></a>
                        <a href="#" class="text-white/60 hover:text-white transition"><i class="fab fa-linkedin text-xl"></i></a>
                        <a href="#" class="text-white/60 hover:text-white transition"><i class="fab fa-twitter text-xl"></i></a>
                        <a href="#" class="text-white/60 hover:text-white transition"><i class="fab fa-instagram text-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 text-center text-white/40 text-sm">
        <p>&copy; 2026 Portfolio. Built with passion and glassmorphism.</p>
    </footer>

    <script>
        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Typing Effect
        const words = ['Developer', 'Designer', 'Creator', 'Innovator'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing effect
        type();

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Animate skill bars if this is a skill card
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 200);
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobileMenu').classList.add('hidden');
                }
            });
        });

        // Parallax Effect for Orbs
        document.addEventListener('mousemove', (e) => {
            const orbs = document.querySelectorAll('.orb');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
                const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
                orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });

        // Navbar Glass Effect on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                nav.style.background = 'rgba(255, 255, 255, 0.1)';
            } else {
                nav.classList.remove('shadow-lg');
                nav.style.background = 'rgba(255, 255, 255, 0.08)';
            }
        });
    </script>
</body>
</html>

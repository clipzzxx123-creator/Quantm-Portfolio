import './App.css';

function App() {
  const sections = [
    { id: 'pfp', title: 'PFP', description: 'Profile picture designs and concepts.' },
    { id: 'banners', title: 'BANNERS', description: 'Header and banner visuals for social platforms.' },
    { id: 'vfx', title: 'VFX', description: 'Motion and visual effects direction.' },
    { id: 'gfx', title: 'GFX', description: 'Static graphics and brand assets.' },
  ];

  return (
    <div className="app">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="content-section">
          <h2 className="section-header">{section.title}</h2>
          <div className="section-body">
            <p>{section.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;

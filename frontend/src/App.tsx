interface Resource {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
}

function App() {
  const resources: Resource[] = [
    {
      id: 1,
      name: "Accessibility Resource Center",
      category: "Student Support",
      description:
        "Provides accessibility resources, accommodations, and support for students.",
      location: "Student Services Building",
    },
    {
      id: 2,
      name: "Accessible Technology Lab",
      category: "Technology",
      description:
        "Provides assistive technology and accessible computing resources.",
      location: "Library",
    },
  ];

  return (
    <div>
      <h1>Accessibility Resource Manager</h1>

      {resources.map((resource) => (
        <div key={resource.id}>
          <h2>{resource.name}</h2>

          <p>
            <strong>Category:</strong> {resource.category}
          </p>

          <p>
            <strong>Description:</strong> {resource.description}
          </p>

          <p>
            <strong>Location:</strong> {resource.location}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
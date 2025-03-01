import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

interface Team {
  id: number;
  name: string;
  city: string;
  founded: number;
  logo: string;
  colors: string;
}

function App() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeams = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api");
      setTeams(response.data.teams);
      setError(null);
    } catch (err) {
      setError("Failed to fetch teams. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Swedish Hockey League Teams</h1>
        <p>Discover the top hockey teams in Sweden</p>
      </header>

      {loading && <div className="loading">Loading teams...</div>}

      {error && <div className="error">{error}</div>}

      <div className="teams-grid">
        {teams.map((team) => (
          <div className="team-card" key={team.id}>
            <div className="team-logo">
              <img src={team.logo} alt={`${team.name} logo`} />
            </div>
            <div className="team-info">
              <h2>{team.name}</h2>
              <p>
                <strong>City:</strong> {team.city}
              </p>
              <p>
                <strong>Founded:</strong> {team.founded}
              </p>
              <div
                className="team-colors"
                style={{
                  background: `linear-gradient(to right, ${
                    team.colors.split(", ")[0]
                  }, ${team.colors.split(", ")[1]})`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <button className="refresh-btn" onClick={fetchTeams}>
        Refresh Teams
      </button>

      <footer>
        <p>© {new Date().getFullYear()} Swedish Hockey League Explorer</p>
      </footer>
    </div>
  );
}

export default App;

import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock3, ChefHat, CookingPot } from 'lucide-react';
import { recipes } from './recipes.js';

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Ir al inicio del recetario">
        <span className="brand-icon"><CookingPot size={23} /></span>
        <span>recetario<span className="brand-dot">.</span></span>
      </Link>
      <span className="header-note">Hecho en casa, con cariño</span>
    </header>
  );
}

function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow"><ChefHat size={15} /> COCINA ALGO RICO</p>
        <h1>Recetas sencillas,<br /><em>momentos deliciosos.</em></h1>
        <p className="hero-copy">Dos ideas para cocinar rico sin complicarte. Elige una receta y manos a la obra.</p>
      </section>

      <section aria-labelledby="recipes-title" className="recipes-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PARA EMPEZAR</p>
            <h2 id="recipes-title">Nuestro recetario</h2>
          </div>
          <span className="recipe-count">02 recetas</span>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <Link to={`/receta/${recipe.id}`} className="recipe-card" key={recipe.id}>
              <div className="card-image-wrap">
                <img src={recipe.image} alt={recipe.imageAlt} className="card-image" />
                <span className="card-number">0{index + 1}</span>
              </div>
              <div className="card-content">
                <div className="card-meta"><Clock3 size={15} /> {recipe.time}</div>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <span className="card-link">Ver receta <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <footer className="site-footer">Una buena comida empieza con una buena idea.</footer>
    </main>
  );
}

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <main className="page-shell not-found">
        <h1>Receta no encontrada</h1>
        <p>Esta receta no está en nuestro recetario.</p>
        <button className="back-button" onClick={() => navigate('/')}>Volver al inicio</button>
      </main>
    );
  }

  return (
    <main className="detail-shell">
      <button className="back-button" onClick={() => navigate(-1)}><ArrowLeft size={17} /> Volver al recetario</button>
      <section className="detail-hero">
        <img src={recipe.image} alt={recipe.imageAlt} className="detail-image" />
        <div className="detail-title-panel">
          <p className="eyebrow">RECETA PASO A PASO</p>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <span className="time-chip"><Clock3 size={16} /> {recipe.time}</span>
        </div>
      </section>
      <section className="recipe-instructions">
        <div className="ingredients-panel">
          <p className="eyebrow">LO QUE NECESITAS</p>
          <h2>Ingredientes</h2>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
          </ul>
        </div>
        <div className="steps-panel">
          <p className="eyebrow">A COCINAR</p>
          <h2>Preparación</h2>
          <ol className="step-list">
            {recipe.steps.map((step, index) => (
              <li key={step}>
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <footer className="site-footer">¡Buen provecho!</footer>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receta/:id" element={<RecipeDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
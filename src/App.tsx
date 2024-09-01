import './App.css';
import Navbar from './components/Navbar';
import Topics from './components/Topics';
import Featured from './components/Featured';
import CardList from './components/CardList';
import About from './components/About';
import Archives from './components/Archives';
import Sources from './components/Sources';
import BlogPost from './components/BlogPost';
import AnotherBlogPost from './components/AnotherBlogPost';
import NewFeature from './components/NewFeature';

function App() {
  return (
    <>
      <Navbar />
      <Topics />
      <Featured />
      <CardList />
      <div className="mt-12 container mx-auto flex">
        <span className="space-y-12">
          <BlogPost />
          <AnotherBlogPost />
          <NewFeature />
        </span>
        <span className="pl-[150px]">
          <About />
          <Archives />
          <Sources />
        </span>
      </div>
    </>
  );
}

export default App;

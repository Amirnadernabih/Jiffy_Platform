import Header from '../../components/user/header/Header'; 
import Categories from '../../components/user/categories/Categories';
import Trending from '../../components/user/trending/Trending';
import New from '../../components/user/new/New';
import Country from '../../components/user/country/Country';

const Home = () => {
  return (
    <div style={{ overflowX: "hidden"}}>
      {/* Header */}
      <Header />
      
      {/* Rest of the sections */}
      <Categories />
      <Trending />
      <New />
      <Country />
    </div>
  );
};

export default Home;

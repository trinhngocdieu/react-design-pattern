
import Layout from "../components/core/Layout";
import ListBreedDog from "../components/DogBreed/ListBreedDog";

const IndexPage = () => {
  return (
    <Layout title="Dog List">
      <h1>Dog List</h1>
      <ListBreedDog />
    </Layout>
  );
}
export default IndexPage;
